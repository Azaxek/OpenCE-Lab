
import React, { useState } from 'react';
import { PROJECT_STORIES } from '../data/projects';

interface ProjectStoryPageProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectStoryPage: React.FC<ProjectStoryPageProps> = ({ projectId, onBack }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'build'>('story');
  const project = PROJECT_STORIES.find(p => p.id === projectId) || PROJECT_STORIES[0];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group font-black text-xs uppercase tracking-[0.25em]"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Community Hub
            </button>

            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              <button 
                onClick={() => setActiveTab('story')}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'story' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                The Impact Story
              </button>
              <button 
                onClick={() => setActiveTab('build')}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'build' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Construction Guide
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-12">
              {activeTab === 'story' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <header>
                    <div className="inline-flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-black font-mono tracking-tighter">{project.status}</span>
                      <div className="h-px w-8 bg-slate-300"></div>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{project.location}</span>
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.85]">{project.name}</h1>
                    <p className="text-2xl font-bold text-slate-500 leading-tight border-l-4 border-blue-600 pl-8 mb-12">
                      {project.summary}
                    </p>
                  </header>

                  <div className="aspect-video w-full bg-slate-100 rounded-[56px] overflow-hidden shadow-2xl relative group mb-12">
                    <img 
                      src={`https://picsum.photos/seed/${project.imageSeed}/1200/800`} 
                      alt={project.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                  </div>

                  <div className="space-y-8">
                    <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                      Deployment Narrative
                      <div className="h-px flex-grow bg-slate-100"></div>
                    </h2>
                    <div className="prose prose-xl prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                      {project.fullStory.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-6">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl mt-12">
                    <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-10">Mission Impact Report</h3>
                    <p className="text-3xl font-black tracking-tighter uppercase leading-none">
                      {project.impact}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
                  <header>
                    <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] mb-4">Technical Blueprints</h2>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">How to <br/>Build This.</h1>
                  </header>

                  <div className="bg-slate-50 p-10 rounded-[48px] border-2 border-slate-100">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">System Architecture</h3>
                    <p className="text-2xl font-black text-slate-800 tracking-tight uppercase">
                      {project.buildGuide.architecture}
                    </p>
                    <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-200">
                      <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">Wiring Logic</h4>
                      <p className="text-sm font-bold text-slate-600 leading-relaxed">{project.buildGuide.schematicNote}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                      Assembly Instructions
                      <div className="h-px flex-grow bg-slate-100"></div>
                    </h3>
                    <div className="space-y-6">
                      {project.buildGuide.steps.map((step, i) => (
                        <div key={i} className="flex gap-8 group">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                            {i + 1}
                          </div>
                          <div className="space-y-3 pb-8 border-b border-slate-100 flex-grow">
                            <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">{step.title}</h4>
                            <p className="text-slate-600 font-medium leading-relaxed">{step.instruction}</p>
                            {step.technicalTip && (
                              <div className="inline-flex gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
                                PRO_TIP: {step.technicalTip}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.buildGuide.codeSnippet && (
                    <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden group">
                      <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em]">Core Control Logic</h3>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(project.buildGuide.codeSnippet!);
                            alert("Uplink Source Copied.");
                          }}
                          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                        >
                          Copy Code
                        </button>
                      </div>
                      <pre className="font-mono text-sm leading-relaxed text-blue-300 p-8 bg-slate-800/50 rounded-3xl overflow-x-auto border border-slate-800">
                        {project.buildGuide.codeSnippet}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="bg-slate-50 p-10 rounded-[48px] border border-slate-200">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Project Telemetry</h3>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-4 tracking-widest">Hardware BOM</h4>
                    <ul className="space-y-3">
                      {project.hardware.map((hw, i) => (
                        <li key={i} className="flex gap-4 text-sm text-slate-600 font-bold items-center">
                          <div className="w-6 h-6 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                          {hw}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-4 tracking-widest">Deployment Roadblocks</h4>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, i) => (
                        <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 leading-relaxed italic">
                           " {challenge} "
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lead Engineer</div>
                        <div className="text-xl font-black text-slate-900 uppercase tracking-tight">{project.author}</div>
                      </div>
                      <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black">
                         {project.author.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 p-10 rounded-[48px] text-white shadow-xl shadow-blue-100">
                 <h4 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-6">Uplink Support</h4>
                 <p className="text-lg font-bold leading-tight mb-8 uppercase tracking-tight">Support this deployment with parts or mentorship.</p>
                 <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                   Establish Direct Uplink
                 </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
