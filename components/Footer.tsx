
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <button onClick={() => setView('home')} className="flex items-center gap-3 mb-8 text-left group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <span className="text-white font-black text-sm">CE</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">OpenCE Lab</span>
            </button>
            <p className="text-slate-500 text-lg font-medium max-w-md mb-6 leading-relaxed">
              A global public infrastructure project dedicated to the radical study of hardware and silicon engineering.
            </p>
            <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-10">
              Founded & Directed by Akshaj Agadi
            </p>
            <div className="flex gap-6">
              <a href="https://twitter.com/opence_lab" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest self-center">Signal Terminals Only</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.3em]">Knowledge Index</h4>
            <ul className="space-y-5">
              <li><button onClick={() => setView('pathway')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Lab Modules</button></li>
              <li><button onClick={() => setView('lab')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Hardware BOM</button></li>
              <li><button onClick={() => setView('start')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Deployment Track</button></li>
              <li><button onClick={() => setView('contact')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">System Support</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.3em]">The Founder</h4>
            <ul className="space-y-5">
              <li><button onClick={() => setView('founder')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Akshaj's Vision</button></li>
              <li><button onClick={() => setView('community')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Public Engineers</button></li>
              <li><button onClick={() => setView('contact')} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold uppercase tracking-widest">Uplink Hub</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2025 OpenCE Lab. Engineering is public infrastructure. Initiated by Akshaj Agadi.
          </p>
          <div className="flex gap-12">
            <span className="text-slate-300 text-xs font-black uppercase tracking-widest">SILICON LITERACY FOR ALL</span>
            <span className="text-slate-300 text-xs font-black uppercase tracking-widest">MIT INFRASTRUCTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
