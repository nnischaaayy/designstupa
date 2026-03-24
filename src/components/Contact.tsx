import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { submitLead } from '../services/firestoreService';
import { CONTACT_INFO } from '../constants';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.66 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  propertySize: z.string().optional(),
  message: z.string().min(10, 'Please write at least a sentence about your project'),
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
      setTimeout(() => setSubmitted(false), 6000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send enquiry. Please try again or WhatsApp us directly.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* Left — Info */}
        <div>
          <span className="text-gold text-[0.65rem] uppercase tracking-[0.5em] mb-4 block">
            Start Your Project
          </span>
          <h2 className="text-ink text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Start Your <span className="italic font-serif">Project</span>
          </h2>
          <p className="text-ink/50 text-base leading-relaxed max-w-md mb-14">
            Tell us about your space. We'll get back to you within 24 hours — no obligations, no sales pressure.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start space-x-4">
              <MapPin className="text-gold mt-1 shrink-0" size={18} />
              <div>
                <span className="text-[0.55rem] tracking-[0.3em] uppercase text-gold block mb-1">Studio</span>
                <p className="text-ink font-serif text-lg">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-gold mt-1 shrink-0" size={18} />
              <div>
                <span className="text-[0.55rem] tracking-[0.3em] uppercase text-gold block mb-1">Phone</span>
                <p className="text-ink font-serif text-lg">{CONTACT_INFO.phone1}</p>
                <p className="text-ink font-serif text-lg">{CONTACT_INFO.phone2}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-gold mt-1 shrink-0" size={18} />
              <div>
                <span className="text-[0.55rem] tracking-[0.3em] uppercase text-gold block mb-1">Email</span>
                <p className="text-ink font-serif text-lg">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1ebe5d] transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-[0.65rem] tracking-widest uppercase font-medium">Chat on WhatsApp</span>
          </a>
        </div>

        {/* Right — Form */}
        <div className="bg-paper p-8 md:p-12 rounded-sm shadow-sm relative overflow-hidden">
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-paper z-10 flex flex-col items-center justify-center text-center p-10"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-ink mb-4">Thank You</h3>
                <p className="text-ink/50 leading-relaxed text-sm max-w-xs">
                  Your enquiry has been received. Our design consultant will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[0.6rem] uppercase tracking-[0.3em] border-b border-ink/20 text-ink/40 hover:text-ink transition-colors pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Name</label>
                <input
                  {...register('name')}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 text-sm placeholder:text-ink/20"
                />
                {errors.name && <p className="text-red-400 text-[0.55rem]">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Phone</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="+91 98XXX XXXXX"
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 text-sm placeholder:text-ink/20"
                />
                {errors.phone && <p className="text-red-400 text-[0.55rem]">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 text-sm placeholder:text-ink/20"
              />
              {errors.email && <p className="text-red-400 text-[0.55rem]">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Project Type</label>
                <select
                  {...register('projectType')}
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 text-sm text-ink/70"
                >
                  <option value="">Select type</option>
                  <option value="Residential Interior">Residential Interior</option>
                  <option value="Commercial Interior">Commercial Interior</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Furniture Design">Furniture Design</option>
                  <option value="Full Renovation">Full Renovation</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-400 text-[0.55rem]">{errors.projectType.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Property Size</label>
                <select
                  {...register('propertySize')}
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 text-sm text-ink/70"
                >
                  <option value="">Select size</option>
                  <option value="Under 500 sqft">Under 500 sqft</option>
                  <option value="500–1000 sqft">500–1000 sqft</option>
                  <option value="1000–2000 sqft">1000–2000 sqft</option>
                  <option value="2000+ sqft">2000+ sqft</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.55rem] uppercase tracking-widest text-ink/40">Message</label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tell us about your space and what you're looking to achieve..."
                className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors duration-300 resize-none text-sm placeholder:text-ink/20"
              />
              {errors.message && <p className="text-red-400 text-[0.55rem]">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-paper py-5 rounded-sm uppercase tracking-[0.3em] text-[0.65rem] font-medium hover:bg-ink transition-all duration-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
