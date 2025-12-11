import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code, Database, Globe, Layers, Cpu, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Languages": <Code size={20} />,
  "Frameworks/Libs": <Globe size={20} />,
  "Database": <Database size={20} />,
  "Testing": <Cpu size={20} />,
  "Tools": <Terminal size={20} />
};

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="skills">
       <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-center max-w-2xl md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
          <p className="text-slate-500 text-lg">
            A curated stack of technologies I use to build robust and scalable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {iconMap[cat.name] || <Layers size={20} />}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{cat.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg border border-slate-200/60 group-hover:border-indigo-100 group-hover:bg-indigo-50/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};