import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MinimalAdvancedCanvas = () => {
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

    // Use framer-motion springs for ultra-smooth, premium cursor tracking
    const springConfig = { damping: 35, stiffness: 200, mass: 1 };
    const cursorX = useSpring(-1000, springConfig);
    const cursorY = useSpring(-1000, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorX, cursorY]);

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#0a0f1e] pointer-events-none z-0">
            
            {/* Very faint static radial gradient in the center so it's not completely flat when mouse is away */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#1e40af]/10 rounded-full blur-[150px] opacity-30"></div>

            {/* The Advanced Interactive Cursor Glow */}
            <motion.div 
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen opacity-60"
            >
                {/* Inner bright core */}
                <div className="absolute inset-0 bg-[#00ffcc]/30 rounded-full blur-[100px]"></div>
                {/* Outer purple halo */}
                <div className="absolute inset-[-100px] bg-[#7c3aed]/20 rounded-full blur-[150px]"></div>
            </motion.div>

            {/* Ultra-minimal scanline overlay for that 'advanced tech' feel without being noisy */}
            <div 
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #ffffff 1px, #ffffff 2px)',
                    backgroundSize: '100% 4px'
                }}
            ></div>
        </div>
    );
};

export default MinimalAdvancedCanvas;
