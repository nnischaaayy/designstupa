import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';
import { getTestimonials } from '../services/firestoreService';
import { MOCK_TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials()
      .then((data) => setTestimonials(data.length > 0 ? data : MOCK_TESTIMONIALS))
      .catch(() => setTestimonials(MOCK_TESTIMONIALS));
  }, []);

  return (
    <section className="bg-paper py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-gold text-[0.65rem] uppercase tracking-[0.5em] mb-4 block">
            Client Stories
          </span>
          <h2 className="text-ink text-5xl md:text-7xl font-light tracking-tight">
            What Our <span className="italic font-serif">Clients</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="bg-white p-10 border-t-2 border-gold shadow-sm rounded-sm"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="font-serif text-ink text-xl italic leading-relaxed mb-8">
                "{review.content}"
              </p>

              <div className="flex items-center space-x-3">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase font-semibold text-ink">
                  {review.clientName}
                </span>
                {review.location && (
                  <>
                    <span className="w-4 h-px bg-gold" />
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-ink/40">
                      {review.location}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
