import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left — Service List */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold text-[0.65rem] uppercase tracking-[0.5em] mb-4 block">
            Expertise
          </span>
          <h2 className="text-ink text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-14">
            Multidisciplinary{' '}
            <span className="italic font-serif">Approach</span>
          </h2>

          <div className="space-y-10">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-ink text-xl font-serif">{service.title}</h3>
                  <ChevronRight
                    size={18}
                    className="text-gold opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
                <p className="text-ink/50 text-sm leading-relaxed border-b border-ink/8 pb-8">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image + Testimonial Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
              alt="Design Stupa — Design Process"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating client quote card */}
          <div className="absolute -bottom-10 -left-10 bg-paper p-8 hidden md:block shadow-xl rounded-sm max-w-xs border-l-2 border-gold">
            <p className="font-serif text-ink text-lg italic leading-snug mb-4">
              "Turned our bare flat into a home we're proud of. Every detail was thought through."
            </p>
            <span className="text-gold text-[0.55rem] tracking-widest uppercase">
              — Residential Client, Kalkaji
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
