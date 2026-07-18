'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Target, Lightbulb, Compass, Award, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-blue">Arshad Murtaza</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging analytical rigor with modern artificial intelligence engineering.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                Career Summary & Philosophy
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalDetails.aboutSummary}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I focus on architecting end-to-end AI pipelines — from data preprocessing and neural model training to containerized backend microservices (FastAPI) and automated cloud deployments on AWS.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Production AI Focus</h4>
                  <p className="text-xs text-slate-400">RAG, Vector DBs, and LLM orchestration.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">End-to-End MLOps</h4>
                  <p className="text-xs text-slate-400">Docker, AWS ECS, and GitHub Actions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Objective & Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Career Objective */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Target className="w-4 h-4" />
                Career Objective
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {personalDetails.careerObjective}
              </p>
            </div>

            {/* Education Summary */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                Education Background
              </div>
              <div>
                <h4 className="text-base font-bold text-white">IIT Delhi</h4>
                <p className="text-xs text-cyan-400 font-mono">B.Tech in Civil Engineering (2019 - 2023)</p>
                <p className="text-xs text-slate-400 mt-2">
                  Developed strong mathematical modeling, quantitative analysis, and algorithmic problem-solving skills at India's premier engineering institute.
                </p>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Certified AI Specialist</h4>
                <p className="text-xs text-slate-400">Data Science & Machine Learning with GenAI</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
