export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'NRI' | 'Fees';
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  location: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}