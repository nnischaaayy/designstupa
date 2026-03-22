/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-beige/90 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif tracking-widest uppercase ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
          Design Stupa
        </div>
        
        <div className="hidden md:flex space-x-12">
          {['Projects', 'Studio', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled ? 'text-brand-ink' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          className={`md:hidden ${isScrolled ? 'text-brand-ink' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-beige p-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            {['Projects', 'Studio', 'Services', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-brand-ink text-xl font-serif tracking-widest uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Living Room" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif mb-6 leading-tight">
            Design Stupa
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-[0.3em] uppercase max-w-2xl mx-auto">
            Multidisciplinary Interior Architecture
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center space-x-4 text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-brand-ink transition-all group"
            >
              <span className="text-sm tracking-widest uppercase">Explore Portfolio</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase mb-4">Scroll to explore</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

const ProjectGallery = () => {
  const projects = [
    { title: "The Minimalist Penthouse", category: "Residential", img: "https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=800" },
    { title: "Sleek Modular Kitchen", category: "Kitchen Design", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
    { title: "South Delhi Modern Villa", category: "Architecture", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" },
    { title: "Boutique Office Space", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Serene Master Suite", category: "Interior", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800" },
    { title: "Contemporary Art Gallery", category: "Cultural", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="text-brand-gold text-xs tracking-[0.4em] uppercase mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">Our Portfolio</h2>
          </div>
          <p className="text-brand-ink/60 max-w-md mt-6 md:mt-0 leading-relaxed">
            A curated collection of spaces that blend functionality with high-end editorial aesthetics. Each project is a unique story of light and form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-2 block">{project.category}</span>
              <h3 className="text-2xl font-serif text-brand-ink group-hover:text-brand-gold transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Interior Architecture", desc: "Comprehensive spatial planning and structural design for luxury residences." },
    { title: "Bespoke Furniture", desc: "Custom-crafted pieces designed specifically for your space and lifestyle." },
    { title: "Commercial Design", desc: "Transforming workspaces into inspiring environments that reflect brand identity." },
    { title: "Project Management", desc: "End-to-end execution oversight ensuring every detail meets our premium standards." },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-brand-beige">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-gold text-xs tracking-[0.4em] uppercase mb-4 block">Expertise</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-ink mb-12">Multidisciplinary Approach</h2>
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif text-brand-ink">{service.title}</h3>
                  <ChevronRight className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-brand-ink/60 leading-relaxed border-b border-brand-ink/10 pb-8">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
              alt="Design Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 bg-white p-12 hidden md:block shadow-xl rounded-sm">
            <p className="font-serif text-3xl text-brand-ink italic">"Design is the silent ambassador of your brand."</p>
            <span className="text-brand-gold text-xs tracking-widest uppercase mt-4 block">— Paul Rand</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-ink text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif mb-8 tracking-widest uppercase">Design Stupa</h2>
            <p className="text-white/50 max-w-md leading-relaxed mb-12">
              Based in the heart of South Delhi, we create spaces that resonate with the soul. Our multidisciplinary team is dedicated to bringing your vision to life with precision and elegance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.4em] uppercase text-brand-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-gold" />
                <span>+91 98103 22053</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-gold" />
                <span>hello@designstupa.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-gold mt-1" />
                <span>Vasant Kunj, South Delhi<br />New Delhi 110070, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.4em] uppercase text-brand-gold mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Receive curated design inspiration and studio updates.</p>
            <form className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/30"
              />
              <button type="submit" className="text-brand-gold hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-white/30">
          <p>© 2026 Design Stupa Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <Services />
      
      {/* Editorial Quote Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold text-4xl font-serif mb-8 block">“</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink leading-snug italic">
              We don't just design interiors; we curate experiences that elevate the human spirit through the harmony of light, texture, and space.
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
