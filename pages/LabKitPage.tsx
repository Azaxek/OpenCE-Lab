
import React from 'react';

export const LabKitPage: React.FC = () => {
  const kitItems = [
    { name: 'Microcontroller', model: 'ESP32-WROOM (38-pin)', cost: '$4-6', desc: 'The brain. Handles WiFi, BT, and high-speed logic.' },
    { name: 'Breadboard', model: '830-Point MB-102', cost: '$3', desc: 'Your workspace for building circuits without soldering.' },
    { name: 'Logic Probe', model: 'DIY Kit', cost: '$2', desc: 'Simple LED-based probe to visualize logic levels.' },
    { name: 'Power Module', model: 'MB-102 3.3V/5V', cost: '$2', desc: 'Regulated power from USB or 9V battery.' },
    { name: 'Passives', model: 'Resistors/Caps Assortment', cost: '$5', desc: 'Essential 220Ω, 1kΩ, 10kΩ resistors and 100uF caps.' },
    { name: 'Jumpers', model: 'M-M, M-F, F-F set', cost: '$3', desc: 'Connecting wires for breadboarding.' },
    { name: 'Output', model: 'LEDs & 16x2 LCD', cost: '$4', desc: 'Visualizing system state and debugging output.' },
    { name: 'Input', model: 'Buttons & Potentiometers', cost: '$2', desc: 'User interaction and analog signal generation.' }
  ];

  const openVendor = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">The $30 Lab Kit</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Professional engineering doesn't require a professional budget. This specific selection of components 
            allows you to complete every lab in the OpenCE curriculum.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">BOM (Bill of Materials)</h2>
            <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Item</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Model Specification</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Est. Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {kitItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        <div>{item.model}</div>
                        <div className="text-[10px] text-slate-400 mt-1 italic">{item.desc}</div>
                      </td>
                      <td className="px-6 py-4 text-blue-600 font-mono text-sm">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-slate-900 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Total Estimated Cost: ~$25 - $32</h3>
              <p className="text-slate-400 text-sm">Prices may vary based on your local market or bulk purchases from vendors like AliExpress, Amazon, or local electronic shops.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-28">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Where to Buy?</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => openVendor('https://www.aliexpress.com/')}
                  className="w-full text-left block p-4 border border-slate-100 rounded-xl hover:bg-blue-50 transition-all group"
                >
                  <div className="font-bold text-slate-900 group-hover:text-blue-600">AliExpress (Global)</div>
                  <div className="text-xs text-slate-500">Best for low cost, high lead time.</div>
                </button>
                <button 
                  onClick={() => openVendor('https://www.amazon.com/')}
                  className="w-full text-left block p-4 border border-slate-100 rounded-xl hover:bg-blue-50 transition-all group"
                >
                  <div className="font-bold text-slate-900 group-hover:text-blue-600">Amazon (Global)</div>
                  <div className="text-xs text-slate-500">Fast shipping, standard components.</div>
                </button>
                <button 
                  onClick={() => openVendor('https://www.adafruit.com/')}
                  className="w-full text-left block p-4 border border-slate-100 rounded-xl hover:bg-blue-50 transition-all group"
                >
                  <div className="font-bold text-slate-900 group-hover:text-blue-600">Adafruit / SparkFun</div>
                  <div className="text-xs text-slate-500">High quality, educator verified.</div>
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-600 italic">
                  "The kit is a standard. If you already have these components, you don't need to buy anything new."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
