import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-cyan-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-slate-800 border-r-purple-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};