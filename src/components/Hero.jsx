import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, Download, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 90, damping: 14 }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] px-6 py-24">
            {/* Ultra-Modern Ambient Orb Glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '3s' }}></div>
            
            {/* Tech Dots Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            <motion.div
                className="relative z-10 max-w-4xl text-center w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Minimal Tech Badge */}
                <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-primary text-xs font-semibold tracking-widest uppercase mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                    Portfolio Hub
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-7xl md:text-8xl font-black mb-5 leading-tight tracking-tight text-white"
                >
                    Hi, I'm <span className="bg-gradient-to-r from-primary via-emerald-450 to-cyan-400 bg-clip-text text-transparent">Ragasudha</span>
                </motion.h1>

                {/* Role: Only AI Engineer */}
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-gray-150 tracking-wide"
                >
                    AI Engineer
                </motion.h2>

                {/* Micro Profile Bar */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-400 bg-slate-900/40 border border-white/5 px-6 py-3 rounded-2xl max-w-3xl mx-auto mb-10 backdrop-blur-md"
                >
                    <a href="mailto:ss.ragasudharaj@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-all">
                        <Mail className="w-4 h-4 text-primary" /> ss.ragasudharaj@gmail.com
                    </a>
                    <span className="hidden md:inline text-slate-800">•</span>
                    <a href="tel:9344063233" className="flex items-center gap-1.5 hover:text-primary transition-all">
                        <Phone className="w-4 h-4 text-primary" /> 9344063233
                    </a>
                    <span className="hidden md:inline text-slate-800">•</span>
                    <a href="https://www.linkedin.com/in/ragasudha-selvaraj" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-all">
                        <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
                    </a>
                    <span className="hidden md:inline text-slate-800">•</span>
                    <a href="https://github.com/ragasudhasel" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-all">
                        <Github className="w-4 h-4 text-primary" /> GitHub
                    </a>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Passionate about building AI-powered applications using Computer Vision, NLP, Deep Learning, Prompt Engineering, and Full Stack AI Development.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 bg-primary text-slate-950 font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/10 text-sm tracking-wide"
                    >
                        View Projects <ArrowRight className="w-4.5 h-4.5" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-gray-300 hover:text-white rounded-xl transition-all font-semibold text-sm"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 bg-transparent border border-white/5 hover:border-primary/30 text-gray-450 hover:text-white rounded-xl transition-all font-semibold text-sm flex items-center gap-1.5"
                    >
                        <Download className="w-4 h-4" /> Download CV
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
