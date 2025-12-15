import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <motion.div
                className="max-w-4xl text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                >
                    <span className="text-primary">Ragasudha S.S</span>
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-semibold text-gray-400 mb-8"
                >
                    AI & Data Science Engineer
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Passionate about applying Machine Learning, Deep Learning, and Data Analytics
                    to solve real-world problems. Building intelligent models and impactful solutions.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 text-sm uppercase tracking-wider font-semibold"
                    >
                        Get In Touch
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-transparent border border-gray-700 rounded-full hover:border-primary hover:text-primary transition-all duration-300 text-sm uppercase tracking-wider font-semibold flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" /> Resume
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-6"
                >
                    <motion.a
                        href="https://github.com/ragasudhasel"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/ragasudha-selvaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                        href="mailto:ss.ragasudharaj@gmail.com"
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
