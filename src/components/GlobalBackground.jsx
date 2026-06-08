import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-50 overflow-hidden bg-[#0a0f1e]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9zdmc+')] bg-repeat opacity-50" />
            
            {/* Glowing Orbs */}
            <motion.div 
                animate={{ 
                    x: ['-20%', '20%', '-20%'],
                    y: ['-20%', '20%', '-20%'],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#00ffcc]/5 rounded-full blur-[120px]"
            />
            <motion.div 
                animate={{ 
                    x: ['20%', '-20%', '20%'],
                    y: ['20%', '-20%', '20%'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] bg-[#1e40af]/10 rounded-full blur-[150px]"
            />
        </div>
    );
};

export default GlobalBackground;
