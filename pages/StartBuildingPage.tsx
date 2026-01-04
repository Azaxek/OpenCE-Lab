
import React from 'react';
import { View } from '../App';

interface StartBuildingPageProps {
  onSelectLab?: (id: string) => void;
  setView?: (view: View) => void;
}

export const StartBuildingPage: React.FC<StartBuildingPageProps> = ({ onSelectLab, setView }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Hello, World.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Welcome to your first step as a public computer engineer. 
              Follow the steps below to prepare your workstation, then dive into your first lab.
            </p>
          </div>

          <div className="space-y-12 mb-24">
            {[
              { 
                step: '01', 
                title: 'Get Your Hardware', 
                desc: 'Every lab uses the standard OpenCE $30 Lab Kit. Ensure you have the basic components ready.',
                action: 'View Lab Kit BOM',
                actionView: 'lab' as View
              },
              { 
                step: '02', 
                title: 'Toolchain Setup', 
                desc: 'Install VS Code and the PlatformIO extension. This allows you to compile C/C++ code and flash it to your ESP32.',
                code: 'code --install-extension platformio.platformio-ide'
              },
              { 
                step: '03', 
                title: 'Clone Starter Lab', 
                desc: 'Get the official starting project structure. This includes necessary configuration files for the ESP32.',
                code: 'git clone https://github.com/opence-lab/starter-labs.git'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-16 group">
                <div className="absolute left-0 top-0 text-3xl font-bold text-slate-200 group-hover:text-blue-600 transition-colors font-mono">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  
                  {item.code && (
                    <div className="bg-slate-900 p-4 rounded-xl font-mono text-sm text-blue-300 overflow-x-auto border border-slate-800 shadow-inner">
                      $ {item.code}
                    </div>
                  )}

                  {item.action && (
                    <button 
                      onClick={() => item.actionView && setView?.(item.actionView)}
                      className="px-6 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
                    >
                      {item.action}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 bg-slate-900 rounded-[40px] text-white text-center shadow-xl">
             <h3 className="text-3xl font-bold mb-6">Ready to build?</h3>
             <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
               Start with Lab CE-01 to master the basics of electron flow before moving to silicon.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onSelectLab?.('CE-01')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all"
                >
                  Start Lab CE-01
                </button>
                <button 
                  onClick={() => onSelectLab?.('CE-05')}
                  className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700"
                >
                  Skip to Microcontrollers
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
