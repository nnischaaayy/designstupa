import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#') && isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur-lg shadow-sm border-b border-ink/5 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <span
            className={`font-serif text-2xl tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? 'text-ink' : 'text-paper'
            }`}
          >
            Design Stupa
          </span>
          <span
            className={`text-[0.55rem] tracking-[0.4em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-ink/40' : 'text-paper/50'
            }`}
          >
            Premium Interiors
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold cursor-pointer ${
                isScrolled ? 'text-ink' : 'text-paper'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="bg-gold text-paper text-[0.6rem] tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-ink transition-all duration-300 cursor-pointer"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-ink' : 'text-paper'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-paper border-b border-ink/10 px-6 py-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-ink text-xl font-serif tracking-widest uppercase cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="bg-gold text-paper text-center py-4 rounded-full uppercase tracking-widest text-xs cursor-pointer"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
