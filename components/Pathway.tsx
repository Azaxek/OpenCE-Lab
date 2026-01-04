
import React, { useState } from 'react';

const STAGES = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'The physics of computing.',
    intro: 'Before writing code, we must understand the physical signals that make it possible. This stage covers basic electronics and logic gates.',
    topics: ['Electricity, signals, and logic', 'How CPUs work at the hardware level', 'Reading and drafting schematics'],
    labs: [
      { id: 'CE-01', title: 'Building an AND gate from Transistors' },
      { id: 'CE-02', title: 'The 4-bit Binary Adder' },
      { id: 'CE-03', title: 'Visualizing Clock Signals' }
    ],
    philosophy: {
      build: 'Assemble basic logic circuits on a breadboard.',
      break: 'Observe what happens when voltage drops or noise is introduced.',
      debug: 'Use a multimeter to trace signal discontinuities.',
      extend: 'Combine gates to create a latching memory cell.'
    }
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    description: 'Hardware controlled by software.',
    intro: 'Introduction to the microcontroller: the bridge between logic and silicon execution.',
    topics: ['Microcontrollers (ESP32 / RP2040)', 'GPIO, interrupts, timers', 'Bare-metal C/C++ development'],
    labs: [
      { id: 'CE-05', title: 'Bare-metal LED blinking' },
      { id: 'CE-06', title: 'Interrupt-driven Input Sensing' },
      { id: 'CE-07', title: 'Pulse Width Modulation' }
    ],
    philosophy: {
      build: 'Write a basic driver for a hardware peripheral.',
      break: 'Cause a race condition using high-frequency interrupts.',
      debug: 'Implement serial logging to track variable states.',
      extend: 'Create a precise timing loop without using delay functions.'
    }
  },
  {
    id: 'codesign',
    title: 'Hardware-Software Co-Design',
    description: 'Bridging the physical and digital.',
    intro: 'Optimization happens when software is aware of hardware constraints and vice versa.',
    topics: ['Sensors and real-world signals', 'Power management', 'Communication (I2C, SPI, UART)'],
    labs: [
      { id: 'CE-08', title: 'Bit-banging I2C protocols' },
      { id: 'CE-09', title: 'Analog-to-Digital Conversion' },
      { id: 'CE-10', title: 'Low-power Sleep States' }
    ],
    philosophy: {
      build: 'Interface with a digital sensor using a custom driver.',
      break: 'Introduce clock skew in the communication bus.',
      debug: 'Analyze packet loss using a logic analyzer.',
      extend: 'Implement error checking (CRC) for data integrity.'
    }
  },
  {
    id: 'systems',
    title: 'Systems Engineering',
    description: 'Reliability at scale.',
    intro: 'Moving from single tasks to complex, multi-threaded, networked systems.',
    topics: ['RTOS fundamentals', 'Networking & Wireless', 'Reliability and fault tolerance'],
    labs: [
      { id: 'CE-11', title: 'Task Scheduling in RTOS' },
      { id: 'CE-12', title: 'UDP Packet Streaming' },
      { id: 'CE-13', title: 'Watchdog Timer Implementation' }
    ],
    philosophy: {
      build: 'Deploy a multi-threaded system on a single core.',
      break: 'Simulate a memory leak to crash the heap.',
      debug: 'Use stack watermarking to monitor resource usage.',
      extend: 'Enable over-the-air (OTA) hardware updates.'
    }
  }
];

interface PathwayProps {
  onExplore?: () => void;
  onSelectLab?: (id: string) => void;
}

export const Pathway: React.FC<PathwayProps> = ({ onExplore, onSelectLab }) => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = STAGES[activeStageIdx];

  return (
    <section id="pathway" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Engineering Pathway</h2>
            <p className="text-lg text-slate-600">
              Click through the roadmap stages to explore introductory concepts, professional labs, and our core engineering philosophy.
            </p>
          </div>
          {onExplore && (
            <button 
              onClick={onExplore}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-lg shadow-blue-100"
            >
              Go to Full Lab Directory
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          )}
        </div>

        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden lg:block"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStageIdx(idx)}
                className={`p-6 rounded-2xl border transition-all text-left group ${
                  activeStageIdx === idx 
                  ? 'bg-slate-900 border-slate-900 shadow-xl' 
                  : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-mono font-bold text-sm transition-colors ${
                  activeStageIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  0{idx + 1}
                </div>
                <h3 className={`font-bold transition-colors ${activeStageIdx === idx ? 'text-white' : 'text-slate-900'}`}>
                  {stage.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 min-h-[500px]">
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Module Overview</h4>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeStage.title}</h3>
              <p className="text-slate-600 leading-relaxed">{activeStage.intro}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Core Concepts</h4>
              <ul className="space-y-3">
                {activeStage.topics.map((topic, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700">
                    <span className="text-blue-500 font-bold font-mono">/</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Hands-on Labs</h4>
            <div className="space-y-4">
              {activeStage.labs.map((lab, i) => (
                <button 
                  key={i} 
                  onClick={() => onSelectLab?.(lab.id)}
                  className="w-full flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left group"
                >
                  <div className="w-6 h-6 bg-slate-900 group-hover:bg-blue-600 rounded text-white flex items-center justify-center flex-shrink-0 text-[10px] transition-colors">
                    {lab.id}
                  </div>
                  <span className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">{lab.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Philosophy Track</h4>
            <div className="space-y-4">
              {[
                { label: 'Build', content: activeStage.philosophy.build, color: 'bg-green-500' },
                { label: 'Break', content: activeStage.philosophy.break, color: 'bg-red-500' },
                { label: 'Debug', content: activeStage.philosophy.debug, color: 'bg-blue-500' },
                { label: 'Extend', content: activeStage.philosophy.extend, color: 'bg-purple-500' }
              ].map((item, i) => (
                <div key={i} className="group flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full ${item.color} mt-1.5`}></div>
                    {i < 3 && <div className="w-px flex-grow bg-slate-200 my-1"></div>}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">{item.label}</h5>
                    <p className="text-xs text-slate-600 leading-snug">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
