import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+{}[]<>?/';

const DecodeText = ({ text, className, style, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState(text.replace(/./g, '0'));
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let iterations = 0;
        let interval;

        const startDecoding = () => {
            clearInterval(interval);
            interval = setInterval(() => {
                setDisplayedText((prev) => 
                    text.split('').map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    }).join('')
                );

                if (iterations >= text.length) {
                    clearInterval(interval);
                }
                iterations += 1 / 3; // Controls the speed of decoding
            }, 30);
        };

        const timeoutId = setTimeout(startDecoding, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(interval);
        };
    }, [text, delay, isHovering]);

    return (
        <motion.span
            className={className}
            onMouseEnter={() => setIsHovering(!isHovering)} // Trigger scramble on hover
            style={{ display: 'inline-block', ...style }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.span>
    );
};

export default DecodeText;
