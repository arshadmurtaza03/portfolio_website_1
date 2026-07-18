'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Cloud, Server, Wrench, Code2, Layers } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

// Icon Map
const iconMap: Record<string, React.ElementType> = {
  Sparkles: Sparkles,
  Brain: Brain,
  Cpu: Cpu,
  Cloud: Cloud,
  Server: Server,
  Wrench: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
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
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-blue">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Structured tools, frameworks, and cloud technologies I use to build scalable AI systems.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
