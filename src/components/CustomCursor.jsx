import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Check for reduced motion, don't show custom cursor if reduced motion is preferred
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-screen shadow-[0_0_10px_rgba(0,255,204,0.8)]"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                scale: isHovering ? 2 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    );
};

export default CustomCursor;
