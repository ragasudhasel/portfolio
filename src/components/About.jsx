import React from 'react';
import { Award, GraduationCap, Users, Bookmark, Sparkles, CheckSquare, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 80, damping: 12 }
        }
    };

    const coursework = [
        'Machine Learning', 'Deep Learning', 'Computer Vision', 
        'NLP', 'DBMS', 'Statistics & Probability'
    ];

    const experiencedIn = [
        'Python', 'PyTorch', 'TensorFlow', 'Flask', 
        'Hugging Face', 'Prompt Engineering', 'RAG systems', 
        'YOLOv8', 'AI-powered web applications'
    ];

    const passionateAbout = [
        'AI-assisted website development', 'Bug fixing using AI tools', 
        'AI error checking', 'Intelligent Automation', 'Real-world GenAI products'
    ];

    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-[#090d16] relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        About <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Me & Education</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Objective & Education */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2.5">
                                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                                    Career Objective
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                                    Fresher AI Engineer with hands-on experience building production-grade Computer Vision, NLP, and Multimodal AI systems — including a YOLOv8 defect detection pipeline at 92.6% accuracy and a full-stack RAG-powered web application. Proven ability to ship end-to-end AI solutions using Python, PyTorch, TensorFlow, Flask, and Hugging Face. Interned at Infosys Springboard and led a 60+ member technical club as Secretary. Passionate about building real-world GenAI and ML products that scale.
                                </p>
                            </div>

                            {/* Experienced In & Passionate About sub-sections */}
                            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/60">
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-primary" /> Experienced In
                                    </h4>
                                    <ul className="space-y-2">
                                        {experiencedIn.map((item, index) => (
                                            <li key={index} className="text-xs text-gray-400 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-violet-400" /> Passionate About
                                    </h4>
                                    <ul className="space-y-2">
                                        {passionateAbout.map((item, index) => (
                                            <li key={index} className="text-xs text-gray-400 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                Education
                            </h3>
                            <div className="space-y-6">
                                {/* B.Tech */}
                                <div className="relative border-l-2 border-primary/30 pl-6 space-y-2 hover:border-primary transition-all duration-300">
                                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg md:text-xl text-white">B.Tech in Artificial Intelligence and Data Science</h4>
                                    <p className="text-primary text-sm font-medium">Kangeyam Institute of Technology, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm pt-0.5">
                                        <span>2022 – 2026</span>
                                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20 font-bold">CGPA: 8.48</span>
                                    </div>
                                    {/* Relevant Coursework */}
                                    <div className="pt-3">
                                        <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wide">Relevant Coursework:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {coursework.map((course, i) => (
                                                <span key={i} className="text-xs px-2.5 py-1 bg-slate-800/40 border border-slate-750 rounded-lg text-gray-300">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* HSC */}
                                <div className="relative border-l-2 border-slate-850 pl-6 space-y-1 hover:border-primary/50 transition-all duration-300">
                                    <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-base md:text-lg text-white">HSC</h4>
                                    <p className="text-gray-400 text-sm">MN. Murugappa Chettiar Girls HSS, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
                                        <span>Graduated: 2022</span>
                                        <span className="font-semibold text-gray-300">Score: 85.5%</span>
                                    </div>
                                </div>

                                {/* SSLC */}
                                <div className="relative border-l-2 border-slate-850 pl-6 space-y-1 hover:border-primary/50 transition-all duration-300">
                                    <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-base md:text-lg text-white">SSLC</h4>
                                    <p className="text-gray-400 text-sm">Thirumurugan Matric HSS, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
                                        <span>Graduated: 2020</span>
                                        <span className="font-semibold text-gray-300">Score: 83.6%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Roles & Achievements */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <Users className="w-6 h-6 text-primary" />
                                Roles & Responsibilities
                            </h3>
                            <div className="space-y-4">
                                <motion.div variants={itemVariants} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-primary/30 transition-all backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Secretary</h4>
                                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">2025 - 2026</span>
                                    </div>
                                    <p className="text-gray-300 font-semibold text-xs mb-2">Cyber Champion Club</p>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        Coordinated workshops and inter-college competitions for 60+ members; launched monthly AI knowledge-sharing sessions, increasing active participation by 40%.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-primary/30 transition-all backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Treasurer</h4>
                                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">2025 - 2026</span>
                                    </div>
                                    <p className="text-gray-300 font-semibold text-xs mb-2">Association of AI & DS</p>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        Managed annual budget allocation and expenditure tracking for events, guest lectures, and association activities.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-primary/30 transition-all backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Volunteer</h4>
                                        <span className="text-xs text-slate-500 font-medium">2025</span>
                                    </div>
                                    <p className="text-gray-300 font-semibold text-xs mb-2">Elantra ’25 (Technical Symposium)</p>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        Contributed to organizing the annual department level national symposium.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <Award className="w-6 h-6 text-primary" />
                                Achievements
                            </h3>
                            <div className="space-y-3 bg-slate-900/30 border border-slate-850 p-5 rounded-2xl">
                                <motion.div variants={itemVariants} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-ping"></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong>Smart India Hackathon Participant</strong> – Qualified institutional screening; built and presented an AI-powered solution at the national round.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong>AI-Driven Hackathon Participant</strong> – Built and demonstrated a functional AI prototype within a 24-hour competitive environment.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong>2nd Prize – Poster Design Competition</strong>: “Enhanced AI Technology for Future” (college-level technical event).
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
