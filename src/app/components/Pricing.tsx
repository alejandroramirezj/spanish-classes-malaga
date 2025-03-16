'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight, FaRegTimesCircle } from 'react-icons/fa';
import Link from 'next/link';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  featured: boolean;
  features: string[];
  nonFeatures?: string[];
  ctaText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'individual',
    name: 'Individual',
    price: '25',
    unit: 'hora',
    description: 'Progreso personalizado',
    featured: false,
    features: [
      'Atención personalizada',
      'Progreso rápido',
      'Horarios flexibles',
      'Materiales incluidos'
    ],
    ctaText: 'Reservar'
  },
  {
    id: 'intensive',
    name: 'Intensivo',
    price: '299',
    unit: 'mes',
    description: 'Resultados en tiempo récord',
    featured: true,
    features: [
      '3 clases de 90 min/semana',
      'Plataforma online',
      'Práctica con nativos',
      'Garantía de progreso'
    ],
    ctaText: 'Empezar'
  },
  {
    id: 'parejas',
    name: 'Parejas',
    price: '40',
    unit: 'hora',
    description: 'Aprendizaje compartido',
    featured: false,
    features: [
      'Conversación real',
      '€20 por persona',
      'Aprendizaje colaborativo',
      'Motivación mutua'
    ],
    ctaText: 'Reservar'
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo moderno estilo Marc Lou */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark z-0"></div>
      
      {/* Círculo decorativo */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-[80px] z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Planes adaptados a ti
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="title-marc"
          >
            Elige tu Plan Ideal
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="subtitle-marc"
          >
            Empieza a hablar español desde tu primera clase
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-8 mb-12"
          >
            <div className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-md inline-flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Pago por clase
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                  isYearly 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Bono 10 clases
                <span className="ml-2 bg-accent text-accent-dark text-xs px-2 py-0.5 rounded-full">-15%</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden relative ${
                plan.featured 
                  ? 'ring-2 ring-accent shadow-2xl transform md:-translate-y-4 z-10 bg-white dark:bg-gray-800' 
                  : 'bg-white/80 backdrop-blur dark:bg-gray-800/80'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-accent text-gray-900 font-medium text-xs px-3 py-1 rounded-bl-lg">
                  Más popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[44px]">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">€{isYearly ? Number(plan.price) * 8.5 : plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/{plan.unit}</span>
                  {isYearly && plan.unit === 'hora' && (
                    <span className="ml-2 text-xs text-accent">Ahorra 15%</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.nonFeatures?.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <FaRegTimesCircle className="mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/booking" 
                  className={`btn-plan ${
                    plan.featured
                      ? 'btn-plan-primary'
                      : 'btn-plan-secondary'
                  }`}
                >
                  {plan.ctaText}
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center card-marc shine bg-accent/5"
        >
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">¿No estás seguro de qué plan elegir?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Programa una llamada de 15 minutos para analizar tu nivel y recomendarte el plan perfecto para tus objetivos.
          </p>
          <Link 
            href="/contact" 
            className="btn-marc btn-marc-primary inline-flex items-center"
          >
            Consulta gratuita de 15 minutos
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-gray-200 dark:border-gray-700 rounded-full py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>Si no progresas en 30 días, te devolvemos el dinero</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 