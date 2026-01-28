import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { FloatingGeometry } from '../three/FloatingGeometry';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block w-[3px] h-8 ml-1 bg-cyan-400 animate-blink" />
    </span>
  );
};

export const Hero = () => {
  const roles = ['digital experiences', 'scalable APIs', 'AI solutions', 'immersive UIs'];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
      <div className="scanline" />
      
      {/* 3D Geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingGeometry />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-lg border border-slate-800"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">Available for Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk">
            <span className="block">Hi, I'm </span>
            <span className="text-gradient block mt-4">Veera Ragavendhiran</span>
          </h1>

          {/* Typewriter Text */}
          <div className="h-20">
            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-300">
              I build <GlitchText text={roles[0]} className="text-gradient" />
            </p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Full-stack developer with strong project-based experience in building performant, accessible, and visually engaging web applications using modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-lg font-semibold text-lg
                bg-gradient-diagonal hover:shadow-2xl hover:shadow-cyan-500/20
                transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold text-lg
                border-2 border-cyan-500/50 hover:border-cyan-400
                hover:bg-cyan-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </section>
  );
};