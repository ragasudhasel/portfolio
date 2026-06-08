import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    const isVisible = useRef(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 600; // High number of particles for flow field
        
        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const resizeCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createParticles(); // Recreate on resize to distribute evenly
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    speed: Math.random() * 1.5 + 0.5,
                    radius: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.1,
                    color: Math.random() > 0.5 ? '#00ffcc' : '#7c3aed' // Mix of cyan and purple
                });
            }
        };

        let time = 0;

        const draw = () => {
            if (!isVisible.current) {
                animationFrameId.current = requestAnimationFrame(draw);
                return;
            }

            // Create trailing effect by filling with semi-transparent background
            ctx.fillStyle = 'rgba(3, 7, 18, 0.1)'; 
            ctx.fillRect(0, 0, width, height);
            
            ctx.globalAlpha = 1.0;

            particles.forEach(p => {
                // Calculate flow field angle using pseudo-noise (sine/cosine math)
                // This creates beautiful organic waves
                let scale = 0.003;
                let angle = Math.sin(p.x * scale + time) * Math.cos(p.y * scale + time) * Math.PI * 2;
                
                // Mouse interaction - particles swirl around the mouse
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < 200) {
                    // Create a vortex effect near the mouse
                    let mouseAngle = Math.atan2(dy, dx);
                    // Blend normal flow with vortex
                    angle = mouseAngle + Math.PI / 2 + (dist * 0.01); 
                    p.opacity = 1.0; // Glow up near mouse
                } else {
                    p.opacity = Math.max(0.1, p.opacity - 0.01); // Fade back to normal
                    if (p.opacity <= 0.1) p.opacity = Math.random() * 0.5 + 0.1;
                }

                p.vx = Math.cos(angle) * p.speed;
                p.vy = Math.sin(angle) * p.speed;

                p.x += p.vx;
                p.y += p.vy;

                // Screen wrap
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            time += 0.005;
            animationFrameId.current = requestAnimationFrame(draw);
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            resizeCanvas();
            createParticles();
            draw();
            window.addEventListener('resize', resizeCanvas);
        }

        const handleVisibilityChange = () => {
            isVisible.current = !document.hidden;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default NeuralCanvas;
