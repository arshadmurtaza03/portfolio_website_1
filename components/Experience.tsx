'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Rocket } from 'lucide-react';
import { experienceItems } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & RESEARCH TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="gradient-text-blue">Project Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Chronological overview of AI engineering implementations, cloud deployments, and quantitative research.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experienceItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Badge */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
                      
                      {/* Period Badge */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <p className="text-xs font-semibold text-blue-400">
                          {item.company}
                        </p>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
