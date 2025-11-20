import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { AIAdvisor } from './components/AIAdvisor';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen text-slate-800 font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIAdvisor />
      </div>
    </HashRouter>
  );
};

export default App;