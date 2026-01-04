
import React from 'react';

interface FounderPageProps {
  onConnect?: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onConnect }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
            <div className="w-full md:w-2/5 aspect-[4/5] bg-slate-200 rounded-[56px] overflow-hidden shadow-2xl relative group">
              <img src="https://picsum.photos/seed/akshaj-portrait/800/1000" alt="Akshaj Agadi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900 to-transparent">
                 <div className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-2">Lead Architect</div>
                 <div className="text-3xl font-black text-white uppercase tracking-tighter">Akshaj Agadi</div>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.8] uppercase">The <span className="text-blue-600">Visionary</span> <br/>Behind the Logic.</h1>
              <p className="text-2xl text-slate-500 leading-tight mb-10 italic font-bold">
                "I started OpenCE Lab because I was tired of being told that hardware engineering was too expensive or too difficult to learn without a degree. This is my answer to that lie."
              </p>
              <div className="h-1.5 w-32 bg-blue-600 rounded-full mb-10"></div>
              <p className="text-slate-600 leading-relaxed text-xl font-medium">
                Akshaj Agadi is the Founder and Lead Architect of OpenCE Lab. Born into a environment where hardware resources were scarce, he spent years reverse-engineering salvaged electronics and hunting for open documentation.
              </p>
              <p className="text-slate-600 leading-relaxed text-xl font-medium mt-6">
                He built this initiative from the ground up, designing the initial curriculum and hardware standards to reflect his personal philosophy: that true mastery comes from the intersection of deep physics and bare-metal execution.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] flex items-center gap-4">
                His Core Philosophy
                <div className="h-px flex-grow bg-blue-100"></div>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
                <p>
                  Akshaj believes that most modern education focuses on the "what" but ignores the "how." For him, a circuit isn't just components on a board; it's a conversation between electrons.
                </p>
                <p>
                  His <strong>"Zero Paywall"</strong> mandate is non-negotiable. Akshaj has personally ensured that every module, schematic, and software driver in this curriculum remains public infrastructure for all of humanity.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[56px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px]"></div>
              <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.5em] mb-10 relative z-10">Akshaj's Mission Goals</h2>
              <ul className="space-y-6 relative z-10">
                {[
                  'Educate 1,000,000 public engineers.',
                  'Standardize the $30 Home Lab globally.',
                  'Create an open repository of civic hardware.',
                  'Eradicate institutional silicon illiteracy.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-black">✓</div>
                    <span className="font-black text-white text-sm uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-24 p-16 bg-blue-600 rounded-[64px] text-white text-center shadow-2xl shadow-blue-200 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
             <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Join Akshaj's Mission</h3>
             <p className="text-blue-50 mb-10 max-w-xl mx-auto text-xl font-medium">
               We are scaling this initiative globally. If you share Akshaj's passion for open engineering, establish an uplink today.
             </p>
             <button 
               onClick={onConnect}
               className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 active:scale-95"
             >
               Connect with Akshaj & The Team
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
