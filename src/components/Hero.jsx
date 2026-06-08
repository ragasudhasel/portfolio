import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import MinimalAdvancedCanvas from './MinimalAdvancedCanvas';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ["AI Engineer", "ML Developer", "Computer Vision Engineer", "Prompt Engineer"];

    useEffect(() => {
        const timer = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [titles.length]);

    // 3D Parallax Setup for incredibly advanced clean feel
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: 'spring', stiffness: 90, damping: 14 }
        }
    };

    return (
        <section 
            id="hero" 
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ perspective: 1200 }}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1e] px-6 py-24 z-0"
        >
            {/* Minimal but Advanced Interactive Background */}
            <MinimalAdvancedCanvas />

            <motion.div
                className="relative z-10 max-w-4xl text-center w-full flex-grow flex flex-col justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-5 leading-tight text-center relative"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <motion.span 
                        className="inline-block uppercase tracking-wider"
                        style={{ 
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            color: '#ffffff',
                            WebkitTextStroke: '1px #00ffcc',
                            textShadow: '0 0 15px rgba(0, 255, 204, 0.6), 0 0 30px rgba(0, 255, 204, 0.3)',
                            fontSize: 'clamp(3rem, 8vw, 6rem)'
                        }}
                    >
                        RAGASUDHA
                    </motion.span>
                </motion.h1>

                {/* Rotating Role Text */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 h-12 flex items-center justify-center overflow-hidden"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={titleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                color: '#00ffcc',
                                textShadow: '0 0 15px rgba(0, 255, 204, 0.4)'
                            }}
                        >
                            {titles[titleIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </motion.div>

                {/* Contact Pill Bar */}
                <motion.div
                    variants={itemVariants}
                    style={{ transform: "translateZ(20px)" }}
                    className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-300 bg-white/[0.03] border border-white/10 px-8 py-3 rounded-full max-w-3xl mx-auto mb-10 backdrop-blur-xl hover:bg-white/[0.06] hover:border-[#00ffcc]/50 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                    <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=ss.ragasudharaj@gmail.com" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 transition-all duration-300 text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-[#00ffcc] hover:drop-shadow-[0_0_12px_rgba(0,255,204,0.9)]">
                        <Mail className="w-4 h-4" /> ss.ragasudharaj@gmail.com
                    </motion.a>
                    <span className="hidden md:inline opacity-30">•</span>
                    <motion.a href="tel:9344063233" whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 transition-all duration-300 text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-[#00ffcc] hover:drop-shadow-[0_0_12px_rgba(0,255,204,0.9)]">
                        <Phone className="w-4 h-4" /> 9344063233
                    </motion.a>
                    <span className="hidden md:inline opacity-30">•</span>
                    <motion.a href="https://www.linkedin.com/in/ragasudha-selvaraj" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 transition-all duration-300 text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-[#00ffcc] hover:drop-shadow-[0_0_12px_rgba(0,255,204,0.9)]">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </motion.a>
                    <span className="hidden md:inline opacity-30">•</span>
                    <motion.a href="https://github.com/ragasudhasel" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 transition-all duration-300 text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-[#00ffcc] hover:drop-shadow-[0_0_12px_rgba(0,255,204,0.9)]">
                        <Github className="w-4 h-4" /> GitHub
                    </motion.a>
                </motion.div>

                {/* Advanced CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    style={{ transform: "translateZ(40px)" }}
                    className="flex flex-wrap justify-center gap-5"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3.5 bg-white/5 border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,204,0.8)] hover:border-[#00ffcc] text-white hover:text-[#00ffcc] rounded-full transition-all duration-300 font-medium text-sm flex items-center gap-2 backdrop-blur-md overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/0 via-[#00ffcc]/20 to-[#00ffcc]/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects 
                            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </motion.a>
                    
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-3.5 bg-white/5 border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,204,0.8)] hover:border-[#00ffcc] text-white hover:text-[#00ffcc] rounded-full transition-all duration-300 font-medium text-sm flex items-center justify-center backdrop-blur-sm"
                    >
                        Contact Me
                    </motion.a>

                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3.5 bg-white/5 border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,204,0.8)] hover:border-[#00ffcc] text-white hover:text-[#00ffcc] rounded-full transition-all duration-300 font-medium text-sm flex items-center gap-2 backdrop-blur-sm"
                    >
                        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> Download CV
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <a href="#about" className="text-gray-500 hover:text-[#00ffcc] transition-colors flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
