'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationItems } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-text-blue">History</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Prestigious engineering background providing strong analytical, mathematical, and algorithmic foundations.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationItems.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800 relative overflow-hidden"
            >
              {/* Background Subtle Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] shrink-0 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  Core Foundations & Key Learnings
                </h4>
                <div className="space-y-2">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
