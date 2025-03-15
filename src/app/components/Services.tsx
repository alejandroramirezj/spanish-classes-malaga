'use client';

import { motion } from 'framer-motion';
import { FaUserFriends, FaUserGraduate, FaLaptop, FaBookOpen, FaCheck, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const servicesList = [
  {
    id: 1,
    title: 'Clases Individuales',
    emoji: '👨‍🏫',
    description: 'Atención 100% personalizada para avanzar rápidamente.',
    icon: <FaUserGraduate className="h-8 w-8 text-blue-600" />,
    price: '25€',
    period: 'hora',
    popular: false,
    details: [
      'Programa adaptado a tus necesidades',
      'Avance 3 veces más rápido',
      'Horarios flexibles',
      'Materiales personalizados incluidos'
    ]
  },
  {
    id: 2,
    title: 'Plan Intensivo',
    emoji: '🔥',
    description: 'Aprende español en tiempo récord con sesiones intensivas.',
    icon: <FaBookOpen className="h-8 w-8 text-blue-600" />,
    price: '299€',
    period: 'mes',
    popular: true,
    details: [
      '3 clases de 90 min. por semana',
      'Acceso a la plataforma online',
      'Práctica con nativos',
      'Progreso garantizado o devolvemos tu dinero'
    ]
  },
  {
    id: 3,
    title: 'Clases en Pareja',
    emoji: '👫',
    description: 'Ahorra compartiendo la experiencia con un amigo.',
    icon: <FaUserFriends className="h-8 w-8 text-blue-600" />,
    price: '40€',
    period: 'hora',
    popular: false,
    details: [
      'Dinámica de conversación real',
      '20€ por persona',
      'Aprendizaje colaborativo',
      'Competición saludable'
    ]
  },
  {
    id: 4,
    title: 'Español Online',
    emoji: '💻',
    description: 'Aprende desde cualquier lugar con clases virtuales efectivas.',
    icon: <FaLaptop className="h-8 w-8 text-blue-600" />,
    price: '20€',
    period: 'hora',
    popular: false,
    details: [
      'Plataforma interactiva',
      'Grabación de las sesiones',
      'Material digital incluido',
      'Sin límites geográficos'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
            <span className="mr-1">💰</span> Planes que se ajustan a tu presupuesto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Escoge el plan perfecto para ti
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus necesidades y comienza a hablar español desde la primera clase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border ${service.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-200 dark:border-gray-700 shadow-xl'} relative`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-1.5 text-center text-sm font-semibold">
                  Más popular 🌟
                </div>
              )}
              
              <div className="p-6 pt-8">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 min-h-[40px]">{service.description}</p>
                </div>
                
                <div className="text-center my-6">
                  <div className="flex items-end justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1 mb-1">/{service.period}</span>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/booking"
                  className={`w-full py-3 px-4 rounded-xl transition-all flex items-center justify-center font-semibold ${
                    service.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {service.popular ? 'Empieza ahora' : 'Reservar'} 
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿No sabes qué plan elegir?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Agenda una llamada de 15 minutos para analizar tu nivel y recomendarte el plan perfecto para tus objetivos.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
          >
            Llamada gratuita de 15 minutos
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-gray-200 dark:border-gray-700 rounded-full py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>Si no avanzas en 30 días, te devolvemos tu dinero</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 