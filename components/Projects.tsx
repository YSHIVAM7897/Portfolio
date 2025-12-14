import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, X, Image as ImageIcon, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  // Reset image index when project changes
  useEffect(() => {
  if (!selectedProject) return;

  const interval = setInterval(() => {
    setActiveImageIndex((prev) =>
      (prev + 1) % selectedProject.images.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, [selectedProject]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject?.images) {
      setActiveImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject?.images) {
      setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1));
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50" id="projects">
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

        {/* Projects Grid - Light Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-200 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Cover Image */}
              <div className="h-64 w-full overflow-hidden relative bg-slate-100">
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors z-10" />
                {project.images && project.images.length > 0 ? (
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-300">
                    <ImageIcon size={48} />
                  </div>
                )}
                
                {/* Image Count Badge */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 z-20 px-2 py-1 bg-white/90 backdrop-blur-md rounded-lg text-slate-600 text-xs font-medium flex items-center gap-1 shadow-sm border border-slate-100">
                    <Layers size={12} />
                    {project.images.length}
                  </div>
                )}
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 text-sm font-medium">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-3 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-medium px-3 py-1.5 bg-slate-50 text-slate-500 border border-slate-200 rounded-lg">
                      +{project.techStack.length - 3}
                    </span>
                  )}
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

      {/* Project Detail Modal - Light Theme Premium Layout */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button - Floating */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full backdrop-blur-md transition-all shadow-sm border border-slate-200 group"
              aria-label="Close modal"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Content Container - Scrollable */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              
              {/* Hero Image / Gallery Section */}
              <div className="w-full bg-slate-100 relative group aspect-video md:aspect-[21/9] max-h-[50vh] flex items-center justify-center border-b border-slate-100">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    <img 
                      src={selectedProject.images[activeImageIndex]} 
                      alt={`${selectedProject.title} screenshot`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 p-3 bg-white/80 text-slate-900 rounded-full hover:bg-white hover:text-indigo-600 hover:shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 p-3 bg-white/80 text-slate-900 rounded-full hover:bg-white hover:text-indigo-600 hover:shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                        >
                          <ChevronRight size={24} />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-slate-900/20 backdrop-blur-md rounded-full border border-white/20">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center text-slate-400">
                    <ImageIcon size={48} className="mb-2" />
                    <span className="text-sm">No preview available</span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10 bg-white">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8 border-b border-slate-100 pb-8">
                    <span className="text-indigo-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                      {selectedProject.role}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-10">
                    {/* Main Features & Solutions */}
                    <div className="md:col-span-2 space-y-10">
                      <div>
                        <h4 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                          <span className="w-1 h-5 bg-indigo-600 rounded-full"></span>
                          Key Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.details.map((detail, i) => (
                            <div key={i} className="text-slate-600 text-sm flex gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                              <div className="min-w-[6px] h-[6px] rounded-full bg-indigo-400 mt-1.5"></div>
                              <span className="leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedProject.solutions && (
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                             <CheckCircle2 size={18} className="text-green-600" />
                             Technical Solutions
                          </h4>
                          <div className="space-y-4">
                            {selectedProject.solutions.map((sol, i) => (
                              <div key={i} className="flex gap-4 text-slate-600 text-sm p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-indigo-600 font-mono text-xs mt-0.5">0{i+1}</span>
                                <p className="leading-relaxed">{sol}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.challenges && (
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                            Challenges
                            <AlertCircle size={14} className="text-amber-500" />
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.challenges.map((c, i) => (
                              <li key={i} className="text-slate-500 text-sm leading-relaxed pl-3 border-l-2 border-slate-100">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-6 border-t border-slate-100">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Period</span>
                            <span className="text-slate-700 text-sm font-medium">{selectedProject.period}</span>
                         </div>
                         <a 
                            href="https://github.com/YSHIVAM7897" 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25"
                         >
                            <Github size={18} />
                            View Source Code
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
