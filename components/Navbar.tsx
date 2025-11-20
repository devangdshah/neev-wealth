import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-700 text-white p-2 rounded-lg group-hover:bg-brand-800 transition-colors">
              <TrendingUp size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-brand-900 leading-none">Neev Wealth</span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase">Fee Only Advisor</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === item.path ? 'text-brand-700 font-bold' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-800 transition-all shadow-md hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-brand-700 text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-brand-800"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};