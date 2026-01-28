import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap, Sparkles } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import myPhoto from "../../assets/images/myphoto.jpeg";
import { Wifi } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable applications from frontend to backend',
      color: 'text-cyan-400'
    },
    {
      icon: Cpu,
      title: 'AI/ML Integration',
      description: 'Implementing machine learning models in production',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Making applications lightning fast and efficient',
      color: 'text-yellow-400'
    },
    {
icon: Wifi,
title: 'IoT Systems Development',
description: 'Designing and implementing smart IoT solutions using sensors and data processing',
color: 'text-pink-400'

    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GlitchText text="About" className="text-gradient" /> Me
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Aspiring full-stack developer with solid academic and project experience in Java, web development, and emerging technologies, driven to create meaningful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Profile Image + Glow */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-slate-800 relative z-10">
                <img
                  src={myPhoto}
                  alt="Profile"
                 className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Glowing Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-diagonal animate-pulse-glow"
                style={{ clipPath: 'inset(0 round 9999px)' }}
              />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-space-grotesk">
                Veeraragavendhiran S
              </h3>
              <p className="text-slate-400">
                 I’m an aspiring full-stack developer with strong hands-on experience in Java, modern web technologies, and machine learning concepts. I enjoy building scalable, performant, and user-friendly applications while continuously exploring AI-driven solutions and emerging technologies to solve real-world problems.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-slate-400">Projects </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl font-bold text-gradient">Academic
</div>
                  <div className="text-sm text-slate-400">Practical Experience
</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-slate-800/50 ${skill.color}`}>
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{skill.title}</h4>
                      <p className="text-slate-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-bold mb-6">
                Tech Stack
              </h4>
              <div className="relative overflow-hidden py-4">
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {['Machine learning','Artificial Intilegence','React', 'Node.js', 'Python', 'Docker', 'MongoDB', ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">
                    Plus: Next.js, Tailwind, GraphQL, Firebase, and more...
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
