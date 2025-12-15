import React from 'react';
import { Award, TrendingUp } from 'lucide-react';
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
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-dark-800">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-16"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-primary">Career Objective</motion.h3>
                        <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-8">
                            Aspiring AI and Data Science Engineer passionate about applying Machine Learning,
                            Deep Learning, and Data Analytics to solve real-world problems. Skilled in building
                            intelligent models and dashboards using Python, with strong problem-solving and
                            analytical abilities.
                        </motion.p>

                        <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-primary">Education</motion.h3>
                        <div className="space-y-6">
                            <motion.div variants={itemVariants} className="border-l-4 border-primary pl-6 hover:translate-x-2 transition-transform duration-300">
                                <h4 className="font-semibold text-xl">B.Tech in AI and Data Science</h4>
                                <p className="text-gray-400">Kangeyam Institute of Technology, Tirupur</p>
                                <p className="text-gray-500">2022 – Present | CGPA: 8.51</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="border-l-4 border-primary pl-6 hover:translate-x-2 transition-transform duration-300">
                                <h4 className="font-semibold text-lg">HSC</h4>
                                <p className="text-gray-400">MN. Murugappa Chettiar Girls HSS, Tirupur</p>
                                <p className="text-gray-500">2022 | 85.5%</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="border-l-4 border-primary pl-6 hover:translate-x-2 transition-transform duration-300">
                                <h4 className="font-semibold text-lg">SSLC</h4>
                                <p className="text-gray-400">Thirumurugan Matric HSS, Tirupur</p>
                                <p className="text-gray-500">2020 | 83.6%</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                            <TrendingUp className="w-6 h-6" />
                            Leadership Roles
                        </motion.h3>
                        <div className="space-y-4 mb-8">
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-dark-900 border border-dark-700 rounded-lg p-4 cursor-pointer">
                                <p className="font-semibold">Secretary – Cyber Champion Club</p>
                                <p className="text-gray-400 text-sm">Mar 2025 – Present</p>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-dark-900 border border-dark-700 rounded-lg p-4 cursor-pointer">
                                <p className="font-semibold">Treasurer – Association of AI & DS</p>
                                <p className="text-gray-400 text-sm">Aug 2025 – Present</p>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-dark-900 border border-dark-700 rounded-lg p-4 cursor-pointer">
                                <p className="font-semibold">Volunteer – Elantra '25</p>
                                <p className="text-gray-400 text-sm">2025</p>
                            </motion.div>
                        </div>

                        <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                            <Award className="w-6 h-6" />
                            Achievements
                        </motion.h3>
                        <div className="space-y-3">
                            <motion.div variants={itemVariants} className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Secured 2nd Prize – Poster Design on "Enhanced AI Technology for Future"</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Participated in Smart India Hackathon (National Level)</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Participated in AI-Driven Hackathon</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
