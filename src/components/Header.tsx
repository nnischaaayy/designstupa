import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-widest uppercase font-light">Design Stupa</span>
            <span className="text-[0.6rem] tracking-[0.4em] uppercase opacity-60 ml-1">Premium Interiors</span>
          </Link>
          
          <nav className="hidden md:flex space-x-12">
            {['Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-[0.7rem] uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu toggle could go here */}
            <button className="text-ink">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
