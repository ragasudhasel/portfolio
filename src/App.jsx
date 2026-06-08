import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';

function App() {
    return (
        <div className="bg-transparent text-textPrimary min-h-screen selection:bg-primary/30 selection:text-white font-sans relative">
            <GlobalBackground />
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
