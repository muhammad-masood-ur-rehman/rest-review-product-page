
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';
import iconImage from '../assets/icon.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={iconImage} alt="Review Bag" className="h-16 w-auto" />
          <span className="text-xl font-bold text-amber-600">Review Bag</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-semibold hover:text-amber-600 transition-colors" style={{ color: COLORS.textDark }}>Features</a>
          <a href="#how-it-works" className="text-sm font-semibold hover:text-amber-600 transition-colors" style={{ color: COLORS.textDark }}>How it Works</a>
          {/* <a href="#use-cases" className="text-sm font-semibold hover:text-amber-600 transition-colors" style={{ color: COLORS.textDark }}>Use Cases</a> */}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.location.href = 'https://app.waddl.site/contact-us'}
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-lg transition-transform hover:scale-105" 
            style={{ backgroundColor: COLORS.primary }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
