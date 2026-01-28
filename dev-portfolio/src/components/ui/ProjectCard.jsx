import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project, isHovered }) => {
  return (
    <motion.div
      className="cyber-card overflow-hidden group h-full"
      whileHover="hover"
      animate={isHovered ? { y: -10 } : { y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={{
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full
            bg-gradient-diagonal text-xs font-semibold">
            Featured
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-slate-900/80 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold font-space-grotesk">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </div>

        <p className="text-slate-400 mb-6">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="flex items-center space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
          
          <span className="text-sm text-slate-500 px-3 py-1 rounded-full bg-slate-800/50">
            {project.category}
          </span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-diagonal opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};