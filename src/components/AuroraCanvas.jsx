import React, { useEffect, useRef } from 'react';

const AuroraCanvas = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    const isVisible = useRef(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Draw an aurora wave using sine math
        const drawWave = (color, offset, amplitude, frequency, speed, opacity) => {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            
            for (let x = 0; x <= canvas.width; x += 10) {
                // Combine multiple sine waves for a more organic/fluid look
                const y = canvas.height * 0.5 
                    + Math.sin(x * frequency + time * speed + offset) * amplitude
                    + Math.cos(x * frequency * 0.5 - time * speed * 0.8) * (amplitude * 0.5);
                ctx.lineTo(x, y);
            }
            
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();

            // Create a gradient for the wave to make it fade out nicely
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.fill();
        };

        const draw = () => {
            if (!isVisible.current) {
                animationFrameId.current = requestAnimationFrame(draw);
                return;
            }

            // Clear the canvas with the deep navy base
            ctx.fillStyle = '#0a0f1e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw multiple waves to simulate the aurora
            // Parameters: color, offset, amplitude, frequency, speed, opacity
            ctx.globalCompositeOperation = 'screen'; // Creates a nice glowing overlapping effect

            // Purple wave
            drawWave('#7c3aed', 0, 150, 0.002, 0.005, 0.25);
            // Cyan wave
            drawWave('#00ffcc', Math.PI, 120, 0.003, 0.006, 0.20);
            // Blue wave
            drawWave('#1e40af', Math.PI * 0.5, 180, 0.0015, 0.004, 0.15);

            ctx.globalCompositeOperation = 'source-over'; // Reset

            time++;
            animationFrameId.current = requestAnimationFrame(draw);
        };

        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            resizeCanvas();
            draw();
            window.addEventListener('resize', resizeCanvas);
        } else {
            // For reduced motion, just draw a static gradient
            resizeCanvas();
            ctx.fillStyle = '#0a0f1e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const staticGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            staticGrad.addColorStop(0, '#0a0f1e');
            staticGrad.addColorStop(0.5, '#1e40af33');
            staticGrad.addColorStop(1, '#00ffcc33');
            ctx.fillStyle = staticGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const handleVisibilityChange = () => {
            isVisible.current = !document.hidden;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        />
    );
};

export default AuroraCanvas;
