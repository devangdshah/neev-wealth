import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Who We Are</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are a team of fiduciary advisors dedicated to bringing transparency to the Indian financial services industry.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Neev Wealth was founded with a singular mission: to provide investment advice that is 100% free from conflict of interest. In a market dominated by distributors selling products for commissions, we stand apart by sitting on the same side of the table as our clients.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that financial freedom is not just about high returns, but about clarity, discipline, and peace of mind. For our NRI clients, we bridge the gap between two worlds, simplifying the complex transition back to the Indian financial ecosystem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['SEBI Registered', 'Fee-Only Model', 'Fiduciary Standard', 'Data-Driven'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-600" size={20} />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-100 rounded-xl transform rotate-2"></div>
            <img 
              src="https://picsum.photos/600/800?random=2" 
              alt="Team Meeting" 
              className="relative rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet the Principal Advisor</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-sm">
            <img 
              src="https://picsum.photos/300/300?random=3" 
              alt="Founder" 
              className="w-48 h-48 rounded-full object-cover border-4 border-brand-50"
            />
            <div className="text-left">
              <h3 className="text-2xl font-serif font-bold text-slate-900">Arjun Mehta, CFP</h3>
              <p className="text-brand-600 font-medium mb-4">Founder & Principal Planner</p>
              <p className="text-slate-600 mb-4">
                Arjun has over 18 years of experience in wealth management across New York and Mumbai. He specializes in cross-border financial planning and is passionate about financial literacy.
              </p>
              <p className="text-sm text-slate-500">
                Education: MBA (Finance) - ISB Hyderabad | Certified Financial Planner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};