
import React from 'react';
import { COLORS, TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: COLORS.secondary }}>Trusted Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['Stripe', 'Airbnb', 'HubSpot', 'Shopify', 'Notion'].map(brand => (
              <span key={brand} className="text-2xl font-black text-gray-900">{brand}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 rounded-3xl bg-white shadow-sm border border-gray-100 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xl italic mb-8 leading-relaxed" style={{ color: COLORS.textDark }}>"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-amber-100" />
                <div>
                  <h4 className="font-bold" style={{ color: COLORS.textDark }}>{t.name}</h4>
                  <p className="text-sm" style={{ color: COLORS.textLight }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
