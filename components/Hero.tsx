
import React from 'react';
import { COLORS } from '../constants';
import ProductMockup from './ProductMockup';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-x-clip overflow-y-visible">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-amber-100" style={{ color: COLORS.secondary }}>
            Feedback Intelligence for Growth
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6" style={{ color: COLORS.textDark }}>
            Bridging <span style={{ color: COLORS.secondary }}>Plate</span> to <span style={{ color: COLORS.primary }}>Progress</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed" style={{ color: COLORS.textLight }}>
            Stop letting valuable customer insights slip through the cracks. Review Bag gathers, analyzes, and visualizes your business feedback so you can focus on building what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button onClick={() => window.location.href = 'https://app.waddl.site/contact-us'} className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-white shadow-xl transition-all hover:brightness-110 hover:-translate-y-1" style={{ backgroundColor: COLORS.primary }}>
              Start for Free
            </button>
            <button onClick={() => window.location.href = 'https://app.waddl.site/contact-us'} className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold border-2 transition-all hover:bg-white" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
              Request Demo
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium" style={{ color: COLORS.textLight }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <span>Join 2,000+ businesses growing today.</span>
          </div>
        </div>

        <div className="flex-1 relative pb-12 lg:pb-16 min-w-0 overflow-visible w-full">
          <div className="relative z-10 overflow-visible">
            <ProductMockup />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -z-0" />
          <div
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl -z-0"
            style={{ backgroundColor: `${COLORS.primary}20` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
