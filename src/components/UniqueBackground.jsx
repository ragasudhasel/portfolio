import React, { useEffect, useRef } from 'react';

const UniqueBackground = () => {
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
            createParticles();
        };
        window.addEventListener('resize', handleResize);

        let particles = [];
        const particleCount = 120;
        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2 + 0.5,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: Math.random() * -0.5 - 0.2, // Move up slowly
                    opacity: Math.random() * 0.6 + 0.1,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: Math.random() * 0.02 + 0.01,
                    color: Math.random() > 0.3 ? '#00ffcc' : '#7c3aed' // Mix of cyan and purple
                });
            }
        };
        
        createParticles();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.wobble += p.wobbleSpeed;
                p.x += p.vx + Math.sin(p.wobble) * 0.5;
                p.y += p.vy;

                // Mouse interaction - very gentle repel
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 150) {
                    p.x -= dx * 0.01;
                    p.y -= dy * 0.01;
                    p.opacity = Math.min(1, p.opacity + 0.05); // glow when mouse near
                } else {
                    p.opacity = Math.max(0.1, p.opacity - 0.005);
                }

                // Wrap around
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                
                // Add glow effect
                ctx.shadowBlur = p.radius * 4;
                ctx.shadowColor = p.color;
                ctx.fillStyle = p.color === '#00ffcc' 
                    ? `rgba(0, 255, 204, ${p.opacity})` 
                    : `rgba(124, 58, 237, ${p.opacity})`;
                
                ctx.fill();
                
                // Reset shadow for performance
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            draw();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default UniqueBackground;
