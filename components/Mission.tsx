
import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Mission</h2>
          <p className="text-3xl lg:text-4xl font-medium text-slate-800 leading-tight mb-8 italic">
            "OpenCE Lab exists to make real computer engineering accessible to anyone, anywhere, using low-cost tools and open knowledge."
          </p>
          <div className="h-px w-24 bg-slate-200 mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe the ability to understand and build computing systems should not be limited by geography, income, or institutional access. Engineering should be learned by building, debugging, and deploying real systems — not behind paywalls or prerequisites.
          </p>
        </div>
      </div>
    </section>
  );
};
