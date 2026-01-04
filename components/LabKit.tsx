
import React from 'react';

const COMPONENTS = [
  { name: 'ESP32 / RP2040', desc: 'Dual-core processing & wireless connectivity.' },
  { name: 'Breadboard', desc: 'Solderless prototyping for rapid iteration.' },
  { name: 'Sensors', desc: 'Temperature, light, and motion input.' },
  { name: 'Discrete Components', desc: 'Resistors, capacitors, and transistors.' }
];

interface LabKitProps {
  onExplore?: () => void;
}

export const LabKit: React.FC<LabKitProps> = ({ onExplore }) => {
  return (
    <section id="lab" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-slate-800 rounded-3xl relative overflow-hidden flex items-center justify-center p-12 border border-slate-700">
               <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                  <div className="border border-slate-500 rounded-lg"></div>
                  <div className="border border-slate-500 rounded-full"></div>
                  <div className="border border-slate-500 rounded-full"></div>
                  <div className="border border-slate-500 rounded-lg"></div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold tracking-tighter">$30 LAB</div>
               </div>
               <div className="absolute bottom-8 left-8 right-8 text-center text-xs text-slate-500 font-mono">
                 // SPEC: MINIMAL_HARDWARE_TARGET_V1.0
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-8">The $30 Home Engineering Lab</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              OpenCE Lab defines a minimal, reusable hardware standard. We don't believe in $1000 kits. We believe in high-rigor engineering using widely available, low-cost parts.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {COMPONENTS.map((item, idx) => (
                <div key={idx} className="p-4 border border-slate-800 rounded-xl bg-slate-800/50">
                  <h3 className="font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
            {onExplore && (
              <button 
                onClick={onExplore}
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline"
              >
                Full Component List & Buying Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
