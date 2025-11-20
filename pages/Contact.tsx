import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-10">
              Ready to take control of your financial future? Schedule a free 30-minute discovery call or drop us a message.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office</h3>
                  <p className="text-slate-600">Unit 402, Cyber Towers,<br/>Financial District, Hyderabad 500032</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-xs text-slate-500">Mon-Fri, 10am - 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">connect@neevwealth.in</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-brand-600" /> Direct Calendar Booking
              </h4>
              <p className="text-sm text-slate-600 mb-4">Skip the email tag. Book a slot directly on our calendar.</p>
              <button className="w-full bg-white border-2 border-brand-600 text-brand-700 font-bold py-3 rounded-lg hover:bg-brand-50 transition-colors">
                View Available Slots
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">I am interested in...</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
                    <option>Comprehensive Financial Planning</option>
                    <option>NRI Repatriation</option>
                    <option>Investment Review</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-all shadow-md disabled:opacity-70 disabled:cursor-wait"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};