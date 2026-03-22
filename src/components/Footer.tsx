import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper py-24 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex flex-col mb-8">
              <span className="font-serif text-3xl tracking-widest uppercase font-light">Design Stupa</span>
              <span className="text-[0.6rem] tracking-[0.4em] uppercase opacity-60 ml-1">Premium Interiors</span>
            </Link>
            <p className="text-ink/60 text-sm leading-relaxed max-w-xs">
              A premium, multidisciplinary interior design studio based in South Delhi, specializing in luxury residential and commercial spaces.
            </p>
          </div>
          
          <div>
            <span className="text-gold text-[0.7rem] uppercase tracking-[0.4em] mb-8 block">Navigation</span>
            <ul className="space-y-4">
              {['Portfolio', 'Services', 'Blog', 'Contact', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-[0.7rem] uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-gold text-[0.7rem] uppercase tracking-[0.4em] mb-8 block">Services</span>
            <ul className="space-y-4">
              {['Residential Design', 'Commercial Interiors', 'Modular Kitchens', 'Office Spaces', 'Luxury Renovations'].map((item) => (
                <li key={item}>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ink/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-gold text-[0.7rem] uppercase tracking-[0.4em] mb-8 block">Contact</span>
            <div className="space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink/60">Greater Kailash II, South Delhi, India</p>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink/60">hello@designstupa.com</p>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink/60">+91 98765 43210</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-ink/5">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-ink/40 mb-4 md:mb-0">
            © 2026 Design Stupa. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {['Instagram', 'Pinterest', 'LinkedIn', 'Facebook'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.6rem] uppercase tracking-[0.3em] text-ink/40 hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
