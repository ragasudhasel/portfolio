import React from 'react';
import { Briefcase, Award, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const certifications = [
        'Python for Beginners – Infosys',
        'Machine Learning – Infosys',
        'Excel – Microsoft',
        'Advance Computer Networks – NPTEL',
        'Power BI – Microsoft'
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="experience" className="py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-16"
                >
                    Experience & <span className="text-primary">Certifications</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                            <Briefcase className="w-6 h-6" />
                            Experience
                        </h3>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-dark-800 border border-dark-700 rounded-lg p-6"
                        >
                            <span className="text-gray-500 text-sm">Aug 2024</span>
                            <h4 className="text-xl font-semibold mt-2 mb-1">Inplant Internship – KNIME</h4>
                            <p className="text-primary mb-4">Builders Engineering College, Tiruppur</p>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Worked hands-on with KNIME to develop and automate multiple workflows for
                                efficient data processing and visualization. Integrated KNIME workflows with
                                Excel to enhance reporting and analytical insights.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['KNIME', 'Data Processing', 'Automation', 'Excel'].map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs cursor-pointer"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                            <Award className="w-6 h-6" />
                            Certifications
                        </h3>
                        <div className="space-y-3">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ x: 5, backgroundColor: 'rgba(30, 30, 46, 1)' }}
                                    className="bg-dark-800 border border-dark-700 rounded-lg p-4 flex items-center gap-3 cursor-pointer"
                                >
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-300">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 text-sm uppercase tracking-wider font-semibold"
                    >
                        <Download className="w-4 h-4" /> Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
