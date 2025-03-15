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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Sección de imágenes de Málaga */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">🌊</span> Aprende en el paraíso
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Málaga: el mejor lugar para <span className="text-blue-600">aprender español</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Por qué conformarte con un aula aburrida cuando puedes aprender español en una de las ciudades más bellas de España?
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
                <p className="text-blue-800 font-medium">Imagen: Playas de Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Playas Impresionantes</h3>
                  <p className="text-white/90">Practica español mientras disfrutas de más de 300 días de sol al año.</p>
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
                <p className="text-blue-800 font-medium">Imagen: Centro histórico de Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Centro Histórico</h3>
                  <p className="text-white/90">Cultura, gastronomía y ambiente único en cada rincón de la ciudad.</p>
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
                <p className="text-blue-800 font-medium">Imagen: La Alcazaba de Málaga</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Historia Fascinante</h3>
                  <p className="text-white/90">Aprende español rodeado de más de 3000 años de historia.</p>
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
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">4ª</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ciudad más visitada de España</p>
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">Días de sol al año</p>
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">Bares y restaurantes</p>
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">Playas en la provincia</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Reserva tu curso en Málaga
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
