
import React from 'react';
import { COLORS, USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.textDark }}>Designed for Visionary Brands</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
            Whether you're selling coffee or code, Review Bag turns your customers' words into your growth strategy.
          </p>
        </div>

        <div className="space-y-24">
          {USE_CASES.map((uc, idx) => (
            <div key={uc.id} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="inline-block p-1 rounded-lg bg-amber-50 mb-4">
                  <span className="text-xs font-bold uppercase px-3 py-1" style={{ color: COLORS.secondary }}>Use Case {idx + 1}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: COLORS.textDark }}>{uc.title}</h3>
                <div className="mb-6 p-6 rounded-2xl bg-gray-50 border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                  <p className="text-sm font-bold uppercase mb-2 text-gray-400">The Problem</p>
                  <p className="text-gray-600">{uc.scenario}</p>
                </div>
                <div className="p-6 rounded-2xl bg-amber-50 border-l-4" style={{ borderLeftColor: COLORS.secondary }}>
                  <p className="text-sm font-bold uppercase mb-2 text-amber-700">The Growth</p>
                  <p className="font-medium" style={{ color: COLORS.textDark }}>{uc.benefit}</p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <img src={uc.image} alt={uc.title} className="w-full h-auto rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
