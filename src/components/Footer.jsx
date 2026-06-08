import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-dark-700">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-center md:text-left">
                        © 2026 Ragasudha S.S | AI Engineer Portfolio
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/ragasudhasel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ragasudha-selvaraj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ss.ragasudharaj@gmail.com"
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
