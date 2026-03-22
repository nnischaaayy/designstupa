import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-paper/60 text-[0.7rem] uppercase tracking-[0.6em] mb-8 block">
              South Delhi's Premier Interior Studio
            </span>
            <h1 className="text-paper text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-12 tracking-tight">
              Crafting <br />
              <span className="italic font-serif">Luxury</span> Spaces
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="px-12 py-5 bg-paper text-ink text-[0.7rem] uppercase tracking-[0.3em] font-medium hover:bg-gold hover:text-paper transition-all duration-500 rounded-full">
                View Portfolio
              </button>
              <button className="px-12 py-5 border border-paper/20 text-paper text-[0.7rem] uppercase tracking-[0.3em] font-medium hover:bg-paper hover:text-ink transition-all duration-500 rounded-full">
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-paper/30" />
          <span className="text-paper/40 text-[0.6rem] uppercase tracking-[0.4em] vertical-text">
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  );
};
