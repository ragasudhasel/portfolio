import React, { useState } from 'react';
import { Github, ExternalLink, Shield, Brain, Cpu, Sparkles, LineChart, Code, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const categories = ['All', 'Deep Learning & NLP', 'Machine Learning', 'Data Analytics & Web'];
    const [activeCategory, setActiveCategory] = useState('All');

    const projects = [
        {
            title: 'BridgeGuard AI: Bridge Inspection System',
            category: 'Deep Learning & NLP',
            description: 'YOLOv8-based real-time object detection system classifying bridge defects. Built for automated drone inspection reports.',
            tech: ['YOLOv8', 'OpenCV', 'PyTorch', 'Flask'],
            github: 'https://github.com/ragasudhasel/Bridgecrack-drone-and-esp-simulation',
            demo: 'https://huggingface.co/spaces/ragasudhaselvaraj/Bridgeguard-AI',
            icon: <Shield className="w-5 h-5 text-emerald-450" />
        },
        {
            title: 'EcoPackAI: Sustainable Recommender',
            category: 'Machine Learning',
            description: 'Full-stack sustainable packaging recommendation system leveraging machine learning classification.',
            tech: ['XGBoost', 'Flask', 'PostgreSQL', 'Bootstrap'],
            github: 'https://github.com/ragasudhasel/Data-Science-Projects',
            demo: 'https://huggingface.co/spaces/ragasudhaselvaraj/ECOPACKAI',
            icon: <Sparkles className="w-5 h-5 text-amber-450" />
        },
        {
            title: 'AI Mental Health Assistant',
            category: 'Deep Learning & NLP',
            description: 'Conversational assistant identifying user mood across emotional states with Transformer intent recognition.',
            tech: ['Transformers', 'NLP', 'PyTorch', 'Flask'],
            github: 'https://github.com/ragasudhasel/AI_mental_health-assisstance',
            demo: '#',
            icon: <Brain className="w-5 h-5 text-cyan-450" />
        },
        {
            title: 'AI Resume Analyzer',
            category: 'Deep Learning & NLP',
            description: 'Extracts critical keywords, skills, and education credentials from PDFs to assist recruiters.',
            tech: ['Python', 'Streamlit', 'NLP', 'PyResparser'],
            github: 'https://github.com/ragasudhasel/Resume-analyzer',
            demo: '#',
            icon: <Cpu className="w-5 h-5 text-indigo-405" />
        },
        {
            title: 'Fake News Classifier',
            category: 'Machine Learning',
            description: 'NLP binary text classifier inspecting article factuality using text preprocessing.',
            tech: ['TF-IDF', 'Logistic Regression', 'Scikit-learn'],
            github: 'https://github.com/ragasudhasel/Fake-news-detection-using-machine-learning',
            demo: '#',
            icon: <Shield className="w-5 h-5 text-red-450" />
        },
        {
            title: 'Melody Mate: Song Recommendation',
            category: 'Machine Learning',
            description: 'Chatbot matching recommendations to current user mood using NLP mood classification.',
            tech: ['NLP', 'Scikit-learn', 'Flask', 'Python'],
            github: 'https://github.com/ragasudhasel/Chatbot-song-recommendation-System',
            demo: '#',
            icon: <Sparkles className="w-5 h-5 text-pink-450" />
        },
        {
            title: 'Age & Gender Detector',
            category: 'Deep Learning & NLP',
            description: 'Convolutional neural networks (CNN) predicting age/gender in real-time streams.',
            tech: ['CNN', 'Keras', 'TensorFlow', 'OpenCV'],
            github: 'https://github.com/ragasudhasel/Age-And-Gender-Prediction-',
            demo: '#',
            icon: <Cpu className="w-5 h-5 text-violet-450" />
        },
        {
            title: 'Phishing Attack Detector',
            category: 'Machine Learning',
            description: 'Random Forest model inspecting URL characteristics to prevent cyber security risks.',
            tech: ['Scikit-learn', 'Random Forest', 'Python'],
            github: 'https://github.com/ragasudhasel/Phishing-attack-using-Machine-leanrning',
            demo: '#',
            icon: <Shield className="w-5 h-5 text-blue-450" />
        },
        {
            title: 'KNIME Analytics Automation',
            category: 'Data Analytics & Web',
            description: 'Workflow automation pipelines reducing recurring data management times.',
            tech: ['KNIME', 'Data Pipelines', 'Automation'],
            github: 'https://github.com/ragasudhasel/KNIME-PROJECT',
            demo: '#',
            icon: <LineChart className="w-5 h-5 text-green-450" />
        },
        {
            title: 'Data Science Hub',
            category: 'Data Analytics & Web',
            description: 'Repository featuring exploratory modeling, data cleaning, and DAX dashboards.',
            tech: ['Pandas', 'NumPy', 'Jupyter Notebook'],
            github: 'https://github.com/ragasudhasel/Data-Science-Projects',
            demo: '#',
            icon: <LineChart className="w-5 h-5 text-orange-450" />
        },
        {
            title: 'Responsive Chatbot Interface',
            category: 'Data Analytics & Web',
            description: 'Clean JavaScript-based chatbot widget with modular structures.',
            tech: ['JavaScript', 'HTML5', 'CSS3'],
            github: 'https://github.com/ragasudhasel/chatbot',
            demo: '#',
            icon: <Code className="w-5 h-5 text-teal-450" />
        },
        {
            title: 'Burger Hut Website',
            category: 'Data Analytics & Web',
            description: 'Sleek, responsive food marketing front-end landing platform.',
            tech: ['HTML5', 'CSS3', 'Responsive Design'],
            github: 'https://github.com/ragasudhasel/Burger-Hut-website',
            demo: '#',
            icon: <Code className="w-5 h-5 text-yellow-450" />
        }
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6 lg:px-12 bg-[#030712] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        Featured <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Projects</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-8"
                    ></motion.div>
                </div>

                {/* Categories Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                                activeCategory === cat
                                    ? 'bg-primary text-slate-950 border-primary shadow-lg shadow-primary/10'
                                    : 'bg-slate-900/60 border-slate-800 text-gray-400 hover:border-slate-700 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Wrapper */}
                <motion.div 
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -6 }}
                                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-primary/40 transition-all flex flex-col justify-between backdrop-blur-sm"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2.5 bg-slate-850 border border-slate-750 rounded-xl flex items-center justify-center">
                                            {project.icon}
                                        </div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold mb-3 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800/50 text-gray-300 border border-slate-750 rounded font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 border-t border-slate-800/60 pt-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs text-gray-300 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-750 px-3 py-2 rounded-xl transition-all font-semibold"
                                        >
                                            <Github className="w-3.5 h-3.5" /> Repository
                                        </a>
                                        {project.demo !== '#' && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1 bg-primary hover:bg-primary/90 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold transition-all"
                                            >
                                                <Eye className="w-3.5 h-3.5" /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
