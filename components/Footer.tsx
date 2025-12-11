import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-bold tracking-tight">Shivam<span className="text-indigo-400">.dev</span></span>
          <p className="text-slate-400 text-sm mt-1">© {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
           <a href={PERSONAL_DETAILS.socials.linkedin} className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={PERSONAL_DETAILS.socials.github} className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-indigo-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};