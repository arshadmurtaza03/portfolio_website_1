'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFIED KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-blue">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Formal certifications validating expertise in Generative AI, Deep Learning, and Machine Learning engineering.
          </p>
        </motion.div>

        {/* Certifications Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-800"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shrink-0 shadow-lg shadow-blue-500/20">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all shrink-0"
                >
                  Verify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
