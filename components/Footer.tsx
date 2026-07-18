'use client';

import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="font-bold text-lg text-white">
              Arshad Murtaza
            </span>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Arshad Murtaza. Built with Next.js 15, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
