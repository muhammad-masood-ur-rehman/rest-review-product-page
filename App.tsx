
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { COLORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-200" style={{ backgroundColor: COLORS.background }}>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        {/* <SocialProof /> */}
        {/* <UseCases /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
