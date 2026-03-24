import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../constants';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-paper border-b border-ink/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center"
        >
          {STATS.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="px-10 py-3 text-center">
                <span className="font-serif text-2xl md:text-3xl text-ink block">{stat.value}</span>
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-ink/40 mt-1 block">
                  {stat.label}
                </span>
              </div>
              {idx < STATS.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-gold/25 mx-2" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
