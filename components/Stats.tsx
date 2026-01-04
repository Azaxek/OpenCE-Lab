
import React from 'react';

const STATS = [
  { value: '50+', label: 'Engineering Labs' },
  { value: '$30', label: 'Average Lab Cost' },
  { value: '1,000+', label: 'Learners Global' },
  { value: '20+', label: 'Countries Reached' },
  { value: '100%', label: 'Free & Open Source' }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group p-4 hover:bg-slate-50 rounded-2xl transition-all">
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
