import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AICoreBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none z-0">
            {/* Base static ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00ffcc]/10 to-[#7c3aed]/10 rounded-full blur-[150px] opacity-50"></div>

            {/* Mouse following Core Orb */}
            <motion.div 
                animate={{ 
                    x: mousePosition.x - 400, 
                    y: mousePosition.y - 400 
                }}
                transition={{
                    type: "spring",
                    stiffness: 10,
                    damping: 40,
                    mass: 2
                }}
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[180px] opacity-60 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(0,255,204,0.3) 0%, rgba(124,58,237,0.2) 40%, rgba(0,0,0,0) 70%)'
                }}
            />

            {/* Slow moving decorative orb */}
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                    scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]"
            />
            
            {/* Extreme dark vignette to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)]"></div>
        </div>
    );
};

export default AICoreBackground;
