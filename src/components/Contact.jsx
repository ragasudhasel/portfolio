import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 12 }
        }
    };

    return (
        <section id="contact" className="py-24 px-6 lg:px-12 bg-[#060a12] relative overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        Get In <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Touch</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" /> Let's Collaborate
                            </motion.h3>
                            <motion.p variants={itemVariants} className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                Open to full-time AI Engineer opportunities, freelance research pipelines, or web-based AI automation integrations. Feel free to shoot me a message or connect through social links.
                            </motion.p>

                            <div className="space-y-5">
                                <motion.a 
                                    href="mailto:ss.ragasudharaj@gmail.com" 
                                    variants={itemVariants} 
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-primary/30"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Email</p>
                                        <p className="font-semibold text-gray-200 text-sm md:text-base">ss.ragasudharaj@gmail.com</p>
                                    </div>
                                </motion.a>

                                <motion.a 
                                    href="tel:9344063233" 
                                    variants={itemVariants} 
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-primary/30"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Phone</p>
                                        <p className="font-semibold text-gray-200 text-sm md:text-base">9344063233</p>
                                    </div>
                                </motion.a>

                                <motion.a 
                                    href="https://www.linkedin.com/in/ragasudha-selvaraj/" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    variants={itemVariants} 
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-primary/30"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">LinkedIn</p>
                                        <p className="font-semibold text-gray-200 text-sm md:text-base">linkedin.com/in/ragasudha-selvaraj</p>
                                    </div>
                                </motion.a>

                                <motion.a 
                                    href="https://github.com/ragasudhasel" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    variants={itemVariants} 
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-primary/30"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">GitHub</p>
                                        <p className="font-semibold text-gray-200 text-sm md:text-base">github.com/ragasudhasel</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-primary text-gray-200 placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-primary text-gray-200 placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-primary text-gray-200 placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-primary text-gray-200 placeholder-gray-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-primary text-slate-950 rounded-xl hover:bg-primary/95 transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
