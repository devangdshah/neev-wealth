import React from 'react';
import { Globe, TrendingUp, FileText, PieChart, Briefcase, GraduationCap } from 'lucide-react';

export const Services: React.FC = () => {
  const detailedServices = [
    {
      icon: Globe,
      title: "NRI Returnee Planning",
      description: "A comprehensive service for Non-Resident Indians moving back to India. We handle the financial complexity so you can focus on the move.",
      features: [
        "Analysis of RNOR (Resident but Not Ordinarily Resident) tax status",
        "Repatriation of 401k/IRA/ISA funds to India efficiently",
        "Setting up NRE/NRO/Resident accounts",
        "FEMA compliance audit for existing assets"
      ]
    },
    {
      icon: PieChart,
      title: "Comprehensive Financial Planning",
      description: "A 360-degree roadmap for your financial life. We map your current resources to your future goals.",
      features: [
        "Detailed Cashflow Analysis",
        "Retirement Corpus Calculation",
        "Children's Education Funding Strategy",
        "Emergency Fund Planning"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic asset allocation across Equity, Debt, Gold, and Real Estate based on your risk profile.",
      features: [
        "Direct Plan Mutual Fund Recommendations (Zero Commission)",
        "Stock Portfolio Review",
        "Periodic Rebalancing",
        "Behavioral Coaching during market volatility"
      ]
    },
    {
      icon: FileText,
      title: "Tax Optimization",
      description: "Smart planning to minimize tax liability on your investment gains efficiently and legally.",
      features: [
        "Tax-harvesting strategies",
        "Capital Gains analysis",
        "Investment declaration planning",
        "Double Taxation Avoidance Agreement (DTAA) guidance"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Tailored solutions for complex financial lives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid gap-12">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="bg-brand-50 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-brand-100">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-900">{service.title}</h3>
                </div>
                <div className="p-8 md:w-2/3">
                  <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                  <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wide">What's Included:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pricing Model</h2>
          <p className="text-slate-600 mb-10">Transparency is our core value. We charge a fixed flat fee based on the complexity of your financial situation.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-xl p-8 hover:border-brand-400 transition-all">
              <h3 className="text-xl font-bold mb-2">Financial Plan</h3>
              <p className="text-3xl font-bold text-brand-700 mb-4">₹25,000 <span className="text-sm font-normal text-slate-500">one-time</span></p>
              <p className="text-sm text-slate-500">For comprehensive roadmap creation.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-8 bg-brand-50 border-brand-200 relative">
              <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Ongoing Advisory</h3>
              <p className="text-3xl font-bold text-brand-700 mb-4">₹15,000 <span className="text-sm font-normal text-slate-500">/ semi-annually</span></p>
              <p className="text-sm text-slate-500">For portfolio review and rebalancing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};