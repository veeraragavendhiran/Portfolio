import React from 'react';
import { motion } from 'framer-motion';

export const GlitchText = ({ text, className = '' }) => {
  return (
    <motion.span
      className={`glitch-text inline-block ${className}`}
      data-text={text}
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10">{text}</span>
    </motion.span>
  );
};