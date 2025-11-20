import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { askFinancialAdvisor } from '../services/geminiService';

export const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Namaste! I'm Neev AI. Ask me about investing basics, FEMA regulations for NRIs, or how fee-only advice works.",
      sender: ChatSender.BOT,
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await askFinancialAdvisor(userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-600 animate-bounce-slow'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <>
            <MessageSquare className="text-white" size={24} />
            <span className="bg-white text-brand-700 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">Ask AI</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-700 to-brand-600 p-4 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles className="text-white" size={18} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Neev AI Assistant</h3>
              <p className="text-brand-100 text-xs">Powered by Gemini</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === ChatSender.USER
                      ? 'bg-brand-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-500 p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-xs flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about taxes, mutual funds..."
                className="flex-grow text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-brand-600 text-white p-3 rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};