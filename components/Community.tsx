
import React from 'react';

interface CommunityProps {
  onExplore?: () => void;
}

export const Community: React.FC<CommunityProps> = ({ onExplore }) => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-12 bg-slate-900 text-white rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Built by the Community</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                OpenCE Lab is open-source and community-driven. We use GitHub for collaborative curriculum development. Anyone can contribute labs, improve documentation, or translate materials.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={onExplore} className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2">
                   View Collaboration Hub
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <svg width="120" height="120" viewBox="0 0 100 100" className="text-white">
                 <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="2" />
                 <circle cx="50" cy="50" r="10" fill="currentColor" />
               </svg>
            </div>
          </div>
          
          <div className="p-12 bg-blue-50 border border-blue-100 rounded-3xl group flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Engineering That Serves</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our advanced "Deployment Track" allows learners to use their skills for the public good. We focus on building tools that solve real problems in local communities.
              </p>
            </div>
            {onExplore && (
              <button 
                onClick={onExplore}
                className="text-blue-600 font-bold hover:underline self-start"
              >
                See Public Project Gallery
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
