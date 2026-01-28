import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-900/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};