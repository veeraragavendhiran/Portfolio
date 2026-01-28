import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { ProjectCard } from '../ui/ProjectCard';
import { GlitchText } from '../ui/GlitchText';

const projects = [
  {
    id: 1,
    title: 'Neural Dashboard',
    description: 'Real-time analytics dashboard with machine learning predictions and interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    tags: ['React', 'TypeScript', 'TensorFlow.js', 'D3.js', 'Node.js'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'Web App',
    featured: true,
  },
  {
    id: 2,
    title: 'Quantum Chat',
    description: 'End-to-end encrypted messaging platform with real-time video/audio calls.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800',
    tags: ['Next.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'Web App',
    featured: true,
  },
  {
    id: 3,
    title: 'Vision AI API',
    description: 'Computer vision API service for image recognition and object detection.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800',
    tags: ['Python', 'FastAPI', 'PyTorch', 'Docker', 'AWS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'AI/ML',
  },
  {
    id: 4,
    title: 'Eco Tracker',
    description: 'IoT platform for monitoring environmental data with predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['React Native', 'IoT', 'GraphQL', 'PostgreSQL', 'AWS IoT'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'IoT',
  },
  {
    id: 5,
    title: 'Crypto Trader',
    description: 'Automated cryptocurrency trading bot with strategy backtesting.',
    image: 'https://images.unsplash.com/photo-1620336655055-bd87c4e33d76?auto=format&fit=crop&w=800',
    tags: ['Python', 'Binance API', 'Pandas', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'Web App',
  },
  {
    id: 6,
    title: 'AR Navigation',
    description: 'Augmented reality indoor navigation system using computer vision.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800',
    tags: ['Unity', 'ARCore', 'C#', 'Firebase', 'React'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'AR/VR',
  },
];

// Define categories based on the data
const categories = ['All', 'Web App', 'AI/ML', 'IoT', 'AR/VR'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter logic
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' ? true : project.category === selectedCategory
  );

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-600/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <Filter className="w-6 h-6 text-cyan-400" />
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GlitchText text="Projects" className="text-gradient" /> That Define My Craft
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From AI-powered applications to immersive web experiences, each project represents
            a unique challenge solved with innovative technology and clean code.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800/50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <ProjectCard 
                  project={project} 
                  isHovered={hoveredProject === project.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Projects Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-slate-800 p-8 rounded-2xl bg-gradient-to-r from-slate-900/50 to-purple-900/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Want to see more?
              </h3>
              <p className="text-slate-400">
                Check out my GitHub for open-source contributions and side projects.
              </p>
            </div>
            <motion.a
              href="https://github.com/veeraragavendhiran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-lg
                bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-2xl hover:shadow-cyan-500/20
                transition-all duration-300 font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>Explore GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};