'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Videos', href: '#videos' },
    { name: 'Follow Us', href: '#follow' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div 
        className="max-w-7xl mx-auto px-6 flex items-center justify-between relative"
      >
        <Link href="#home" className="flex items-center gap-3 group/logo relative px-4 py-2 -ml-4 rounded-full transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-white/10 overflow-hidden hover:shadow-[0_0_30px_rgba(255,45,85,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 animate-[pulse_2s_ease-in-out_infinite] pointer-events-none"></div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(255,45,85,0.5)] group-hover/logo:scale-110 group-hover/logo:bg-white group-hover/logo:text-primary transition-all duration-300 relative z-10">
            DSE
          </div>
          <span className="font-semibold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-[length:200%_auto] animate-[text-gradient_3s_ease_infinite] drop-shadow-[0_0_10px_rgba(255,45,85,0.3)] group-hover/logo:drop-shadow-[0_0_15px_rgba(255,45,85,0.6)] transition-all duration-300 relative z-10">
            Dramatic <span className="text-white group-hover/logo:text-pink-400 transition-colors duration-300">Sarang</span> Edit
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`text-sm font-medium transition-colors relative group ${activeSection === link.href ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#videos" 
            onClick={() => setActiveSection('#search')}
            className={`px-5 py-2 rounded-full border transition-all text-xs uppercase tracking-widest font-bold ${activeSection === '#search' ? 'border-primary text-white bg-primary/10' : 'border-white/10 hover:border-primary/50 text-white/70 hover:text-white'}`}
          >
            Search
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-gray border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block text-lg font-medium transition-colors ${activeSection === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
