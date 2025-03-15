'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaSun, FaWineGlassAlt, FaUmbrellaBeach, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Interface for Spanish expressions
interface SpanishExpressionProps {
  phrase: string;
  literal: string;
  meaning: string;
}

// Component for Spanish expressions with tooltips
const SpanishExpression = ({ phrase, literal, meaning }: SpanishExpressionProps) => (
  <div className="relative group inline-block">
    <span className="font-bold text-amber-600 dark:text-amber-400 cursor-help border-b border-dashed border-amber-600 dark:border-amber-400">
      {phrase}
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded shadow-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-amber-200 dark:border-amber-800">
      <p className="font-bold text-amber-600 dark:text-amber-400">{phrase}</p>
      <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
      <p className="text-gray-700 dark:text-gray-300">Means: &ldquo;{meaning}&rdquo;</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Málaga Images Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">🌊</span> Learn in Paradise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Málaga: The Best Place to <span className="text-blue-600">Learn Spanish</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why settle for a boring classroom when you can learn Spanish in one of the most beautiful cities in Spain? As they say in Spain, <SpanishExpression phrase="de tal palo, tal astilla" literal="from such stick, such splinter" meaning="like father, like son (the environment shapes your learning)" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                <p className="text-blue-800 font-medium">Image: Beaches of Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Stunning Beaches</h3>
                  <p className="text-white/90">Practice Spanish while enjoying more than 300 days of sunshine per year. <SpanishExpression phrase="Estar en la gloria" literal="To be in glory" meaning="To be in heaven/paradise" /></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                <p className="text-blue-800 font-medium">Image: Historic Center of Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Historic Center</h3>
                  <p className="text-white/90">Culture, gastronomy, and unique atmosphere in every corner of the city. <SpanishExpression phrase="De chuparse los dedos" literal="To lick your fingers" meaning="Delicious/mouthwatering" /></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                <p className="text-blue-800 font-medium">Image: The Alcazaba of Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Fascinating History</h3>
                  <p className="text-white/90">Learn Spanish surrounded by more than 3000 years of history. <SpanishExpression phrase="Saber de pe a pa" literal="To know from P to A" meaning="To know something inside out" /></p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center"
            >
              <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">4th</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Most visited city in Spain</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center"
            >
              <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaSun className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">320</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Days of sunshine per year</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center"
            >
              <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaWineGlassAlt className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">1000+</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Bars and restaurants</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center"
            >
              <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaUmbrellaBeach className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">16</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Beaches in the province</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Book Your Course in Málaga
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
