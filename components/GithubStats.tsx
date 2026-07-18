'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Flame, Code, BarChart3, ExternalLink } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function GithubStats() {
  const username = 'arshadmurtaza03';

  return (
    <section id="github-stats" className="py-24 relative bg-slate-950/40">
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
            <BarChart3 className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & CODE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub <span className="gradient-text-blue">Activity & Stats</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Live overview of commit contributions, language breakdown, and repository stats.
          </p>
        </motion.div>

        {/* GitHub Quick Link Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                @{username} on GitHub
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Exploring Generative AI, RAG architectures, FastAPI microservices & Deep Learning.
              </p>
            </div>
          </div>

          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all shrink-0"
          >
            Visit Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Dynamic GitHub Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel glass-panel-hover rounded-2xl p-4 flex items-center justify-center border border-slate-800 overflow-hidden min-h-[190px]"
          >
            <div className="relative w-full h-44">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=94a3b8&icon_color=06b6d4&border_color=1e293b&hide_border=false`}
                alt="GitHub Stats"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel glass-panel-hover rounded-2xl p-4 flex items-center justify-center border border-slate-800 overflow-hidden min-h-[190px]"
          >
            <div className="relative w-full h-44">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=94a3b8&border_color=1e293b&hide_border=false`}
                alt="Top Languages"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Streak Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-panel glass-panel-hover rounded-2xl p-4 flex items-center justify-center border border-slate-800 overflow-hidden min-h-[190px]"
          >
            <div className="relative w-full h-44">
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0f172a&ring=3b82f6&fire=06b6d4&currStreakNum=f8fafc&sideNums=94a3b8&sideLabels=94a3b8&border=1e293b`}
                alt="GitHub Streak"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
