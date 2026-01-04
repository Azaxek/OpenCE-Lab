
import React from 'react';
import { Pathway } from '../components/Pathway';

interface PathwayPageProps {
  onSelectLab?: (id: string) => void;
}

export const PathwayPage: React.FC<PathwayPageProps> = ({ onSelectLab }) => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              The <span className="text-blue-500">Master</span> <br/>Curriculum.
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              A structured, high-rigor path from the first electron to complex systems engineering. No degrees required—just curiosity.
            </p>
          </div>
        </div>
        {/* Visual Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="scale-150">
             <defs>
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
             </defs>
             <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Lab Directory Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Mission Inventory</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Operational Lab Directory</h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm">
              Each module is a self-contained engineering project. Start from the foundation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Level 0 Column */}
            <div className="space-y-12">
              <div className="border-l-4 border-slate-900 pl-8">
                <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-1">FOUNDATION_00</div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Physical Physics</h3>
              </div>
              <div className="grid gap-6">
                {[
                  { id: 'CE-01', title: 'The Electron Journey', time: '1h', tags: ['PHYSICS', 'BREADBOARDING'], desc: 'Your first step into the physical world of power.' },
                  { id: 'CE-02', title: 'Silicon Switches', time: '1.5h', tags: ['TRANSISTORS', 'DC'], desc: 'How raw silicon controls current flow.' },
                  { id: 'CE-03', title: 'The DNA of Logic', time: '2h', tags: ['UNIVERSAL_GATES', 'NAND'], desc: 'Building logic from discrete transistors.' },
                  { id: 'CE-04', title: 'State & Memory', time: '3h', tags: ['FLIP_FLOPS', 'TIMING'], desc: 'Teaching a circuit how to "remember" its state.' }
                ].map(lab => (
                  <button 
                    key={lab.id}
                    onClick={() => onSelectLab?.(lab.id)}
                    className="w-full flex flex-col p-8 bg-slate-50 border border-slate-100 rounded-[32px] hover:bg-white hover:border-blue-500 hover:shadow-2xl transition-all text-left group"
                  >
                    <div className="flex justify-between items-start mb-6 w-full">
                      <div className="w-14 h-14 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white font-black flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <span className="text-[9px] opacity-60">MOD</span>
                        <span className="text-xl">{lab.id.split('-')[1]}</span>
                      </div>
                      <div className="flex gap-2">
                        {lab.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-black text-slate-400 bg-slate-200/50 px-2 py-1 rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-black text-slate-900 text-2xl mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{lab.title}</h4>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{lab.desc}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-black text-slate-400 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        {lab.time}
                      </span>
                      <span className="text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-2">
                        Initialize Lab
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Level 1 Column */}
            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-1">EMBEDDED_01</div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Digital Brains</h3>
              </div>
              <div className="grid gap-6">
                {[
                  { id: 'CE-05', title: 'The Silicon Brain', time: '4h', tags: ['REGISTERS', 'ISA'], desc: 'Direct control of the CPU without high-level code.' },
                  { id: 'CE-06', title: 'Interrupt Vectors', time: '3h', tags: ['TIMING', 'HARDWARE'], desc: 'How a CPU handles thousands of real-time events.' },
                  { id: 'CE-07', title: 'Serial Protocols', time: '5h', tags: ['UART', 'PROTOCOLS'], desc: 'Making hardware talk to the world.' },
                  { id: 'CE-08', title: 'Power Management', time: '4h', tags: ['LOW_POWER', 'SLEEP'], desc: 'Engineering systems that run on a coin cell for years.' }
                ].map(lab => (
                  <button 
                    key={lab.id}
                    onClick={() => onSelectLab?.(lab.id)}
                    className="w-full flex flex-col p-8 bg-slate-50 border border-slate-100 rounded-[32px] hover:bg-white hover:border-blue-500 hover:shadow-2xl transition-all text-left group"
                  >
                    <div className="flex justify-between items-start mb-6 w-full">
                      <div className="w-14 h-14 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white font-black flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <span className="text-[9px] opacity-60">MOD</span>
                        <span className="text-xl">{lab.id.split('-')[1]}</span>
                      </div>
                      <div className="flex gap-2">
                        {lab.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-black text-slate-400 bg-slate-200/50 px-2 py-1 rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-black text-slate-900 text-2xl mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{lab.title}</h4>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{lab.desc}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-black text-slate-400 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        {lab.time}
                      </span>
                      <span className="text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-2">
                        Initialize Lab
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Roadmap */}
      <div className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center mb-24">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] mb-4">Mastery Track</h2>
          <h3 className="text-6xl font-black uppercase tracking-tighter">Mission Roadmap</h3>
        </div>
        <Pathway onSelectLab={onSelectLab} />
      </div>
    </div>
  );
};
