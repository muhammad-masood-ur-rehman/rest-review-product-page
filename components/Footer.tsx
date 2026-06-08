
import React from 'react';
import { COLORS } from '../constants';
import logoImage from '../assets/icon.png';
import waddlLogo from '../assets/waddl.png';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
          <div className="flex items-center gap-4 sm:gap-6 max-w-xl">
            <img
              src={logoImage}
              alt="Review Bag"
              className="h-20 sm:h-24 w-auto shrink-0 object-contain"
            />
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
              The all-in-one feedback intelligence platform that transforms raw customer data into actionable business progress.
            </p>
          </div>

          <a
            href="https://app.waddl.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 shrink-0 self-start sm:self-center hover:opacity-80 transition-opacity"
          >
            <img
              src={waddlLogo}
              alt="Waddl"
              className="h-11 w-11 object-contain"
            />
            <span className="text-2xl font-bold tracking-tight" style={{ color: COLORS.textDark }}>
              Waddl
            </span>
          </a>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        style={{ color: COLORS.textLight }}
      >
        <p>© 2026 Waddl. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-amber-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Cookies</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
