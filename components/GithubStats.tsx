'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Github,
  Flame,
  Code,
  BarChart3,
  ExternalLink,
  Star,
  GitFork,
  BookOpen,
  Terminal,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

interface RepoStat {
  name: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  description: string;
}

export default function GithubStats() {
  const username = 'arshadmurtaza03';
  
  const [statsError, setStatsError] = useState({
    profileCard: false,
    topLangsCard: false,
    streakCard: false,
  });

  const [apiData, setApiData] = useState<{
    publicRepos: number;
    followers: number;
    following: number;
    topLangs: { name: string; percent: number; color: string }[];
    topRepos: RepoStat[];
    loading: boolean;
  }>({
    publicRepos: 10,
    followers: 0,
    following: 0,
    topLangs: [
      { name: 'Python', percent: 65, color: 'bg-blue-500' },
      { name: 'Jupyter Notebook', percent: 20, color: 'bg-amber-400' },
      { name: 'TypeScript', percent: 10, color: 'bg-cyan-400' },
      { name: 'HTML/CSS', percent: 5, color: 'bg-purple-500' },
    ],
    topRepos: [
      {
        name: 'document_portal',
        stars: 1,
        forks: 2,
        language: 'Python',
        url: 'https://github.com/arshadmurtaza03/document_portal',
        description: 'Production-ready AI Document Portal with RAG & FastAPI on AWS ECS',
      },
      {
        name: 'plant-disease-classification',
        stars: 0,
        forks: 0,
        language: 'Python',
        url: 'https://github.com/arshadmurtaza03/plant-disease-classification',
        description: 'CNN leaf disease detection classifying 38 categories',
      },
      {
        name: 'credit-card-fraud-detection',
        stars: 0,
        forks: 0,
        language: 'Jupyter Notebook',
        url: 'https://github.com/arshadmurtaza03/credit-card-fraud-detection',
        description: 'Fraud detection pipeline with SMOTE & XGBoost',
      },
      {
        name: 'customer-segmentation',
        stars: 0,
        forks: 0,
        language: 'Jupyter Notebook',
        url: 'https://github.com/arshadmurtaza03/customer-segmentation',
        description: 'RFM customer clustering using K-Means & PCA',
      },
    ],
    loading: true,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();

          const langMap: Record<string, number> = {};
          let totalCount = 0;
          const reposList: RepoStat[] = [];

          if (Array.isArray(reposData)) {
            reposData.forEach((repo: any) => {
              if (repo.language) {
                langMap[repo.language] = (langMap[repo.language] || 0) + 1;
                totalCount++;
              }
              if (!repo.fork) {
                reposList.push({
                  name: repo.name,
                  stars: repo.stargazers_count || 0,
                  forks: repo.forks_count || 0,
                  language: repo.language || 'Python',
                  url: repo.html_url,
                  description: repo.description || '',
                });
              }
            });
          }

          const colorList = ['bg-blue-500', 'bg-cyan-400', 'bg-amber-400', 'bg-emerald-400', 'bg-purple-500'];
          const topLangs = Object.entries(langMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([name, count], index) => ({
              name,
              percent: Math.max(5, Math.round((count / (totalCount || 1)) * 100)),
              color: colorList[index % colorList.length],
            }));

          reposList.sort((a, b) => b.stars - a.stars);

          setApiData({
            publicRepos: userData.public_repos || 10,
            followers: userData.followers || 0,
            following: userData.following || 0,
            topLangs: topLangs.length > 0 ? topLangs : apiData.topLangs,
            topRepos: reposList.length > 0 ? reposList.slice(0, 4) : apiData.topRepos,
            loading: false,
          });
        }
      } catch (e) {
        setApiData((prev) => ({ ...prev, loading: false }));
      }
    }

    fetchGitHubData();
  }, []);

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
            Live overview of public repositories, commit metrics, language distribution, and open-source contributions.
          </p>
        </motion.div>

        {/* GitHub Quick Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-10 glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="text-xl font-bold text-white">
                  @{username}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  AI & MLOps
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Generative AI, RAG Architectures, Computer Vision, FastAPI & MLOps on AWS.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-lg font-bold text-cyan-400 font-mono">
                {apiData.publicRepos}
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Repositories</div>
            </div>

            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all shrink-0"
            >
              Visit Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[220px]"
          >
            {!statsError.profileCard ? (
              <div className="relative w-full h-48">
                <Image
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=94a3b8&icon_color=06b6d4&border_color=1e293b&hide_border=false`}
                  alt="GitHub Stats"
                  fill
                  unoptimized
                  className="object-contain"
                  onError={() => setStatsError((prev) => ({ ...prev, profileCard: true }))}
                />
              </div>
            ) : (
              /* Native Fallback Component */
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Github className="w-4 h-4 text-cyan-400" />
                    GitHub Profile Overview
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Live Verified
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400">Total Repositories</div>
                    <div className="text-xl font-bold font-mono text-cyan-400 mt-1">{apiData.publicRepos}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400">Primary Domain</div>
                    <div className="text-sm font-bold text-blue-400 mt-1">AI / MLOps</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400">Primary Tech</div>
                    <div className="text-sm font-bold text-amber-400 mt-1">Python & RAG</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400">Deployment Target</div>
                    <div className="text-sm font-bold text-emerald-400 mt-1">AWS ECS / Vercel</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Card 2: Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[220px]"
          >
            {!statsError.topLangsCard ? (
              <div className="relative w-full h-48">
                <Image
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=94a3b8&border_color=1e293b&hide_border=false`}
                  alt="Top Languages"
                  fill
                  unoptimized
                  className="object-contain"
                  onError={() => setStatsError((prev) => ({ ...prev, topLangsCard: true }))}
                />
              </div>
            ) : (
              /* Native Fallback Component */
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Code className="w-4 h-4 text-blue-400" />
                    Most Used Languages
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Calculated</span>
                </div>
                <div className="space-y-3">
                  {apiData.topLangs.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-200">{lang.name}</span>
                        <span className="text-slate-400">{lang.percent}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className={`h-full ${lang.color} transition-all duration-500`}
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Card 3: Featured Repositories Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Featured GitHub Repositories Highlight
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                Open Source Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {apiData.topRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                      {repo.language}
                    </span>
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1 text-amber-300">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {repo.stars}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
