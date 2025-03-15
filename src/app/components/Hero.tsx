'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 to-blue-900/90 z-0">
        <div className="absolute inset-0 bg-[url('/malaga-view.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white dark:text-gray-900 fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      {/* Ciudad de Málaga silueta */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10 text-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full fill-current">
          <path d="M0,90 L50,90 L60,70 L70,90 L80,80 L100,80 L120,50 L130,60 L150,60 L160,40 L170,50 L190,50 L200,70 L220,70 L230,40 L240,50 L260,50 L280,20 L300,50 L320,30 L340,70 L360,40 L380,60 L400,30 L420,70 L440,50 L460,60 L480,30 L500,60 L520,40 L540,50 L550,30 L560,40 L580,20 L600,60 L620,40 L640,50 L650,30 L660,40 L680,30 L700,70 L720,40 L740,60 L760,40 L780,70 L800,60 L820,70 L840,50 L860,70 L880,60 L900,70 L920,40 L940,70 L960,50 L970,60 L980,30 L1000,60 L1020,50 L1040,70 L1060,40 L1080,60 L1100,50 L1120,70 L1140,60 L1160,70 L1180,50 L1200,70 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 text-center lg:text-left lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-white text-sm font-medium backdrop-blur-sm">
                  🗣️ Aprende español en la Costa del Sol
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Habla español en <span className="text-yellow-300">tiempo récord</span> con clases personalizadas
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                Sin libros aburridos. Sin gramática tediosa. Aprenderás español hablando español desde el primer día en el <span className="text-yellow-300 font-semibold">paraíso de España</span>.
              </p>
              
              <div className="space-y-4 mb-8 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-white text-left">Método <span className="font-semibold">conversacional</span> para hablar desde el primer día</p>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-white text-left">Clases <span className="font-semibold">100% adaptadas</span> a tus necesidades y objetivos</p>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-white text-left">Flexibilidad de horarios y <span className="font-semibold">sin matrícula</span></p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/booking" 
                  className="px-8 py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-blue-50 transform hover:scale-105"
                >
                  Reservar primera clase gratis
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-blue-600/30 text-white rounded-xl text-lg font-semibold backdrop-blur-sm hover:bg-blue-600/50 transition-all"
                >
                  Consultar precios
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-5/12 mt-12 lg:mt-0"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-2xl relative overflow-hidden border border-white/20">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-400/20 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-400/20 rounded-full"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">¿Cansado de estudiar sin resultados?</h3>
                <p className="text-blue-100">Reserva tu primera clase gratuita hoy mismo</p>
              </div>
              
              <div className="bg-blue-700/50 p-5 rounded-xl mb-6">
                <div className="flex items-center text-white mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xl">⭐</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">4.9/5</span> en Google - Más de 40 reseñas de estudiantes satisfechos
                  </p>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xl">🔥</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">+500 estudiantes</span> han logrado hablar español con fluidez
                  </p>
                </div>
              </div>
              
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-white text-sm">
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
                  <span>Últimas 3 plazas disponibles para junio</span>
                </div>
              </div>
              
              <div className="absolute top-3 right-3">
                <div className="bg-yellow-400 text-blue-900 text-xs font-bold rounded-full px-3 py-1 shadow-lg transform rotate-3">
                  100% Satisfacción
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 