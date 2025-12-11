import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { Sparkles, Code2, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-60"></div>
            
            <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Code2 size={24} /></span>
                The Developer
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a passionate developer currently pursuing my BCA at Galgotias University. With a stellar academic record of <span className="font-semibold text-slate-900">9.2 CGPA</span>, I combine theoretical knowledge with practical application in full-stack and mobile development.
                </p>
                <p>
                  My journey began with Java and evolved into a deep dive into the MERN stack and Android ecosystem. I thrive on solving complex problems and building intuitive, user-centric interfaces.
                </p>
                <p>
                  Whether it's automating tests with Selenium or crafting responsive web apps with React, I bring a detail-oriented approach to every project.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Rocket size={16} className="text-indigo-500" />
                  Innovative Thinker
                </div>
                <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Sparkles size={16} className="text-amber-500" />
                  Detail Oriented
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Driven by logic, designed for people.</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {PERSONAL_DETAILS.objective}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-indigo-500 bg-white shadow-sm rounded-r-lg">
                <span className="block text-3xl font-bold text-slate-900 mb-1">10+</span>
                <span className="text-slate-500 text-sm font-medium">Projects Completed</span>
              </div>
              <div className="p-4 border-l-4 border-purple-500 bg-white shadow-sm rounded-r-lg">
                <span className="block text-3xl font-bold text-slate-900 mb-1">9.2</span>
                <span className="text-slate-500 text-sm font-medium">CGPA Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};