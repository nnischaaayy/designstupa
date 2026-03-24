import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-ink py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-gold text-[0.65rem] uppercase tracking-[0.5em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-paper text-5xl md:text-7xl font-light tracking-tight">
            How We <span className="italic font-serif">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-paper/10">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col px-8 md:px-12 py-12 md:py-0"
            >
              <span className="font-serif text-7xl md:text-8xl text-gold/20 leading-none mb-6 select-none">
                {step.num}
              </span>
              <h3 className="text-paper text-2xl font-serif mb-5">{step.title}</h3>
              <p className="text-paper/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
