import React from 'react';
import { EDUCATIONS, ACTIVITIES } from '../constants';
import { GraduationCap, Award, Star } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50" id="education">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><GraduationCap size={24} /></span>
               Education
             </h2>
             <div className="space-y-6">
               {EDUCATIONS.map((edu, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                   <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-lg text-slate-900">{edu.degree}</h3>
                     <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-100">
                       {edu.score}
                     </span>
                   </div>
                   <p className="text-indigo-600 font-medium mb-1">{edu.institution}</p>
                   <p className="text-sm text-slate-500 mb-4">{edu.location} • {edu.period}</p>
                   {edu.details && (
                     <div className="pt-3 border-t border-slate-50">
                       <p className="text-sm text-slate-600">{edu.details}</p>
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>

          {/* Activities / Highlights Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <span className="p-2 bg-amber-100 rounded-lg text-amber-600"><Star size={24} /></span>
               Interests & Activities
             </h2>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-fit">
               <p className="text-slate-600 mb-6 leading-relaxed">
                 Beyond code, I am passionate about exploring new technologies and broadening my horizons through travel.
               </p>
               <div className="flex flex-wrap gap-3">
                 {ACTIVITIES.map((activity, idx) => (
                   <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors">
                     <Award size={16} className="text-indigo-500" />
                     {activity}
                   </div>
                 ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Key Achievements</h4>
                 <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 min-w-[20px] text-center text-lg">🥈</span>
                      <span>Ranked 2nd in district-level math competition (2023)</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 min-w-[20px] text-center text-lg">🎓</span>
                      <span>Consistently high academic performance (9.2 CGPA)</span>
                    </li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};