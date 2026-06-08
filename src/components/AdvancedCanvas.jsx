import React, { useEffect, useRef } from 'react';

const AdvancedCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        let time = 0;

        const drawHexagon = (x, y, size, color) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#0a0f1e';
            ctx.fillRect(0, 0, width, height);

            time += 0.02;
            const hexSize = 40;
            const hexHeight = hexSize * Math.sqrt(3);
            const hexWidth = hexSize * 2;
            const xOffset = hexWidth * 0.75;
            const yOffset = hexHeight;

            for (let x = -1; x < width / xOffset + 1; x++) {
                for (let y = -1; y < height / yOffset + 1; y++) {
                    const px = x * xOffset;
                    let py = y * yOffset;
                    if (x % 2 !== 0) py += yOffset / 2;

                    // Create a wave effect across the grid
                    const wave = Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time);
                    const opacity = Math.max(0.05, 0.15 + wave * 0.15);
                    
                    const color = `rgba(0, 255, 204, ${opacity})`;
                    drawHexagon(px, py, hexSize * 0.9, color);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            draw();
        } else {
            ctx.fillStyle = '#0a0f1e';
            ctx.fillRect(0, 0, width, height);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default AdvancedCanvas;
