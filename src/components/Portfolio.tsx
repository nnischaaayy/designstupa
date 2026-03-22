import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { subscribeToProjects } from '../services/firestoreService';
import { MOCK_PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      setProjects(data.length > 0 ? data : MOCK_PROJECTS);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <span className="text-gold text-[0.7rem] uppercase tracking-[0.5em] mb-6 block">Our Portfolio</span>
            <h2 className="text-ink text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
              A collection of <br />
              <span className="italic">bespoke</span> interiors
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="text-[0.7rem] uppercase tracking-[0.3em] font-medium border-b border-ink pb-2 hover:text-gold hover:border-gold transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 rounded-2xl shadow-xl">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-paper text-[0.7rem] uppercase tracking-[0.4em] border border-paper/40 px-8 py-4 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gold text-[0.6rem] uppercase tracking-[0.3em] mb-2">{project.category}</span>
                <h3 className="text-ink text-2xl font-serif mb-2">{project.title}</h3>
                <span className="text-ink/40 text-[0.7rem] uppercase tracking-[0.2em]">{project.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
