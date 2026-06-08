import React from 'react';
import { Code2, Brain, Eye, Sparkles, LineChart, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <Code2 className="w-5 h-5 text-primary" />,
            skills: ['Python', 'SQL']
        },
        {
            title: 'Machine & Deep Learning',
            icon: <Brain className="w-5 h-5 text-primary" />,
            skills: [
                'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'XGBoost', 
                'Random Forest', 'Transfer Learning', 'Model Optimization', 'Hyperparameter Tuning'
            ]
        },
        {
            title: 'Computer Vision',
            icon: <Eye className="w-5 h-5 text-primary" />,
            skills: ['OpenCV', 'YOLOv8', 'YOLO Object Detection', 'Image Classification', 'Real-time Detection']
        },
        {
            title: 'NLP & Generative AI',
            icon: <Sparkles className="w-5 h-5 text-primary" />,
            skills: [
                'Transformers', 'Hugging Face', 'TF-IDF', 'Sentiment Analysis', 'RAG', 
                'CLIP', 'Vision Language Models', 'Prompt Engineering', 'Multi-modal AI'
            ]
        },
        {
            title: 'Data Analysis & Visualization',
            icon: <LineChart className="w-5 h-5 text-primary" />,
            skills: ['Power BI', 'DAX', 'Tableau', 'Excel', 'Power Query', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
        },
        {
            title: 'Databases & Backend',
            icon: <Database className="w-5 h-5 text-primary" />,
            skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Flask', 'FastAPI', 'Bootstrap']
        },
        {
            title: 'Tools & Platforms',
            icon: <Terminal className="w-5 h-5 text-primary" />,
            skills: ['Git', 'GitHub', 'KNIME', 'Jupyter Notebook', 'Google Colab', 'VS Code']
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
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 13 }
        }
    };

    return (
        <section id="skills" className="py-24 px-6 lg:px-12 bg-[#070b16] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        Technical <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Skills</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"
                    ></motion.div>
                </div>

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
                            whileHover={{ y: -6 }}
                            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-150">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)' }}
                                        className="px-2.5 py-1 bg-slate-800/35 border border-slate-750 rounded-lg text-xs md:text-sm text-gray-300 cursor-default transition-all duration-200"
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
