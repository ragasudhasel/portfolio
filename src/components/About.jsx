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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
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

    // Shared card style
    const glassCardStyle = {
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(0,255,204,0.15)',
    };
    
    const glassCardHoverStyle = {
        borderColor: 'rgba(0,255,204,0.4)',
        boxShadow: '0 0 20px rgba(0,255,204,0.1)'
    };

    return (
        <section 
            id="about" 
            className="py-24 px-6 lg:px-12 relative overflow-hidden z-10"
            style={{ 
                background: 'radial-gradient(ellipse at top left, rgba(124,58,237,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,255,204,0.06) 0%, transparent 50%)',
                fontFamily: "'Space Grotesk', sans-serif"
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl mb-4"
                        style={{ fontWeight: 700 }}
                    >
                        <span className="text-white">About Me </span>
                        <span 
                            className="text-[#00ffcc]"
                            style={{ textShadow: '0 0 15px rgba(0,255,204,0.5)' }}
                        >
                            & Education
                        </span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ backgroundColor: '#00ffcc', boxShadow: '0 0 10px #00ffcc' }}
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Objective & Education */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Career Objective Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ ...glassCardHoverStyle, y: -8, scale: 1.02 }}
                            className="group relative p-6 rounded-2xl backdrop-blur-md space-y-6 transition-all duration-300 overflow-hidden z-10"
                            style={{ 
                                ...glassCardStyle,
                                borderLeft: '3px solid #00ffcc'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2.5">
                                    <Sparkles className="w-5 h-5 text-[#00ffcc] animate-pulse" />
                                    Career Objective
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                                    Fresher AI Engineer with hands-on experience building production-grade Computer Vision, NLP, and Multimodal AI systems — including a YOLOv8 defect detection pipeline at 92.6% accuracy and a full-stack RAG-powered web application. Proven ability to ship end-to-end AI solutions using Python, PyTorch, TensorFlow, Flask, and Hugging Face. Interned at Infosys Springboard and led a 60+ member technical club as Secretary. Passionate about building real-world GenAI and ML products that scale.
                                </p>
                            </div>

                            {/* Experienced In & Passionate About sub-sections */}
                            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[rgba(0,255,204,0.1)]">
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-[#00ffcc]" /> Experienced In
                                    </h4>
                                    <ul className="space-y-2">
                                        {experiencedIn.map((item, index) => (
                                            <motion.li 
                                                key={index} 
                                                whileHover={{ x: 4, color: '#00ffcc' }}
                                                className="text-xs text-white font-medium flex items-center gap-2 cursor-default transition-colors duration-300"
                                            >
                                                <span 
                                                    className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] flex-shrink-0"
                                                    style={{ boxShadow: '0 0 6px #00ffcc' }}
                                                ></span>
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-[#00ffcc]" /> Passionate About
                                    </h4>
                                    <ul className="space-y-2">
                                        {passionateAbout.map((item, index) => (
                                            <motion.li 
                                                key={index} 
                                                whileHover={{ x: 4, color: '#00ffcc' }}
                                                className="text-xs text-white font-medium flex items-center gap-2 cursor-default transition-colors duration-300"
                                            >
                                                <span 
                                                    className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] flex-shrink-0"
                                                    style={{ boxShadow: '0 0 6px #00ffcc' }}
                                                ></span>
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <GraduationCap className="w-6 h-6 text-[#00ffcc]" />
                                Education
                            </h3>
                            <div className="space-y-6">
                                {/* B.Tech */}
                                <div className="relative border-l-2 border-[rgba(0,255,204,0.3)] pl-6 space-y-2 hover:border-[#00ffcc] transition-all duration-300 group">
                                    <div className="absolute w-3 h-3 bg-[#00ffcc] rounded-full -left-[7.5px] top-2 group-hover:shadow-[0_0_10px_#00ffcc] transition-shadow duration-300"></div>
                                    <h4 className="font-bold text-lg md:text-xl text-white">B.Tech in Artificial Intelligence and Data Science</h4>
                                    <p className="text-[#00ffcc] text-sm font-medium">Kangeyam Institute of Technology, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm pt-0.5">
                                        <span>2022 – 2026</span>
                                        <span className="bg-[#00ffcc]/10 text-[#00ffcc] px-2.5 py-0.5 rounded-full border border-[#00ffcc]/20 font-bold">CGPA: 8.48</span>
                                    </div>
                                    {/* Relevant Coursework */}
                                    <div className="pt-3">
                                        <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wide">Relevant Coursework:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {coursework.map((course, i) => (
                                                <span key={i} className="text-xs px-2.5 py-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,204,0.15)] rounded-lg text-gray-200">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* HSC */}
                                <div className="relative border-l-2 border-[rgba(255,255,255,0.1)] pl-6 space-y-1 hover:border-[rgba(0,255,204,0.5)] transition-all duration-300 group">
                                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7.5px] top-2 group-hover:bg-[#00ffcc] transition-colors duration-300"></div>
                                    <h4 className="font-bold text-base md:text-lg text-white">HSC</h4>
                                    <p className="text-[#00ffcc] text-sm">MN. Murugappa Chettiar Girls HSS, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm">
                                        <span>Graduated: 2022</span>
                                        <span className="bg-[#00ffcc]/10 text-[#00ffcc] px-2.5 py-0.5 rounded-full border border-[#00ffcc]/20 font-bold">Score: 85.5%</span>
                                    </div>
                                </div>

                                {/* SSLC */}
                                <div className="relative border-l-2 border-[rgba(255,255,255,0.1)] pl-6 space-y-1 hover:border-[rgba(0,255,204,0.5)] transition-all duration-300 group">
                                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7.5px] top-2 group-hover:bg-[#00ffcc] transition-colors duration-300"></div>
                                    <h4 className="font-bold text-base md:text-lg text-white">SSLC</h4>
                                    <p className="text-[#00ffcc] text-sm">Thirumurugan Matric HSS, Tirupur</p>
                                    <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm">
                                        <span>Graduated: 2020</span>
                                        <span className="bg-[#00ffcc]/10 text-[#00ffcc] px-2.5 py-0.5 rounded-full border border-[#00ffcc]/20 font-bold">Score: 83.6%</span>
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
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <Users className="w-6 h-6 text-[#00ffcc]" />
                                Roles & Responsibilities
                            </h3>
                            <div className="space-y-4">
                                <motion.div 
                                    variants={itemVariants} 
                                    whileHover={glassCardHoverStyle}
                                    className="rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm"
                                    style={glassCardStyle}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Secretary</h4>
                                        <span className="text-xs text-[#0a0f1e] font-bold bg-[#00ffcc] px-3 py-1 rounded-full">2025 - 2026</span>
                                    </div>
                                    <p className="text-[#00ffcc] font-semibold text-xs mb-2">Cyber Champion Club</p>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        Coordinated workshops and inter-college competitions for 60+ members; launched monthly AI knowledge-sharing sessions, increasing active participation by 40%.
                                    </p>
                                </motion.div>

                                <motion.div 
                                    variants={itemVariants} 
                                    whileHover={glassCardHoverStyle}
                                    className="rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm"
                                    style={glassCardStyle}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Treasurer</h4>
                                        <span className="text-xs text-[#0a0f1e] font-bold bg-[#00ffcc] px-3 py-1 rounded-full">2025 - 2026</span>
                                    </div>
                                    <p className="text-[#00ffcc] font-semibold text-xs mb-2">Association of AI & DS</p>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        Managed annual budget allocation and expenditure tracking for events, guest lectures, and association activities.
                                    </p>
                                </motion.div>

                                <motion.div 
                                    variants={itemVariants} 
                                    whileHover={glassCardHoverStyle}
                                    className="rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm"
                                    style={glassCardStyle}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-base">Volunteer</h4>
                                        <span className="text-xs text-[#0a0f1e] font-bold bg-[#00ffcc] px-3 py-1 rounded-full">2025</span>
                                    </div>
                                    <p className="text-[#00ffcc] font-semibold text-xs mb-2">Elantra ’25 (Technical Symposium)</p>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        Contributed to organizing the annual department level national symposium.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2.5">
                                <Award className="w-6 h-6 text-[#00ffcc]" />
                                Achievements
                            </h3>
                            <motion.div 
                                variants={itemVariants}
                                whileHover={glassCardHoverStyle}
                                className="space-y-4 p-5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                                style={glassCardStyle}
                            >
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-[#00ffcc] rounded-full mt-1.5 flex-shrink-0 group-hover:animate-ping" style={{ boxShadow: '0 0 6px #00ffcc' }}></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong className="text-white">Smart India Hackathon Participant</strong> – Qualified institutional screening; built and presented an AI-powered solution at the national round.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-[#00ffcc] rounded-full mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px #00ffcc' }}></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong className="text-white">AI-Driven Hackathon Participant</strong> – Built and demonstrated a functional AI prototype within a 24-hour competitive environment.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-[#00ffcc] rounded-full mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px #00ffcc' }}></div>
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        <strong className="text-white">2nd Prize – Poster Design Competition</strong>: “Enhanced AI Technology for Future” (college-level technical event).
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
