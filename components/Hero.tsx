import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20 pb-12 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] z-0 pointer-events-none"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8 mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/80 backdrop-blur-md border border-slate-200 shadow-sm text-slate-600 text-sm font-medium animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Open to Opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] sm:leading-tight">
          Crafting Digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">Excellence</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          Hi, I'm <span className="font-semibold text-slate-900">{PERSONAL_DETAILS.name}</span>. 
          A Full Stack & Android Developer turning complex problems into beautiful, scalable software solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1">
            View My Work
            <ArrowRight size={18} />
          </a>
          <a href="https://drive.google.com/file/d/1NoNT7cfoG9km2waZ9v_Eaem-QTH3jC_9/view?usp=sharing" download= "shivam_resume.pdf" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1">
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="pt-12 flex flex-col items-center gap-6">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Connect With Me</p>
          <div className="flex items-center gap-6 text-slate-500">
             <a href={PERSONAL_DETAILS.socials.github} className="p-2 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all transform hover:scale-110">
               <Github size={24} />
             </a>
             <a href={PERSONAL_DETAILS.socials.linkedin} className="p-2 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all transform hover:scale-110">
               <Linkedin size={24} />
             </a>
             <a href={`mailto:${PERSONAL_DETAILS.email}`} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-full transition-all transform hover:scale-110">
               <Mail size={24} />
             </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={24} className="color-red"/>
        </a>
      </div>
    </section>
  );
};
