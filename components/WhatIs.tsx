
import React from 'react';

export const WhatIs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">What Is OpenCE Lab?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              OpenCE Lab is an open, community-built platform that teaches real computer engineering through hands-on hardware labs, embedded systems programming, and systems-level thinking — all designed to work at home with low-cost components.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Not a coding course', desc: 'We focus on the intersection of electrons and logic, not just syntax.' },
                { title: 'Not a video platform', desc: 'You learn through interactive labs, schematics, and hardware interaction.' },
                { title: 'Real-world practice', desc: 'Professional debugging, industry protocols, and systems engineering.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-[10px]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <div className="font-mono text-xs text-slate-400 mb-4 opacity-75">// OpenCE_Hardware_Abstraction_Layer.h</div>
              <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-blue-300">
{`#include <opence_hal.h>

void setup() {
  // Initialize Hardware Signals
  system_init();
  
  // Real engineering is 90% 
  // debugging and 10% building.
  start_lab(MODULE_GPIO_TIMING);
}

void loop() {
  if (is_broken()) {
    debug_system(); // The core skill
  }
}`}
              </pre>
            </div>
            {/* Visual Decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
