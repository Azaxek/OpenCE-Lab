import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { WhatIs } from './components/WhatIs';
import { Pathway } from './components/Pathway';
import { LabKit } from './components/LabKit';
import { Debugging } from './components/Debugging';
import { Founder } from './components/Founder';
import { Community } from './components/Community';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

// New "Page" Components
import { StartBuildingPage } from './pages/StartBuildingPage';
import { PathwayPage } from './pages/PathwayPage';
import { LabKitPage } from './pages/LabKitPage';
import { FounderPage } from './pages/FounderPage';
import { CommunityPage } from './pages/CommunityPage';
import { LabDetailPage } from './pages/LabDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectStoryPage } from './pages/ProjectStoryPage';

export type View = 'home' | 'pathway' | 'lab' | 'founder' | 'community' | 'start' | 'lab-detail' | 'contact' | 'project-story';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<View>('home');
  const [selectedLabId, setSelectedLabId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync state with URL path for SEO/Sitemap support
  useEffect(() => {
    const path = window.location.pathname.replace('/', '') as View;
    const validViews: View[] = ['pathway', 'lab', 'founder', 'community', 'start', 'contact'];
    if (validViews.includes(path)) {
      setView(path);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update URL when view changes (without full page reload)
  const handleSetView = (newView: View) => {
    if (newView !== 'lab-detail') setSelectedLabId(null);
    if (newView !== 'project-story') setSelectedProjectId(null);
    
    setView(newView);
    
    // Update browser history for clean URL appearance
    const path = newView === 'home' ? '/' : `/${newView}`;
    window.history.pushState({}, '', path);
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateToLab = (labId: string) => {
    setSelectedLabId(labId);
    setView('lab-detail');
    window.history.pushState({}, '', `/lab/${labId}`);
  };

  const navigateToProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setView('project-story');
    window.history.pushState({}, '', `/project/${projectId}`);
  };

  const renderView = () => {
    switch (view) {
      case 'pathway':
        return <PathwayPage onSelectLab={navigateToLab} />;
      case 'lab':
        return <LabKitPage />;
      case 'founder':
        return <FounderPage onConnect={() => handleSetView('contact')} />;
      case 'community':
        return <CommunityPage onConnect={() => handleSetView('contact')} onSelectProject={navigateToProject} />;
      case 'start':
        return <StartBuildingPage onSelectLab={navigateToLab} setView={handleSetView} />;
      case 'lab-detail':
        return <LabDetailPage labId={selectedLabId || 'CE-01'} onBack={() => handleSetView('pathway')} />;
      case 'contact':
        return <ContactPage onBack={() => handleSetView('home')} />;
      case 'project-story':
        return <ProjectStoryPage projectId={selectedProjectId || 'proj-01'} onBack={() => handleSetView('community')} />;
      default:
        return (
          <>
            <Hero onStart={() => handleSetView('start')} onExplore={() => handleSetView('pathway')} />
            <Stats />
            <Mission />
            <WhatIs />
            <Pathway onExplore={() => handleSetView('pathway')} onSelectLab={navigateToLab} />
            <LabKit onExplore={() => handleSetView('lab')} />
            <Debugging />
            <Founder onExplore={() => handleSetView('founder')} />
            <Community onExplore={() => handleSetView('community')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header scrolled={scrolled} currentView={view} setView={handleSetView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer setView={handleSetView} />
    </div>
  );
};

export default App;