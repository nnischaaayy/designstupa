import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { subscribeToProjects } from '../services/firestoreService';
import { MOCK_PROJECTS } from '../constants';

const ALL_CATEGORIES = ['All', 'Residential', 'Commercial', 'Architecture', 'Modular Kitchen'];

export const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      setProjects(data.length > 0 ? data : MOCK_PROJECTS);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center bg-paper">
        <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section id="projects" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <span className="text-gold text-[0.65rem] uppercase tracking-[0.5em] mb-4 block">
              Selected Works
            </span>
            <h2 className="text-ink text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
              Our{' '}
              <span className="italic font-serif">Portfolio</span>
            </h2>
          </div>
          <p className="text-ink/50 max-w-xs text-sm leading-relaxed">
            From South Delhi residences to Gurugram corporate offices — every space is designed around the people who use it.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[0.6rem] tracking-[0.2em] uppercase px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-ink text-paper border-ink'
                  : 'border-ink/15 text-ink/50 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm shadow-md">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-paper text-[0.6rem] uppercase tracking-[0.4em] border border-paper/40 px-6 py-3 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
              <span className="text-gold text-[0.55rem] uppercase tracking-[0.3em] mb-2 block">
                {project.category} · {project.location}
              </span>
              <h3 className="text-ink text-xl font-serif group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-ink/40 text-xs mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-ink hover:text-gold transition-colors duration-300 group"
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase font-medium">
              Have a project in mind?
            </span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
