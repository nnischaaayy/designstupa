import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Hero Image with Ken Burns zoom-out */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920"
          alt="Design Stupa — Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay — subtle, lets photo do the talking */}
        <div className="absolute inset-0 bg-black/38" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <span className="text-paper/60 text-[0.65rem] uppercase tracking-[0.6em] mb-8 block">
            South Delhi's Premier Interior Studio
          </span>

          {/* Title */}
          <h1 className="text-paper text-5xl md:text-7xl font-serif font-light leading-[1.05] tracking-tight mb-6">
            Design Stupa
          </h1>

          {/* Tagline */}
          <p className="text-paper/80 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-14">
            Bringing Life to Every Room
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => handleScroll('#projects')}
              className="inline-flex items-center space-x-3 text-paper border border-paper/30 px-8 py-4 rounded-full hover:bg-paper hover:text-ink transition-all duration-300 group"
            >
              <span className="text-[0.65rem] tracking-widest uppercase">Explore Portfolio</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center space-x-3 bg-gold text-paper px-8 py-4 rounded-full hover:bg-paper hover:text-ink transition-all duration-300"
            >
              <span className="text-[0.65rem] tracking-widest uppercase">Get Free Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-paper/40"
      >
        <span className="text-[0.55rem] tracking-[0.5em] uppercase mb-4">Scroll to explore</span>
        <div className="w-px h-12 bg-paper/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-4 bg-paper"
          />
        </div>
      </motion.div>
    </section>
  );
};
