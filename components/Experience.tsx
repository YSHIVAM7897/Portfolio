import React from 'react';
import { EXPERIENCES } from '../constants';
import { Building2, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Work Experience</h2>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-200 to-transparent -translate-x-1/2 hidden md:block"></div>

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start">
              
              {/* Left Side (Date & Location) - Desktop */}
              <div className="hidden md:block md:w-1/2 md:pr-12 text-right pt-2">
                <div className="inline-flex flex-col items-end">
                  <span className="text-lg font-bold text-slate-900">{exp.period}</span>
                  <span className="text-sm text-slate-500 font-medium">{exp.location}</span>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm z-10 hidden md:block"></div>

              {/* Right Side (Card) - Desktop */}
              <div className="md:w-1/2 md:pl-12 w-full">
                {/* Mobile Header shown inside card */}
                <div className="md:hidden mb-4 pl-4 border-l-2 border-indigo-200">
                  <span className="text-sm font-bold text-slate-900 block">{exp.period}</span>
                  <span className="text-xs text-slate-500 block">{exp.location}</span>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                        <Building2 size={20} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                        <h4 className="text-slate-600 font-medium">{exp.company}</h4>
                     </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-indigo-400"></span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};