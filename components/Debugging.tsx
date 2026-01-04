
import React from 'react';

export const Debugging: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6">
            Core Philosophy
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Debugging Is the Curriculum</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Engineering is not about getting things right the first time — it is about knowing what to do when things fail. We teach the struggle, not just the solution.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Failure Modes', icon: '⚠️', desc: 'Understand why circuits oscillate or logic levels drift.' },
              { title: 'Diagnostics', icon: '🔍', desc: 'Master the use of logic analyzers and serial probes.' },
              { title: 'Workflows', icon: '⚙️', desc: 'Real industry strategies for isolating systemic faults.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 text-left">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <div className="text-[300px] font-bold font-mono tracking-tighter">BREAK IT</div>
      </div>
    </section>
  );
};
