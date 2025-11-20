import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What does 'Fee-Only' mean?",
    answer: "Fee-only means we are compensated solely by you, the client. We do not accept commissions, referral fees, or hidden kickbacks from mutual fund houses or insurance companies. This ensures our advice is 100% in your best interest.",
    category: "General"
  },
  {
    question: "I am an NRI returning to India. When should I contact you?",
    answer: "Ideally, you should contact us 6-12 months before your move. This allows us to plan your tax residency status (RNOR), liquidate assets efficiently in your current country, and set up the necessary NRE/NRO accounts before you land.",
    category: "NRI"
  },
  {
    question: "Do you execute the trades for me?",
    answer: "As a SEBI Registered Investment Advisor (RIA), we provide the advice and recommendations. You will execute the transactions through your own demat/bank accounts. This ensures you retain full control and custody of your assets at all times. We guide you through the process.",
    category: "General"
  },
  {
    question: "Is there a minimum portfolio size?",
    answer: "We generally work best with clients who have investable assets above ₹25 Lakhs or a monthly surplus of ₹50,000+, as this allows for meaningful diversification and value from our fee structure. However, we offer a one-time consultation for those starting out.",
    category: "Fees"
  },
  {
    question: "Can I invest in US stocks from India?",
    answer: "Yes, under the Liberalized Remittance Scheme (LRS), resident Indians can remit up to $250,000 per financial year for investments abroad. We can help structure this as part of your global diversification strategy.",
    category: "General"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600">Common queries about our services and philosophy.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-200 ${openIndex === index ? 'border-brand-500 bg-brand-50/30' : 'border-slate-200 hover:border-brand-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-600 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-2xl text-center">
          <p className="font-semibold text-slate-900 mb-2">Still have questions?</p>
          <p className="text-slate-600 mb-6">Use our AI Assistant in the bottom right corner or book a call.</p>
          <a href="#/contact" className="text-brand-600 font-bold hover:underline">Contact Support</a>
        </div>
      </div>
    </div>
  );
};