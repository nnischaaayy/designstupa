/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

const HomePage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Hero />
    <Portfolio />
    <Contact />
  </motion.div>
);

const PortfolioPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-24 bg-paper"
  >
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-7xl font-light mb-12">Portfolio</h1>
      <Portfolio />
    </div>
  </motion.div>
);

const ContactPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 bg-ink"
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
        </div>
      </Router>
    </ErrorBoundary>
  );
}
