import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Bridge Crack Detection using YOLOv8',
            description: 'Computer vision system for identifying bridge cracks using YOLOv8 with real-time visualization through Gradio interface. Improved accuracy through dataset augmentation.',
            tech: ['Python', 'OpenCV', 'YOLOv8', 'Gradio'],
            github: '#'
        },
        {
            title: 'AI Mental Health Assistant',
            description: 'Intelligent AI assistant responding to user prompts and mood using NLP models for understanding mental state and generating empathetic responses.',
            tech: ['Python', 'NLP', 'Flask', 'Transformers'],
            github: '#'
        },
        {
            title: 'Melody Mate - Song Recommendation',
            description: 'Chatbot recommending songs based on user mood using NLP for mood detection, deployed via Flask for interactive experience.',
            tech: ['Python', 'Scikit-learn', 'NLP', 'Flask'],
            github: '#'
        },
        {
            title: 'Fake News Detection using AI',
            description: 'ML-based system classifying fake and real news with text preprocessing using TF-IDF and logistic regression achieving high accuracy.',
            tech: ['Python', 'NLP', 'TF-IDF', 'Scikit-learn'],
            github: '#'
        },
        {
            title: 'Age, Gender, Emotion Detection',
            description: 'CNN models predicting age, gender, and emotion in real-time with OpenCV for webcam-based face detection.',
            tech: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
            github: '#'
        },
        {
            title: 'Phishing Attack Detection',
            description: 'URL-based phishing detection system using Random Forest with features like URL length, domain type, and special characters.',
            tech: ['Python', 'Scikit-learn', 'Random Forest'],
            github: '#'
        },
        {
            title: 'Hotel Booking Analytics',
            description: 'Power BI dashboard for hotel revenue and booking trends using DAX formulas for occupancy and revenue KPIs.',
            tech: ['Power BI', 'DAX'],
            github: '#'
        },
        {
            title: 'Mental Health in Tech Dashboard',
            description: 'Visualized mental health factors in tech industry using Tableau with KPI cards for anxiety, stress, and work-life balance.',
            tech: ['Tableau'],
            github: '#'
        },
        {
            title: 'Student Performance Dashboard',
            description: 'Analyzed student performance data and created KPIs using Excel with interactive dashboard visualization.',
            tech: ['Excel', 'Power Query'],
            github: '#'
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="projects" className="py-24 px-6 lg:px-12 bg-dark-800">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-16"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                            transition={{ duration: 0.3 }}
                            className="bg-dark-900 border border-dark-700 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs cursor-pointer"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.a
                                href={project.github}
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm"
                            >
                                <Github className="w-4 h-4" />
                                View on GitHub
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
