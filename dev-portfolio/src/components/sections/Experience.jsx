import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin ,Cpu} from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';

const experiences = [
  {
    id: 1,
    title: 'Undergraduate Student (3rd Year)',
    company: 'B.Sc. Computer Science',
    period: '2023 – Present',
    description: 'Currently pursuing a degree in Computer Science with a focus on full-stack development, machine learning, and emerging technologies.',
    icon: GraduationCap,
    color: 'text-cyan-400'
  },
  {
    id: 2,
    title: 'Academic & Personal Projects',
    company: 'Full-Stack • ML • IoT',
    period: '2022 – Present',
    description: 'Developed multiple academic and personal projects including web applications, IoT systems, and machine learning-based solutions.',
    icon: Briefcase,
    color: 'text-purple-400'
  },
  {
    id: 3,
    title: 'Technical Workshops & Certifications',
    company: 'NPTEL • Pragyan (NIT Trichy)',
    period: '2024 – 2025',
    description: 'Completed certified courses and workshops in cloud computing, distributed systems, and emerging technologies.',
    icon: Briefcase,
    color: 'text-yellow-400'
  },
  {
    id: 4,
  title: 'Machine Learning & IoT Projects',
  company: 'Academic & Personal Work',
  period: '2023 – Present',
  description: 'Implemented machine learning models and IoT-based systems involving data analysis, sensor integration, and smart automation concepts.',
  icon: Cpu,
  color: 'text-pink-400'
},
];

export const Experience = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <GlitchText text="Journey" className="text-gradient" />
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From academic foundations to hands-on projects, each step has shaped my approach to building reliable and impactful software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-diagonal origin-top"
              style={{ scaleY: pathLength }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 
                  w-6 h-6 rounded-full bg-slate-950 border-4 border-cyan-400 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="cyber-card p-6 ml-12 md:ml-0"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-slate-800/50 ${exp.color}`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-slate-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};