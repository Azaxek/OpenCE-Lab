
import React, { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      // Logic for reset could go here
    }, 3000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white selection:bg-blue-500/30">
      <div className="container mx-auto px-6 py-20 relative overflow-hidden">
        {/* Background circuit lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,0 V100 M30,0 V100 M50,0 V100 M70,0 V100 M90,0 V100" stroke="white" strokeWidth="0.1" />
            <path d="M0,10 H100 M0,30 H100 M0,50 H100 M0,70 H100 M0,90 H100" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="mb-12 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-xs font-black uppercase tracking-[0.2em]"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Return to Root
          </button>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
                Establish <br/>
                <span className="text-blue-500">Uplink.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-md leading-relaxed mb-12">
                Whether you're an educator, a developer, or a potential partner, our lines are open to scale public computer engineering globally.
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Direct Channels</h3>
                  <div className="space-y-4">
                    <a href="tel:+18775050522" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all group">
                      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <span className="font-mono text-sm tracking-tight">+1 (877) 505-0522</span>
                    </a>
                    <a href="mailto:hello@opence.lab" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all group">
                      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <span className="font-mono text-sm tracking-tight">hello@opence.lab</span>
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-blue-600 rounded-[32px] shadow-2xl shadow-blue-500/10">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4 opacity-70">Physical Presence</h4>
                  <p className="text-xl font-bold leading-tight">Global Open Initiative.<br/>Remote-First Organization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 lg:p-16 text-slate-900 shadow-2xl relative">
              {submitted ? (
                <div className="py-20 text-center animate-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Signal Sent.</h2>
                  <p className="text-slate-500 mb-8">Your message has been encrypted and dispatched to the OpenCE core team.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Communication Node</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Callsign / Name</label>
                        <input required type="text" placeholder="Engineer Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Terminal</label>
                        <input required type="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject Vector</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none">
                        <option>Curriculum Contribution</option>
                        <option>Partnership Inquiry</option>
                        <option>Deployment Track Question</option>
                        <option>Hardware Kit Troubleshooting</option>
                        <option>General Support</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Transmission Message</label>
                      <textarea required rows={5} placeholder="Type your message here..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]">
                      Transmit Signal
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
