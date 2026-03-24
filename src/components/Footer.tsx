import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.66 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col mb-8">
              <span className="font-serif text-3xl tracking-widest uppercase font-light text-paper">
                Design Stupa
              </span>
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-paper/30 mt-1">
                Premium Interiors
              </span>
            </Link>
            <p className="text-paper/40 text-sm leading-relaxed max-w-sm mb-10">
              A young, multidisciplinary interior design and architecture studio based in South Delhi. We create spaces that resonate — residential, commercial, and everything in between.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-5">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 hover:text-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-gold text-[0.6rem] uppercase tracking-[0.4em] mb-8 block">
              Quick Links
            </span>
            <ul className="space-y-4">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/40 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-gold text-[0.6rem] uppercase tracking-[0.4em] mb-8 block">
              Contact
            </span>
            <ul className="space-y-5 text-paper/50">
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-[0.65rem] leading-relaxed">
                  L2/167-B, DDA Alaknanda,<br />
                  Kalkaji, New Delhi — 110019
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={14} className="text-gold shrink-0" />
                <span className="text-[0.65rem]">
                  {CONTACT_INFO.phone1}<br />{CONTACT_INFO.phone2}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={14} className="text-gold shrink-0" />
                <span className="text-[0.65rem]">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-paper/20">
            © 2026 Design Stupa Studio. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[0.55rem] tracking-[0.3em] uppercase text-paper/20 hover:text-paper/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[0.55rem] tracking-[0.3em] uppercase text-paper/20 hover:text-paper/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
