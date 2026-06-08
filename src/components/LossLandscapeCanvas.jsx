import React, { useEffect, useRef } from 'react';

const LossLandscapeCanvas = () => {
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

        // Terrain settings
        const cols = 50;
        const rows = 40;
        const scl = 50; // scale of each grid square
        let terrain = [];
        let flying = 0;

        // Initialize terrain array
        for (let x = 0; x < cols; x++) {
            terrain[x] = [];
            for (let y = 0; y < rows; y++) {
                terrain[x][y] = 0;
            }
        }

        const draw = () => {
            flying -= 0.02; // speed of forward movement

            // Generate "loss landscape" heights using combined sine waves (simulating noise)
            let yoff = flying;
            for (let y = 0; y < rows; y++) {
                let xoff = 0;
                for (let x = 0; x < cols; x++) {
                    // Combine a few sine waves for organic-looking hills and valleys
                    const h1 = Math.sin(xoff * 2 + yoff * 1.5) * 40;
                    const h2 = Math.sin(xoff * 0.8 - yoff * 0.9) * 60;
                    const h3 = Math.cos(xoff * 1.5 + yoff * 0.5) * 30;
                    terrain[x][y] = h1 + h2 + h3;
                    xoff += 0.15;
                }
                yoff += 0.15;
            }

            // Clear background
            const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
            gradient.addColorStop(0, '#0a0f1e');
            gradient.addColorStop(1, '#02040a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            // Move to center bottom to create perspective
            ctx.translate(width / 2, height / 2 + 200);
            
            // Tilt the plane for 3D perspective
            ctx.scale(1, 0.4); 

            // Center the grid
            const w = cols * scl;
            const h = rows * scl;
            ctx.translate(-w / 2, -h / 2);

            ctx.lineWidth = 1;

            // Draw the wireframe grid
            for (let y = 0; y < rows - 1; y++) {
                ctx.beginPath();
                for (let x = 0; x < cols; x++) {
                    const px = x * scl;
                    const py = y * scl;
                    const pz = terrain[x][y];
                    
                    if (x === 0) {
                        ctx.moveTo(px, py - pz);
                    } else {
                        ctx.lineTo(px, py - pz);
                    }
                }
                
                // Color based on depth (y position) to create fading effect
                const alpha = Math.max(0, 1 - (y / rows));
                ctx.strokeStyle = `rgba(0, 255, 204, ${alpha * 0.5})`; // Cyan wireframe
                ctx.stroke();
            }

            // Draw vertical lines
            for (let x = 0; x < cols - 1; x++) {
                ctx.beginPath();
                for (let y = 0; y < rows; y++) {
                    const px = x * scl;
                    const py = y * scl;
                    const pz = terrain[x][y];
                    
                    if (y === 0) {
                        ctx.moveTo(px, py - pz);
                    } else {
                        ctx.lineTo(px, py - pz);
                    }
                }
                ctx.strokeStyle = `rgba(0, 255, 204, 0.15)`; // Lighter cyan for verticals
                ctx.stroke();
            }

            ctx.restore();

            // Draw a subtle glowing "Global Minimum" orb at the bottom center to represent AI optimization
            ctx.beginPath();
            ctx.arc(width / 2, height - 100, 150, 0, Math.PI * 2);
            const orbGlow = ctx.createRadialGradient(width/2, height-100, 0, width/2, height-100, 150);
            orbGlow.addColorStop(0, 'rgba(0, 255, 204, 0.15)');
            orbGlow.addColorStop(1, 'rgba(0, 255, 204, 0)');
            ctx.fillStyle = orbGlow;
            ctx.fill();

            animationFrameId = requestAnimationFrame(draw);
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            draw();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default LossLandscapeCanvas;
