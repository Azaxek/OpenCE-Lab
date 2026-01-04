
import React from 'react';
import { PROJECT_STORIES } from '../data/projects';

interface CommunityPageProps {
  onConnect?: () => void;
  onSelectProject?: (id: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onConnect, onSelectProject }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] mb-4">The Human Network</h2>
          <h1 className="text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-[0.85]">Built by <br/>Public Engineers.</h1>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            OpenCE Lab is a collective mission. We don't just share code; we share hard-earned hardware intuition and deployment strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            { 
              title: 'Peer Mentorship', 
              desc: 'Get paired with a senior hardware engineer who can guide you through complex debugging sessions. Real humans, real engineering.', 
              icon: '🤝',
              action: 'Find a Mentor',
              onAction: onConnect
            },
            { 
              title: 'Deployment Hub', 
              desc: 'Join local mission groups deploying hardware for public safety, weather monitoring, and local connectivity in your city.', 
              icon: '🛰️',
              action: 'Join Mission Control',
              onAction: onConnect
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 lg:p-16 rounded-[48px] border-2 border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-blue-500 transition-all hover:shadow-2xl">
              <div className="text-6xl mb-10 grayscale group-hover:grayscale-0 transition-all duration-500 scale-125">{item.icon}</div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">{item.title}</h3>
              <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed max-w-sm">{item.desc}</p>
              <button 
                onClick={() => item.onAction?.()}
                className="mt-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                {item.action}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 lg:p-20 rounded-[64px] border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-3xl"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4 leading-none">Public Project Gallery</h2>
              <p className="text-xl text-slate-500 font-medium">Real hardware engineering solving real physical problems in local communities.</p>
            </div>
            <button 
              onClick={onConnect}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-200 active:scale-95"
            >
              Submit Your Deploy
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {PROJECT_STORIES.map((proj) => (
              <div 
                key={proj.id} 
                onClick={() => onSelectProject?.(proj.id)}
                className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all cursor-pointer group shadow-sm hover:shadow-2xl"
              >
                <div className="text-blue-600 text-[10px] font-black font-mono mb-6 tracking-[0.3em] flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                   {proj.status}
                </div>
                <h4 className="font-black text-slate-900 text-2xl mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight leading-tight">{proj.name}</h4>
                <p className="text-sm text-slate-500 line-clamp-2 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors">{proj.summary}</p>
                <div className="flex justify-between text-[11px] text-slate-400 font-black uppercase tracking-widest pt-4 border-t border-slate-200 mt-4 group-hover:border-blue-100">
                   <span>{proj.location}</span>
                   <span className="text-slate-900">BY {proj.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
