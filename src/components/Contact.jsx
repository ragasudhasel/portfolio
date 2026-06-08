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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        const form = new FormData();
        // Go to https://web3forms.com/ to get your free access key for ss.ragasudharaj@gmail.com
        form.append("access_key", "6f1c8548-468f-4afb-aeba-054928ddec6f"); 
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("subject", formData.subject);
        form.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form
            });
            const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000); // Hide after 5 seconds
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
        <section id="contact" className="py-24 px-6 lg:px-12 bg-transparent relative overflow-hidden z-10">
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
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ss.ragasudharaj@gmail.com" target="_blank" rel="noreferrer" 
                                    variants={itemVariants} 
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-[#0a0f1e]/40 p-4 rounded-xl border border-white/10 hover:border-[#00ffcc]/50 backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,204,0.1)]"
                                >
                                    <div className="w-11 h-11 bg-[#00ffcc]/10 rounded-lg flex items-center justify-center text-[#00ffcc]">
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
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-[#0a0f1e]/40 p-4 rounded-xl border border-white/10 hover:border-[#00ffcc]/50 backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,204,0.1)]"
                                >
                                    <div className="w-11 h-11 bg-[#00ffcc]/10 rounded-lg flex items-center justify-center text-[#00ffcc]">
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
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-[#0a0f1e]/40 p-4 rounded-xl border border-white/10 hover:border-[#00ffcc]/50 backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,204,0.1)]"
                                >
                                    <div className="w-11 h-11 bg-[#00ffcc]/10 rounded-lg flex items-center justify-center text-[#00ffcc]">
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
                                    className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-[#0a0f1e]/40 p-4 rounded-xl border border-white/10 hover:border-[#00ffcc]/50 backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,204,0.1)]"
                                >
                                    <div className="w-11 h-11 bg-[#00ffcc]/10 rounded-lg flex items-center justify-center text-[#00ffcc]">
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
                        className="bg-[#0a0f1e]/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300"
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
                                    className="w-full px-4 py-3 bg-[#0a0f1e]/60 border border-white/10 rounded-xl focus:outline-none focus:border-[#00ffcc] focus:shadow-[0_0_15px_rgba(0,255,204,0.1)] text-gray-200 placeholder-gray-500 transition-all"
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
                                    className="w-full px-4 py-3 bg-[#0a0f1e]/60 border border-white/10 rounded-xl focus:outline-none focus:border-[#00ffcc] focus:shadow-[0_0_15px_rgba(0,255,204,0.1)] text-gray-200 placeholder-gray-500 transition-all"
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
                                    className="w-full px-4 py-3 bg-[#0a0f1e]/60 border border-white/10 rounded-xl focus:outline-none focus:border-[#00ffcc] focus:shadow-[0_0_15px_rgba(0,255,204,0.1)] text-gray-200 placeholder-gray-500 transition-all"
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
                                    className="w-full px-4 py-3 bg-[#0a0f1e]/60 border border-white/10 rounded-xl focus:outline-none focus:border-[#00ffcc] focus:shadow-[0_0_15px_rgba(0,255,204,0.1)] text-gray-200 placeholder-gray-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full px-8 py-4 rounded-xl transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-lg ${isSubmitting ? 'bg-primary/50 text-slate-950/50 cursor-not-allowed' : 'bg-primary text-slate-950 hover:bg-primary/95 shadow-primary/10'}`}
                            >
                                <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                            
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm text-center">
                                    Message sent successfully! I will get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                                    Oops! Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
