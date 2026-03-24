import React from 'react';
import { motion } from 'motion/react';

export const EditorialQuote: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold text-5xl font-serif block mb-6 leading-none">"</span>
          <h2 className="text-ink text-3xl md:text-5xl font-serif font-light italic leading-snug">
            Every space we touch is a conversation between the people who live in it and the world outside.
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-10 mb-6" />
          <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">
            — Design Stupa Studio
          </span>
        </motion.div>
      </div>
    </section>
  );
};
