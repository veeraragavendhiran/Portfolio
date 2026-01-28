import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';
import { Loader } from './components/ui/Loader';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Experience = lazy(() => import('./components/sections/Experience').then(module => ({ default: module.Experience })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

const Footer = () => (
  <footer className="py-8 px-6 border-t border-slate-800/50">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-slate-400">
        © {new Date().getFullYear()} Veeraragavendhiran S . All rights reserved.
      </p>
      <p className="text-sm text-slate-500 mt-2">
        Built with React, Tailwind CSS, and Framer Motion
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="relative">
        <Suspense fallback={<Loader />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </motion.div>
        </Suspense>
      </main>
      
      <Footer />
    </>
  );
}

export default App;