
import React from 'react';

interface HeroProps {
  onStart?: () => void;
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onExplore }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Public Initiative Since Jan 2025
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 border-l border-slate-300 pl-3">
                Founded by Akshaj Agadi
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter uppercase font-black">
              Making computer engineering <span className="text-blue-600">public knowledge.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium">
              Democratizing hardware, embedded systems, and silicon literacy for everyone, everywhere. A radical open infrastructure project led by Akshaj Agadi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95"
              >
                Start Building Now
              </button>
              <button 
                onClick={onExplore}
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-black uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
              >
                Explore Curriculum
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-[40px] border border-slate-200 p-8 flex items-center justify-center overflow-hidden shadow-2xl">
              <svg viewBox="0 0 200 200" className="w-full h-full text-slate-300">
                <rect x="40" y="40" width="120" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="65" y="65" width="70" height="70" rx="2" fill="white" stroke="currentColor" strokeWidth="1" />
                {[...Array(8)].map((_, i) => (
                  <React.Fragment key={i}>
                    <line x1={50 + i * 14} y1="40" x2={50 + i * 14} y2="30" stroke="currentColor" strokeWidth="2" />
                    <line x1={50 + i * 14} y1="160" x2={50 + i * 14} y2="170" stroke="currentColor" strokeWidth="2" />
                    <line x1="40" y1={50 + i * 14} x2="30" y2={50 + i * 14} stroke="currentColor" strokeWidth="2" />
                    <line x1="160" y1={50 + i * 14} x2="170" y2={50 + i * 14} stroke="currentColor" strokeWidth="2" />
                  </React.Fragment>
                ))}
                <path d="M70,80 H130 M70,100 H130 M70,120 H130 M90,70 V130 M110,70 V130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                <circle r="2" fill="#2563eb">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M40,70 H65 M135,70 H160" />
                </circle>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase mb-1">
                  OpenCE Core
                </div>
                <div className="text-[8px] font-mono font-bold text-blue-600 tracking-[0.2em] uppercase opacity-60">
                  By Akshaj Agadi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
