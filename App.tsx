import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProblemSection from './components/ProblemSection';
import ImpactSection from './components/ImpactSection';
import NgoSection from './components/NgoSection';
import ActionSection from './components/ActionSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <ProblemSection />
        <ImpactSection />
        <NgoSection />
        <ActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;