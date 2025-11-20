import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, TrendingUp, Users } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem, Testimonial } from '../types';

const services: ServiceItem[] = [
  {
    title: "NRI Advisory",
    description: "Specialized financial planning for NRIs returning to India. We handle FEMA compliance, asset repatriation, and tax-efficient portfolio restructuring.",
    icon: Globe,
    details: ["FEMA Compliance Check", "RNOR Status Planning", "Global Asset Consolidation"]
  },
  {
    title: "Investment Coaching",
    description: "One-on-one coaching sessions to help you understand market dynamics. We don't just manage money; we teach you how to build wealth.",
    icon: TrendingUp,
    details: ["Portfolio Review", "Risk Profiling", "Goal Mapping"]
  },
  {
    title: "Fee-Only Planning",
    description: "Pure advice with zero conflict of interest. We do not sell products or earn commissions. Our only revenue comes from the fees you pay.",
    icon: ShieldCheck,
    details: ["Zero Commissions", "Unbiased Product Selection", "Fiduciary Standard"]
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Rajesh K.",
    role: "Software Architect",
    location: "Returned from Bay Area",
    text: "Moving back to Hyderabad after 15 years in the US was dauntless financially. Neev Wealth helped me restructure my 401k and Indian assets perfectly."
  },
  {
    name: "Dr. Priya S.",
    role: "Oncologist",
    location: "Mumbai",
    text: "I appreciate the fee-only model. Previously, my bank manager sold me useless insurance policies. Now I have a clean, goal-based portfolio."
  }
];

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-900 text-white pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gold-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-block bg-brand-800 border border-brand-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              SEBI Registered Investment Advisor
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Unbiased Advice for your <span className="text-brand-400">Financial Freedom</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We specialize in helping Indian families and returning NRIs navigate the complex world of investments with a pure fee-only model. No commissions, no hidden agendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg hover:shadow-brand-500/50">
                Book Discovery Call
              </Link>
              <Link to="/services" className="bg-transparent border border-slate-600 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-center transition-all">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://picsum.photos/800/600?grayscale&blur=1" 
                alt="Financial Planning Meeting" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="font-serif text-2xl font-bold">Trust is our currency.</p>
                  <p className="text-sm text-slate-300">Managing over ₹500 Cr in assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white relative -mt-16 z-10 max-w-7xl mx-auto rounded-xl shadow-xl border border-slate-100 mx-4 lg:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center divide-x divide-slate-100">
          <div>
            <p className="text-4xl font-bold text-brand-700 mb-1">500+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Families Advised</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-700 mb-1">₹500Cr+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Assets Under Advice</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-700 mb-1">15+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-700 mb-1">100%</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Conflict Free</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Holistic Wealth Solutions</h3>
          <p className="max-w-2xl mx-auto text-slate-600">
            Whether you are an NRI planning a return or a resident Indian looking to optimize your portfolio, we provide tailored strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Value Proposition / Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Why Fee-Only Matters?
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Most "advisors" in India are actually distributors. They earn a commission when you buy a product they recommend. This creates a conflict of interest.
              </p>
              <p className="text-slate-300 mb-8 text-lg">
                At Neev Wealth, we act as your <strong>Fiduciary</strong>. We charge a flat fee for our advice. We recommend direct plans of mutual funds which save you up to 1% annually in commissions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full text-green-400"><ShieldCheck /></div>
                  <span>Unbiased, data-driven recommendations</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full text-green-400"><Users /></div>
                  <span>Personalized 1:1 coaching sessions</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">The Difference</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Standard Agent</span>
                  <span className="text-red-400 font-bold">Commission Based</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Bank Relationship Manager</span>
                  <span className="text-red-400 font-bold">Sales Targets</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-brand-900/50 rounded-lg border border-brand-700">
                  <span className="text-white font-bold">Neev Wealth</span>
                  <span className="text-green-400 font-bold">100% Client Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-16 text-slate-900">Client Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
                <div className="text-6xl text-brand-200 font-serif absolute top-4 left-6">"</div>
                <p className="text-slate-700 text-lg italic mb-6 relative z-10 pt-4">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to build your financial foundation?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Book a 30-minute discovery call to see if we are the right fit for your financial journey.
          </p>
          <Link to="/contact" className="inline-block bg-brand-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all hover:shadow-xl hover:-translate-y-1">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};