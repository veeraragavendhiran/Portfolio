import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { MagneticButton } from '../ui/MagneticButton';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/veeraragavendhiran', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/veeraragavendhiran', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/hariveera007', label: 'Twitter' },
  { icon: Mail, href: 'mailto:veeraragavendhiran12@gmail.com', label: 'Email' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 px-6 py-4 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold font-space-grotesk"
            whileHover={{ scale: 1.05 }}
          >
            <GlitchText text="SVR " />
            <span className="text-gradient">    PORTFOLIO</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-diagonal"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <MagneticButton onClick={() => window.open('/resume.pdf')}>
              View Resume
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-800/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden px-6 py-8 backdrop-blur-xl bg-slate-950/95 border-b border-slate-800"
          >
            <div className="space-y-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-xl font-medium text-slate-300 hover:text-white py-3 border-b border-slate-800"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="pt-6 border-t border-slate-800">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800 hover:bg-slate-700"
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};