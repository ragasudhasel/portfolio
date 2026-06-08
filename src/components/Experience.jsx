import React from 'react';
import { Briefcase, Award, Calendar, ChevronRight, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: 'Artificial Intelligence Intern',
            company: 'Infosys Springboard',
            period: 'Nov 2025 – Jan 2026',
            bullets: [
                'Developed EcoPackAI, a full-stack AI-powered sustainable packaging recommendation system, owning the project end-to-end from data preprocessing and model training to web deployment.',
                'Trained and benchmarked Random Forest and XGBoost models; XGBoost achieved 94.2% precision on held-out test data, outperforming Random Forest by 2.8% F1-score.',
                'Built a Flask REST API and Bootstrap front-end integrated with a PostgreSQL database for product data storage, recommendation history, and analytics.'
            ],
            tech: ['XGBoost', 'Random Forest', 'Flask', 'PostgreSQL', 'Python', 'Bootstrap']
        },
        {
            role: 'Data Analytics Intern (Inplant Training)',
            company: 'KNIME',
            period: 'Aug 2024',
            bullets: [
                'Automated 6 end-to-end data processing workflows in KNIME, replacing manual Excel pipelines and reducing weekly reporting time by approximately 60%.',
                'Integrated KNIME workflow outputs with Excel dashboard templates, enabling non-technical stakeholders to refresh and interpret analytical reports independently.'
            ],
            tech: ['KNIME', 'Data Analytics', 'Automation', 'Workflow Optimization', 'Excel']
        }
    ];

    const certifications = [
        { name: 'AI & MLOps', issuer: 'Udemy' },
        { name: 'Artificial Intelligence', issuer: 'Infosys Springboard' },
        { name: 'Prompt Engineering', issuer: 'Infosys Springboard' },
        { name: 'Introduction to Python', issuer: 'Infosys Springboard' },
        { name: 'Advanced Computer Networks', issuer: 'NPTEL' }
    ];

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
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 70, damping: 14 }
        }
    };

    return (
        <section id="experience" className="py-24 px-6 lg:px-12 bg-transparent relative overflow-hidden z-10">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        Internships & <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Certifications</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Experience Column */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-primary">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Internship Experience</h3>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.01 }}
                                    className="group relative bg-[#0a0f1e]/40 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#00ffcc]/50 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] transition-all duration-300 backdrop-blur-md overflow-hidden z-10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <p className="text-primary font-semibold text-sm md:text-base">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-slate-800/40 px-3 py-1 rounded-lg border border-slate-750 font-medium">
                                            <Calendar className="w-3.5 h-3.5 text-primary" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-5 text-gray-400 text-sm md:text-base">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                                        {exp.tech.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-lg text-xs"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-violet-650/10 border border-violet-600/20 rounded-xl text-violet-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ x: 6, borderColor: 'rgba(0, 255, 204, 0.4)' }}
                                    className="bg-[#0a0f1e]/40 border border-white/10 backdrop-blur-md rounded-xl p-4.5 flex items-center justify-between gap-4 transition-all cursor-default"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0 animate-pulse"></div>
                                        <div>
                                            <p className="font-semibold text-gray-200 text-sm md:text-base">{cert.name}</p>
                                            <p className="text-xs text-gray-500">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <Bookmark className="w-4 h-4 text-violet-400/60" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
