
import React from 'react';
import { COLORS } from '../constants';
import iconImage from '../assets/icon.png';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative z-10 shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
        <div className="flex items-center justify-center gap-4 mb-8 mx-auto w-fit drop-shadow-lg">
          <img src={iconImage} alt="Review Bag" className="w-20 h-auto shrink-0" />
          <div className="text-left">
            <p className="text-2xl font-extrabold text-white leading-none tracking-wide" style={{ wordSpacing: '0.15em' }}>
              Review Bag
            </p>
            <p className="text-xs text-amber-100/80 mt-1 leading-tight tracking-tight" style={{ wordSpacing: '-0.09em' }}>
              Bridging Plate to Progress
            </p>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to bridge your plate to real progress?
        </h2>
        <p className="text-amber-100/80 text-lg mb-10 max-w-xl mx-auto">
          Join thousands of smart businesses who don't just collect reviews, they harvest growth. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button  onClick={() => window.location.href = 'https://app.waddl.site/contact-us'} className="w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold bg-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95" style={{ color: COLORS.primary }}>
            Get Started Now
          </button>
          <button  onClick={() => window.location.href = 'https://app.waddl.site/contact-us'} className="w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold border-2 border-white/30 text-white transition-all hover:bg-white/10">
            Book a Demo
          </button>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default FinalCTA;
