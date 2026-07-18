'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Sparkles, ArrowRight, Brain, Cpu, Terminal, ShieldCheck } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-glow-radial">
      {/* Background Subtle Animated Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-blue-400 text-xs font-mono backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Available for AI Engineer & MLOps Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text-blue">{personalDetails.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                AI Engineer & Machine Learning Specialist
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalDetails.shortBio} Graduated from <span className="text-slate-200 font-semibold">IIT Delhi</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalDetails.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Contact Me
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">IIT Delhi</div>
                <div className="text-xs text-slate-400">B.Tech Graduate</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">RAG & LLM</div>
                <div className="text-xs text-slate-400">LangChain & FAISS</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">AWS & MLOps</div>
                <div className="text-xs text-slate-400">ECS & CI/CD</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 sm:w-80 lg:w-96">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-70 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-pulse" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-slate-950 p-3 ring-1 ring-slate-800 shadow-2xl">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src={personalDetails.avatarUrl}
                    alt={personalDetails.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 384px"
                    className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-medium text-slate-200">
                        Python / LangChain / AWS
                      </span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
