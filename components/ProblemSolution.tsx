
import React from 'react';
import { COLORS } from '../constants';
import { Frown, Smile, ArrowRight } from 'lucide-react';
import bagIcon from '../assets/icon.png';

const gapPainPoints = [
  'Scattered emails and text reviews',
  'Unorganized spreadsheets',
  'Guessing customer sentiment',
  'Lost opportunities for improvement',
];

const gapPromises = [
  'Centralized feedback automation',
  'Real-time sentiment scoring',
  'Actionable growth roadmaps',
  'Measurable ROI on every change',
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-[#fef8f0] overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#f4c07b] rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-12">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff7ed] rounded-full text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: COLORS.secondary }}>
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            Feedback Harmony
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.textDark }}>
          Know exactly what your guests are telling
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg" style={{ color: COLORS.textLight }}>
            Most teams drown in data; Review Bag lets you deliver insight-driven moves with structured visibility and charming visuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[32px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-[#f1e8de] flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-100">
                <Frown className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: COLORS.textLight }}>The messy reality</p>
                <h3 className="text-2xl font-semibold" style={{ color: COLORS.textDark }}>Scatter, guess, repeat</h3>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              {gapPainPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative p-10 rounded-[32px] bg-[#fef5ed] border border-transparent shadow-[0_25px_80px_rgba(196,106,13,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff,_#fef5ed)]" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#fff6ea] border border-[#f4c07b]">
                  <Smile className="w-6 h-6" style={{ color: COLORS.secondary }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: COLORS.textLight }}>The Review Bag way</p>
                  <h3 className="text-2xl font-semibold" style={{ color: COLORS.textDark }}>Organize with joy</h3>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-[#2b1f11]">
                {gapPromises.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.secondary }} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 items-center">
                <img src={bagIcon} alt="Bag icon" className="w-16 h-16" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: COLORS.textLight }}>Bag Highlights</p>
                  <p className="text-lg font-semibold" style={{ color: COLORS.textDark }}>Visual, calm, actionable dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
