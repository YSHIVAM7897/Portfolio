import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, X, AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section className="py-24 px-6 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Featured Projects</h2>
            <p className="text-slate-500">Showcasing my journey in full-stack & mobile development.</p>
          </div>
          <a href="https://github.com/YSHIVAM7897" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700">
            View Github <Github size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
              {/* Decorative arrow */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <ArrowUpRight size={24} className="text-slate-900" />
                </div>
              </div>
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold tracking-wide text-indigo-600 uppercase">
                      {project.role}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                     {project.details.slice(0, 3).map((detail, dIdx) => (
                       <li key={dIdx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 min-w-[4px] rounded-full bg-slate-400"></span>
                          <span className="line-clamp-2">{detail}</span>
                       </li>
                     ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-white text-slate-500 border border-slate-200 rounded-md">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-medium">
            View Github <Github size={18} />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-start z-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
                <p className="text-indigo-600 font-medium">{selectedProject.role} • {selectedProject.period}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Project Overview</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                   {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                   ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-3">Key Features</h4>
                   <ul className="space-y-3">
                      {selectedProject.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-slate-400"></span>
                          {detail}
                        </li>
                      ))}
                   </ul>
                </div>
                
                {selectedProject.challenges && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                       <AlertCircle size={20} className="text-amber-500" />
                       Challenges
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 leading-relaxed">
                          {item}
                        </li>
                      ))}
                   </ul>
                  </div>
                )}
              </div>

              {selectedProject.solutions && (
                 <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                       <CheckCircle2 size={20} className="text-green-600" />
                       Solutions Implemented
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-green-700">
                           <span>•</span>
                           {item}
                        </li>
                      ))}
                   </ul>
                 </div>
              )}

              {selectedProject.learnings && (
                <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                       <Lightbulb size={20} className="text-indigo-500" />
                       Key Learnings
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.learnings.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                           <span className="font-bold text-indigo-400">{i + 1}.</span>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};