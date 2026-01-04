
import React from 'react';
import { View } from '../App';

interface HeaderProps {
  scrolled: boolean;
  currentView: View;
  setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, currentView, setView }) => {
  const navItems: { id: View; label: string }[] = [
    { id: 'pathway', label: 'Pathway' },
    { id: 'lab', label: 'Lab Kit' },
    { id: 'founder', label: 'Founder' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' },
  ];

  const isDarkMode = currentView === 'contact' || currentView === 'lab-detail';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? (isDarkMode && !scrolled ? 'bg-slate-900/90' : 'bg-white/90') + ' backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setView('home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <span className="text-white font-bold text-xs">CE</span>
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isDarkMode && !scrolled ? 'text-white' : 'text-slate-900'}`}>OpenCE Lab</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)} 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${currentView === item.id ? 'text-blue-600' : (isDarkMode && !scrolled ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setView('start')}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all shadow-sm ${isDarkMode && !scrolled ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
          >
            Start Building
          </button>
        </nav>
      </div>
    </header>
  );
};
