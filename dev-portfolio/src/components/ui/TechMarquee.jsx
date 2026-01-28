import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Code2, 
  Cloud, 
  Server, 
  Globe,
  Terminal,
  Shield,
  Zap,
  Layers,
  Box,
  Network
} from 'lucide-react';

const techStack = [
  { icon: Cpu, name: 'React', color: '#61DAFB' },
  { icon: Code2, name: 'Next.js', color: '#000000' },
  { icon: Terminal, name: 'TypeScript', color: '#3178C6' },
  { icon: Zap, name: 'Tailwind', color: '#06B6D4' },
  { icon: Server, name: 'Node.js', color: '#339933' },
  { icon: Terminal, name: 'Python', color: '#3776AB' },
  { icon: Box, name: 'Docker', color: '#2496ED' },
  { icon: Cloud, name: 'AWS', color: '#FF9900' },
  { icon: Network, name: 'GraphQL', color: '#E10098' },
  { icon: Database, name: 'PostgreSQL', color: '#4169E1' },
  { icon: Database, name: 'MongoDB', color: '#47A248' },
  { icon: Shield, name: 'Firebase', color: '#FFCA28' },
];

export const TechMarquee = () => {
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      
      {/* Marquee Container */}
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center mx-8"
            whileHover={{ y: -10, scale: 1.1 }}
          >
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-3"
              style={{ 
                backgroundColor: `${tech.color}10`,
                border: `2px solid ${tech.color}30`
              }}
            >
              <tech.icon 
                className="w-8 h-8" 
                style={{ color: tech.color }} 
              />
            </div>
            <span className="text-sm font-medium text-slate-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};