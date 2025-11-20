import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group h-full flex flex-col">
      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      <ul className="space-y-2 mb-8">
        {service.details.slice(0, 3).map((detail, idx) => (
          <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
            {detail}
          </li>
        ))}
      </ul>
      <Link 
        to="/services" 
        className="inline-flex items-center text-brand-700 font-semibold text-sm hover:gap-2 transition-all"
      >
        Learn More <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};