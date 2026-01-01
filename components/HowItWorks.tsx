
import React, { useEffect, useMemo, useState } from 'react';
import { COLORS, STEPS } from '../constants';

const howItWorksImages = [
  {
    title: 'Collect',
    src: 'https://media.istockphoto.com/id/1495413484/photo/customer-at-a-restaurant-rating-his-experience-on-a-mobile-app.jpg?s=612x612&w=0&k=20&c=mfo_pGSd9lWZHLgqOSOX6ds3ti_RnYelchSRqh5GV8g=',
  },
  {
    title: 'Analyze',
    src: 'https://media.istockphoto.com/id/841180016/photo/the-experts-at-operating-a-successful-coffee-shop.jpg?s=612x612&w=0&k=20&c=xcEgQvoHDuCmRIEtVE6iVNU8abrMT8dO-uULpH4RCPU=',
  },
  {
    title: 'Grow',
    src: 'https://media.istockphoto.com/id/1162546952/photo/portrait-of-smiling-confident-businessman-in-busy-office.jpg?s=612x612&w=0&k=20&c=fl_HmL3a9cJpJFxx84E7HF8UwJo8bgB1Ad55iSqA2v8=',
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorksImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeImage = useMemo(() => howItWorksImages[activeStep], [activeStep]);

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-[#fff9f3] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-[#fef5ec]" />
      <div className="max-w-6xl mx-auto relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="text-center lg:text-left">
          <p
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff6e2] rounded-full uppercase tracking-[0.4em] text-[0.65rem]"
            style={{ color: COLORS.secondary }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            Guided Journey
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: COLORS.textDark }}>
            Three ritual steps from feedback to progress
          </h2>
          <p className="mt-4 max-w-3xl text-lg" style={{ color: COLORS.textLight }}>
            We choreograph a confident flow so every piece of guest feedback becomes a deliberate action.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="rounded-[40px] shadow-[0_35px_90px_rgba(15,23,42,0.25)] object-cover w-full h-[280px] transition-all duration-700"
            />
        
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={step.id}
                className={`relative rounded-[32px] ${
                  isActive
                    ? 'border-2 border-amber-300 bg-white shadow-[0_30px_90px_rgba(253,186,116,0.35)]'
                    : 'border border-transparent bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)]'
                } p-8 transition-all duration-500 backdrop-blur`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold uppercase tracking-[0.4em]" style={{ color: COLORS.secondary }}>
                    0{step.id}
                  </span>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full border border-[#fbe3c5]" style={{ color: COLORS.primary }}>
                    Ritual
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.textDark }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
