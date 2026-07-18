'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, FolderGit2, Star, CheckCircle, ArrowUpRight } from 'lucide-react';
import { projects, Project } from '@/data/portfolioData';

const projectCategories = ['All', 'GenAI & RAG', 'Deep Learning', 'Machine Learning', 'Data Analytics', 'Backend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>AI & SOFTWARE ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world AI systems, RAG applications, CNN models, and cloud MLOps pipelines built from scratch.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      Featured AI
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">{project.date}</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    GitHub Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
