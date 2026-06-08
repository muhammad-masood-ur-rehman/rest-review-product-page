
import React from 'react';
import { COLORS, FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-gradient-to-b from-[#fffdf8] via-white to-[#fef5ec] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-14 -right-8 w-36 h-36 bg-[#fddc9d]/60 rounded-full blur-[60px]" />
        <div className="absolute bottom-10 -left-10 w-48 h-48 bg-[#f4b36b]/40 rounded-full blur-[70px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff5e3] rounded-full text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: COLORS.secondary }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.textDark }}>
              Powerful features for profitable progress
            </h2>
            <p className="text-lg" style={{ color: COLORS.textLight }}>
              Review Bag isn’t just a container; it’s a refinery that turns customer voice into beautiful, actionable insight.
            </p>
          </div>
          <button
            onClick={() => window.location.href = 'https://app.waddl.site/contact-us'}
            className="self-start text-sm font-bold flex items-center gap-2 transition-colors hover:text-amber-600"
            style={{ color: COLORS.primary, marginTop: '70px' }}
          >
            Experience Now <span className="transition-transform group-hover:translate-x-px">→</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-24px]">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-[32px] bg-white/80 border border-transparent shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition hover:border-amber-100 hover:shadow-[0_25px_90px_rgba(15,23,42,0.15)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,156,18,0.12),_rgba(255,255,255,0))]" />
              <div className="relative p-8 flex flex-col gap-4 h-full">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-50 text-amber-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: COLORS.textDark }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: COLORS.textLight }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
