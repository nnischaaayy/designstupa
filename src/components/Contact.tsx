import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { submitLead } from '../services/firestoreService';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  projectType: z.string().min(1, 'Project type is required'),
  propertySize: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitLead(data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send inquiry. Please try again.');
    }
  };

  return (
    <section className="py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-gold text-[0.7rem] uppercase tracking-[0.5em] mb-6 block">Contact Us</span>
            <h2 className="text-paper text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-12">
              Let's create your <br />
              <span className="italic font-serif">dream</span> space
            </h2>
            <p className="text-paper/60 text-lg mb-12 max-w-md leading-relaxed">
              We specialize in luxury residential and commercial interiors in South Delhi and beyond.
              Share your vision with us, and let's build something extraordinary.
            </p>
            
            <div className="space-y-8">
              <div>
                <span className="text-paper/40 text-[0.6rem] uppercase tracking-[0.4em] block mb-2">Our Studio</span>
                <p className="text-paper text-lg font-serif">Greater Kailash II, South Delhi, India</p>
              </div>
              <div>
                <span className="text-paper/40 text-[0.6rem] uppercase tracking-[0.4em] block mb-2">Inquiries</span>
                <p className="text-paper text-lg font-serif">hello@designstupa.com</p>
                <p className="text-paper text-lg font-serif">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          <div className="bg-paper text-ink p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-paper z-10 p-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Thank You</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Your inquiry has been received. Our design consultant will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] font-medium border-b border-ink pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.6rem] uppercase tracking-[0.2em] block mb-2 opacity-60">Full Name</label>
                  <input
                    {...register('name')}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-[0.6rem] mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="text-[0.6rem] uppercase tracking-[0.2em] block mb-2 opacity-60">Email Address</label>
                  <input
                    {...register('email')}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-[0.6rem] mt-1">{errors.email.message}</span>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.6rem] uppercase tracking-[0.2em] block mb-2 opacity-60">Phone Number</label>
                  <input
                    {...register('phone')}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span className="text-red-500 text-[0.6rem] mt-1">{errors.phone.message}</span>}
                </div>
                <div>
                  <label className="text-[0.6rem] uppercase tracking-[0.2em] block mb-2 opacity-60">Project Type</label>
                  <select
                    {...register('projectType')}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="">Select Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Office">Office</option>
                  </select>
                  {errors.projectType && <span className="text-red-500 text-[0.6rem] mt-1">{errors.projectType.message}</span>}
                </div>
              </div>
              
              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] block mb-2 opacity-60">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <span className="text-red-500 text-[0.6rem] mt-1">{errors.message.message}</span>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-ink text-paper text-[0.7rem] uppercase tracking-[0.3em] font-medium hover:bg-gold transition-all duration-500 rounded-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
