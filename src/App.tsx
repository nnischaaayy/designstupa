/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { EditorialQuote } from './components/EditorialQuote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ErrorBoundary } from './components/ErrorBoundary';

const HomePage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Hero />
    <StatsBar />
    <Portfolio />
    <Services />
    <Process />
    <Testimonials />
    <EditorialQuote />
    <Contact />
  </motion.div>
);

// Placeholder pages for nav links (expand these in the full build)
const PortfolioPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-24 bg-paper"
  >
    <Portfolio />
  </motion.div>
);

const ContactPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 bg-white"
  >
    <Contact />
  </motion.div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-paper text-ink font-sans selection:bg-gold selection:text-white">
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
