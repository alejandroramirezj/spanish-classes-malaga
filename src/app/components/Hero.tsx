'use client';

import { motion } from 'framer-motion';
import { FaInfoCircle, FaGraduationCap, FaUsers, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

// Componente para mostrar expresiones españolas con tooltip
const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <span className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-yellow-400 decoration-2 cursor-pointer font-bold text-yellow-500 dark:text-yellow-400 flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-yellow-500/10 hover:bg-yellow-500/20"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression}
        <FaInfoCircle className="text-xs text-yellow-500 dark:text-yellow-400 animate-pulse group-hover:animate-none" />
      </span>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-yellow-400/20"
        >
          <div className="relative">
            <p className="font-bold text-yellow-500 dark:text-yellow-400">{expression}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </span>
  );
};

// Datos de expresiones españolas para el juego
const spanishExpressions = [
  { expression: "hacer de tripas corazón", literal: "to make heart from guts", meaning: "to pluck up courage" },
  { expression: "estar como una cabra", literal: "to be like a goat", meaning: "to be crazy" },
  { expression: "ser pan comido", literal: "to be eaten bread", meaning: "to be a piece of cake" },
  { expression: "dar en el clavo", literal: "to hit the nail", meaning: "to hit the nail on the head" },
  { expression: "ponerse las pilas", literal: "to put in the batteries", meaning: "to get one's act together" },
  { expression: "tomar el pelo", literal: "to take the hair", meaning: "to pull someone's leg" }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExpressionIndex, setCurrentExpressionIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Cambiar expresión cada 5 segundos
    const intervalId = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentExpressionIndex((prev) => (prev + 1) % spanishExpressions.length);
        setIsChanging(false);
      }, 300);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Fondo sutil con patrón */}
      <div className="absolute inset-0 bg-gray-50 pattern-dots opacity-5 z-0"></div>
      
      {/* Efectos de iluminación sutiles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] z-0"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto principal con mejor contraste */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            {/* Badge premium - más conciso */}
            <div className="inline-flex items-center mb-6 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold">
              <span className="mr-2 text-accent">✓</span>
              +1,000 students endorse us
            </div>
            
            {/* Título principal - mantenido por ser importante */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Learn Spanish <span className="relative inline-block">
                <span className="relative z-10 text-primary">Like a Native</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 242.456 -1.86658 355 9" stroke="#FFB930" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              <span className="text-accent">From Week One</span>
            </h1>
            
            {/* Subtítulo - reducido y más directo */}
            <div className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
              Learn to communicate in Spanish from day one, not just memorizing rules.
              <SpanishExpression expression="más vale tarde que nunca" literal="better late than never" meaning="it&apos;s never too late to start" />.
            </div>

            {/* Lista de beneficios - simplificada */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Real practice:</strong> Order your first &ldquo;tinto de verano&rdquo; like a local.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Relaxed environment:</strong> Learn without fear of <SpanishExpression expression="meter la pata" literal="putting in the leg" meaning="making mistakes" />.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Cultural immersion:</strong> Experience Málaga while learning Spanish.
                </div>
              </li>
            </ul>

            {/* CTA principal con botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/booking" 
                className="btn-plan btn-plan-primary"
              >
                Book Your Free Trial Class
                <FaArrowRight />
              </Link>
              
              <Link 
                href="/about" 
                className="btn-plan btn-plan-secondary"
              >
                Meet Virginia
                <FaArrowRight />
              </Link>
            </div>

            {/* Credenciales simplificadas */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="stat-item text-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <FaGraduationCap className="text-primary text-2xl mb-2 mx-auto" />
                <p className="text-lg font-bold text-gray-900">Master in ELE & DELE</p>
                <p className="text-gray-600">Certified Teacher</p>
              </div>
              
              <div className="stat-item text-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <FaUsers className="text-primary text-2xl mb-2 mx-auto" />
                <p className="text-lg font-bold text-gray-900">+500 Students</p>
                <p className="text-gray-600">Happy Learners</p>
              </div>
            </div>
          </motion.div>
          
          {/* Columna derecha - Social proof y juego de expresiones */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Social Proof al estilo Marc Lou */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">What our students say</h3>
                
                {/* Métricas principales - valores mantenidos pero textos reducidos */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-gray-600 text-sm">Students</div>
                  </div>
                  <div className="bg-accent/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-accent">4.9/5</div>
                    <div className="text-gray-600 text-sm">Rating</div>
                  </div>
                </div>
                
                {/* Mini testimonio - simplificado */}
                <div className="bg-gray-50 p-4 rounded-xl mb-4 relative">
                  <div className="absolute top-2 right-2 text-accent">★★★★★</div>
                  <p className="text-gray-700 italic text-sm mb-2">
                    &ldquo;I spoke Spanish from the first class. Amazing method!&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-500">JM</div>
                    <div>
                      <div className="text-sm font-medium">John Miller</div>
                      <div className="text-xs text-gray-500">USA 🇺🇸</div>
                    </div>
                  </div>
                </div>

                {/* Países de origen - simplificado */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">🇺🇸</span>
                  <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">🇬🇧</span>
                  <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">🇩🇪</span>
                  <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">🇫🇷</span>
                  <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">+20</span>
                </div>
              </div>
            </div>
            
            {/* Juego de expresiones - título simplificado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative p-6 shadow-lg rounded-2xl bg-white border border-gray-200"
            >
              <div className="absolute top-4 right-4 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-bold border border-accent/20">
                #{currentExpressionIndex + 1}
              </div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Spanish Expressions</h3>
              <div className={`transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
                <SpanishExpression 
                  expression={spanishExpressions[currentExpressionIndex].expression}
                  literal={spanishExpressions[currentExpressionIndex].literal}
                  meaning={spanishExpressions[currentExpressionIndex].meaning}
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button 
                  onClick={() => {
                    setIsChanging(true);
                    setTimeout(() => {
                      setCurrentExpressionIndex((prev) => 
                        prev === 0 ? spanishExpressions.length - 1 : prev - 1
                      );
                      setIsChanging(false);
                    }, 300);
                  }}
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Previous
                </button>
                <div className="flex space-x-1">
                  {spanishExpressions.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        if (index !== currentExpressionIndex) {
                          setIsChanging(true);
                          setTimeout(() => {
                            setCurrentExpressionIndex(index);
                            setIsChanging(false);
                          }, 300);
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentExpressionIndex ? 'bg-accent w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Expression ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => {
                    setIsChanging(true);
                    setTimeout(() => {
                      setCurrentExpressionIndex((prev) => (prev + 1) % spanishExpressions.length);
                      setIsChanging(false);
                    }, 300);
                  }}
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating button for mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Link 
          href="/booking" 
          className="btn-plan btn-plan-primary"
        >
          Free Trial <FaArrowRight />
        </Link>
      </div>
      
      {/* Ondas decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-100"></path>
        </svg>
      </div>
    </section>
  );
} 