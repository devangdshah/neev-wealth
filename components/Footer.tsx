import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white font-serif text-2xl font-bold mb-4">Neev Wealth</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Empowering Indian families and returning NRIs with unbiased, fee-only financial advice. Building your financial foundation on trust and transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Our Services</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Specialties</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">NRI Repatriation Planning</span></li>
              <li><span className="text-slate-400">Direct Equity Advisory</span></li>
              <li><span className="text-slate-400">Retirement Planning</span></li>
              <li><span className="text-slate-400">Tax Optimization</span></li>
              <li><span className="text-slate-400">One-on-One Coaching</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-brand-500" />
                <span>Unit 402, Financial District,<br />Hyderabad, India 500032</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500" />
                <span>connect@neevwealth.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-center">
          <p className="mb-2">
            SEBI Registered Investment Advisor (RIA) - INA000000000. 
          </p>
          <p>
            Investments in securities market are subject to market risks. Read all the related documents carefully before investing. 
            Past performance is not indicative of future returns.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Neev Wealth Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};