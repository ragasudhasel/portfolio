import React from 'react';
import { Code, Brain, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code className="w-8 h-8 text-primary" />,
            skills: ['Python', 'C']
        },
        {
            title: 'ML/DL Frameworks',
            icon: <Brain className="w-8 h-8 text-primary" />,
            skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV']
        },
        {
            title: 'Data Libraries',
            icon: <Database className="w-8 h-8 text-primary" />,
            skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
        },
        {
            title: 'Visualization Tools',
            icon: <BarChart3 className="w-8 h-8 text-primary" />,
            skills: ['Power BI', 'Tableau', 'Excel']
        },
        {
            title: 'Databases & Tools',
            icon: <Database className="w-8 h-8 text-primary" />,
            skills: ['MySQL', 'Jupyter', 'VS Code', 'Google Colab']
        },
        {
            title: 'Core Competencies',
            icon: <Brain className="w-8 h-8 text-primary" />,
            skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics']
        }
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-16"
                >
                    Technical <span className="text-primary">Skills</span>
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                            className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {category.icon}
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                                        className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-sm text-gray-300 cursor-pointer"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
