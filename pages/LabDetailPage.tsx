import React, { useState } from 'react';
import { LAB_DATA } from '../data/labs';

interface LabDetailPageProps {
  labId: string;
  onBack: () => void;
}

export const LabDetailPage: React.FC<LabDetailPageProps> = ({ labId, onBack }) => {
  const [showDebugger, setShowDebugger] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const data = LAB_DATA[labId] || LAB_DATA['CE-01'];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Progress Bar (Visual) */}
      <div className="fixed top-[64px] left-0 right-0 h-1.5 bg-slate-200 z-40">
        <div 
          className="h-full bg-blue-600 transition-all duration-700 ease-out" 
          style={{ width: `${((activeStep + 1) / data.steps.length) * 100}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors group font-black text-xs uppercase tracking-[0.25em]"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Abort to Index
          </button>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Instructional Content */}
            <div className="lg:col-span-8 space-y-16">
              <header className="relative">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-slate-900 text-blue-400 rounded-lg text-xs font-black font-mono tracking-tighter border border-slate-700">{data.id}</span>
                  <div className="h-px w-8 bg-slate-300"></div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{data.difficulty}</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-[0.85]">{data.title}</h1>
                <p className="text-2xl font-bold text-blue-600 uppercase tracking-tight mb-8">{data.subtitle}</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Scientific Objective</h3>
                    <p className="text-lg font-bold text-slate-800 leading-tight">{data.objective}</p>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Prerequisites</h3>
                    <ul className="text-sm font-medium space-y-1 text-slate-300">
                      {data.prerequisites.map((p, i) => <li key={i}>• {p}</li>)}
                    </ul>
                  </div>
                </div>
              </header>

              {/* Scientific Principles Section */}
              <div className="space-y-6">
                <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  Physics & Logic Principles
                  <div className="h-px flex-grow bg-slate-200"></div>
                </h2>
                <div className="grid gap-6">
                  {data.scientificPrinciples.map((principle, i) => (
                    <div key={i} className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
                      </div>
                      <h3 className="text-xl font-black text-blue-900 mb-3 uppercase tracking-tight">{principle.title}</h3>
                      <p className="text-slate-700 leading-relaxed font-medium">{principle.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analogy Card */}
              <div className="bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-2xl shadow-slate-100 relative">
                <div className="absolute -top-6 left-12 px-6 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em]">Concept Mental Model</div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight italic">
                  "{data.analogy}"
                </p>
              </div>

              {/* Interactive Steps Section */}
              <div className="space-y-8">
                <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  Tactical Deployment Steps
                  <div className="h-px flex-grow bg-slate-200"></div>
                </h2>
                {data.steps.map((step, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => setActiveStep(i)}
                    className={`group flex gap-8 p-10 rounded-[40px] border-2 transition-all cursor-default ${activeStep === i ? 'bg-white border-blue-500 shadow-2xl' : 'bg-slate-50 border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-mono text-2xl font-black transition-all ${activeStep === i ? 'bg-blue-600 text-white scale-110 shadow-lg shadow-blue-200' : 'bg-slate-900 text-white'}`}>
                      {i + 1}
                    </div>
                    <div className="space-y-4">
                      <h3 className={`text-3xl font-black uppercase tracking-tighter ${activeStep === i ? 'text-slate-900' : 'text-slate-500'}`}>{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg font-medium">{step.desc}</p>
                      {step.technicalNote && (
                        <div className="p-4 bg-slate-900 rounded-2xl text-blue-300 font-mono text-xs border border-blue-500/20">
                          <span className="text-blue-500 font-black mr-2">TECH_DEEP_DIVE:</span>
                          {step.technicalNote}
                        </div>
                      )}
                      {step.check && (
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-100 text-green-700 rounded-xl text-xs font-black border border-green-200 uppercase tracking-widest">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 14.14l-1.414 1.414L7 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L5.586 10 1.293 5.707a1 1 0 011.414-1.414L7 8.586l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          QA_CHECK: {step.check}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Section */}
              {data.code && (
                <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all"></div>
                  <div className="flex justify-between items-center mb-10 relative z-10">
                    <div>
                      <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-2">Systems Level Source</h3>
                      <p className="text-sm text-slate-400">Direct hardware register instructions</p>
                    </div>
                    <button 
                      onClick={() => {
                          navigator.clipboard.writeText(data.code!);
                          alert("Binary Logic Decoupled & Copied!");
                      }}
                      className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all border border-slate-700 active:scale-95"
                    >
                      EXTRACT SOURCE
                    </button>
                  </div>
                  <pre className="font-mono text-base leading-relaxed overflow-x-auto text-blue-300 p-8 bg-slate-800/50 rounded-3xl border border-slate-800 shadow-inner relative z-10 custom-scrollbar">
                    {data.code}
                  </pre>
                </div>
              )}

              {/* Industrial Context Section */}
              <div className="bg-white p-12 rounded-[48px] border-2 border-slate-100 shadow-sm">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-8">Industrial Deployment Context</h3>
                <div className="grid sm:grid-cols-2 gap-12">
                   <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase mb-4 tracking-widest">Real-World Utility</h4>
                      <p className="text-slate-600 leading-relaxed font-medium italic">"{data.realWorldApp}"</p>
                   </div>
                   <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase mb-4 tracking-widest">Theoretical Root</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{data.theory}</p>
                   </div>
                </div>
              </div>

              {/* Final Challenge */}
              <div className="bg-yellow-50 p-16 rounded-[56px] border-2 border-yellow-200 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-yellow-200/30 rounded-full blur-3xl"></div>
                <h3 className="text-xs font-black text-yellow-700 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <span className="w-3 h-3 bg-yellow-600 rounded-full animate-ping"></span>
                  Mission Mastery Challenge
                </h3>
                <p className="text-4xl font-black text-yellow-900 mb-8 leading-[1.1] tracking-tighter">
                  "{data.challenge}"
                </p>
                <div className="flex items-center gap-4 p-6 bg-white/50 rounded-3xl border border-yellow-300/50">
                   <div className="w-10 h-10 bg-yellow-600 text-white rounded-xl flex items-center justify-center font-bold">!</div>
                   <p className="text-yellow-800 text-sm font-bold uppercase tracking-widest">No documentation lookup permitted for this challenge.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm sticky top-28">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Module Telemetry</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="p-8 bg-slate-50 rounded-3xl">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase mb-2 tracking-widest">Scientific Inventory</h4>
                    <ul className="space-y-3 mt-4">
                      {data.bom.map((item, i) => (
                        <li key={i} className="flex gap-4 text-sm text-slate-600 font-bold items-start group cursor-pointer">
                          <div className="w-5 h-5 rounded-lg border-2 border-slate-300 flex-shrink-0 mt-0.5 group-hover:border-blue-600 transition-colors bg-white"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-900 rounded-2xl text-white text-center">
                      <h4 className="text-[8px] font-black text-slate-500 uppercase mb-2">Duration</h4>
                      <p className="text-xl font-black tracking-tighter">{data.time}</p>
                    </div>
                    <div className="p-6 bg-blue-600 rounded-2xl text-white text-center">
                      <h4 className="text-[8px] font-black text-blue-200 uppercase mb-2">Confidence</h4>
                      <p className="text-xl font-black tracking-tighter">100%</p>
                    </div>
                  </div>

                  <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                    <h4 className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-widest">Sabotage Phase (Break)</h4>
                    <p className="text-sm text-red-900 leading-relaxed font-black uppercase tracking-tight italic">"{data.break}"</p>
                  </div>
                  
                  <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                    <h4 className="text-[10px] font-black text-orange-600 uppercase mb-6 tracking-widest">Common Pathologies</h4>
                    <ul className="space-y-3">
                      {data.pitfalls.map((p, i) => (
                        <li key={i} className="text-[11px] font-bold text-orange-800 leading-tight">• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setShowDebugger(!showDebugger)}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-98"
                  >
                    {showDebugger ? 'Close Debugger' : 'Open Debugging Matrix'}
                  </button>
                  {showDebugger && (
                    <div className="mt-6 p-8 bg-slate-900 rounded-3xl text-blue-300 font-mono text-[10px] leading-relaxed space-y-4 border border-blue-500/30 animate-in slide-in-from-top-4 duration-300">
                      <p className="text-blue-500 font-bold tracking-widest">// DIAGNOSTIC_OVERRIDE_ENABLED</p>
                      <p>&gt; CHECK GROUND CONTINUITY (V_GND &lt; 0.1V)</p>
                      <p>&gt; VERIFY RESISTOR COLOR BANDS (OHMS_VAL_EXPECTED: {data.bom.find(b => b.includes('Ω'))})</p>
                      <p>&gt; MEASURE RAIL VOLTAGE: NOMINAL_VDC_EXPECTED</p>
                      <p className="text-red-500">&gt; WARNING: COMPONENT TEMP EXCEEDS SAFE_T_THRESHOLD?</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};