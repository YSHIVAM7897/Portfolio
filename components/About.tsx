import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { Sparkles, Code2, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex flex-col items-center">
            {/* Profile Photo Section */}
            <div className="relative z-10 mb-8 group">
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-64 h-64 rounded-full p-1.5 bg-white border-2 border-indigo-100 shadow-2xl relative overflow-hidden transform transition-transform duration-500 hover:scale-105">
                 <img 
                  src="https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/IMG20251204132001.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover bg-slate-100"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-indigo-600 animate-bounce">
                <Code2 size={24} />
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 w-full max-w-md mx-auto">
              <div className="space-y-4 text-slate-600 leading-relaxed text-center">
                <p className="font-medium text-slate-900">
                  Currently pursuing BCA at Galgotias University with a <span className="text-indigo-600 font-bold">9.2 CGPA</span>.
                </p>
                <p className="text-sm">
                  My journey began with Java and evolved into a deep dive into the MERN stack and Android ecosystem. I thrive on solving complex problems and building intuitive, user-centric interfaces.
                </p>
              </div>
              
              <div className="mt-6 flex justify-center gap-3">
                <div className="px-3 py-1.5 bg-indigo-50 rounded-full border border-indigo-100 flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wide">
                  <Rocket size={14} />
                  Innovator
                </div>
                <div className="px-3 py-1.5 bg-amber-50 rounded-full border border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide">
                  <Sparkles size={14} />
                  Builder
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              About Me
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Driven by logic, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">designed for people.</span></h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {PERSONAL_DETAILS.objective}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-slate-100 bg-white shadow-lg shadow-slate-200/40 rounded-2xl hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-bold text-slate-900 mb-2">10+</span>
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  Projects Completed
                </span>
              </div>
              <div className="p-6 border border-slate-100 bg-white shadow-lg shadow-slate-200/40 rounded-2xl hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-bold text-slate-900 mb-2">9.2</span>
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  CGPA Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
