
import React from 'react';

interface FounderProps {
  onExplore?: () => void;
}

export const Founder: React.FC<FounderProps> = ({ onExplore }) => {
  return (
    <section id="founder" className="py-32 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-slate-300 rounded-[48px] overflow-hidden relative grayscale shadow-2xl transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]">
              <img src="https://picsum.photos/seed/akshaj-vision/800/1000" alt="Akshaj Agadi" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <div className="text-xs font-black text-blue-400 tracking-[0.4em] uppercase mb-4">The Architect</div>
                <div className="text-5xl font-black tracking-tighter uppercase leading-none">Akshaj <br/>Agadi</div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Active System Lead</span>
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-blue-500 rounded-tr-[48px] opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-blue-500 rounded-bl-[48px] opacity-20"></div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                Founder's Manifest
                <div className="h-px flex-grow bg-blue-100"></div>
              </h2>
              <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase">From Solo Learner to <span className="text-blue-600">Public Architect.</span></h3>
              <div className="space-y-6 text-slate-600 text-xl font-medium leading-relaxed">
                <p>
                  OpenCE Lab isn't just a platform; it's the culmination of <span className="text-slate-900 font-bold">Akshaj Agadi's</span> journey as a self-taught engineer. Frustrated by the high walls of formal hardware education, he decided to dismantle them.
                </p>
                <p>
                  In January 2025, Akshaj launched this initiative to ensure that no student—regardless of where they are in the world—ever has to struggle with a lack of resources again. Under his leadership, we are standardizing computer engineering as a human right.
                </p>
              </div>
            </div>
            {onExplore && (
              <button 
                onClick={onExplore}
                className="group inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95"
              >
                Deep Dive into the Vision
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
