
import React from 'react';
import { COLORS, LOGO_URL } from '../constants';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import logoImage from '../assets/logo.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
        <div className="col-span-2">
          <img src={logoImage} alt="Review Bag" className="h-10 w-auto mb-6" />
          <p className="max-w-xs text-sm mb-6" style={{ color: COLORS.textLight }}>
            The all-in-one feedback intelligence platform that transforms raw customer data into actionable business progress.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors" style={{ color: COLORS.primary }}><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors" style={{ color: COLORS.primary }}><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors" style={{ color: COLORS.primary }}><Github className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors" style={{ color: COLORS.primary }}><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6" style={{ color: COLORS.textDark }}>Product</h4>
          <ul className="space-y-4 text-sm" style={{ color: COLORS.textLight }}>
            <li><a href="#" className="hover:text-amber-600">Features</a></li>
            <li><a href="#" className="hover:text-amber-600">Integrations</a></li>
            <li><a href="#" className="hover:text-amber-600">Pricing</a></li>
            <li><a href="#" className="hover:text-amber-600">API Docs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6" style={{ color: COLORS.textDark }}>Company</h4>
          <ul className="space-y-4 text-sm" style={{ color: COLORS.textLight }}>
            <li><a href="#" className="hover:text-amber-600">About Us</a></li>
            <li><a href="#" className="hover:text-amber-600">Careers</a></li>
            <li><a href="#" className="hover:text-amber-600">Blog</a></li>
            <li><a href="#" className="hover:text-amber-600">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6" style={{ color: COLORS.textDark }}>Resources</h4>
          <ul className="space-y-4 text-sm" style={{ color: COLORS.textLight }}>
            <li><a href="#" className="hover:text-amber-600">Support</a></li>
            <li><a href="#" className="hover:text-amber-600">Success Stories</a></li>
            <li><a href="#" className="hover:text-amber-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-600">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm" style={{ color: COLORS.textLight }}>
        <p>© 2025 Devlution Technology. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-amber-600">Privacy</a>
          <a href="#" className="hover:text-amber-600">Cookies</a>
          <a href="#" className="hover:text-amber-600">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
