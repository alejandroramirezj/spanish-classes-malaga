'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Ana Schmidt',
    country: '🇩🇪 Alemania',
    image: '/student1.jpg',
    text: '"Llegué a Málaga sin saber nada de español. En 3 meses con Virginia, ¡ya puedo mantener conversaciones con locales! Su método es divertido y efectivo."',
    rating: 5,
    achievement: 'Nivel A2 a B1 en 3 meses'
  },
  {
    id: 2,
    name: 'James Wilson',
    country: '🇬🇧 Reino Unido',
    image: '/student2.jpg',
    text: '"Las clases online con Virginia son fantásticas. Me encanta su enfoque práctico y cómo adapta todo a mi trabajo en el sector turístico. ¡Recomendado 100%!"',
    rating: 5,
    achievement: 'Consiguió trabajo en hotel español'
  },
  {
    id: 3,
    name: 'Sophie Dupont',
    country: '🇫🇷 Francia',
    image: '/student3.jpg',
    text: '"Como estudiante de Erasmus, necesitaba mejorar mi español rápidamente. Virginia me ayudó a preparar mis presentaciones universitarias. ¡Aprobé con sobresaliente!"',
    rating: 5,
    achievement: 'Sobresaliente en universidad española'
  },
  {
    id: 4,
    name: 'Lars Johansson',
    country: '🇸🇪 Suecia',
    image: '/student4.jpg',
    text: '"Después de probar varias academias, encontré el método perfecto con Virginia. Su enfoque en conversación práctica me ayudó a sentirme cómodo hablando desde el primer día."',
    rating: 5,
    achievement: 'Habla con fluidez después de 6 meses'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-yellow-400 w-6 h-6" />
            ))}
          </div>
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
            <span className="mr-1">❤️</span> 100+ estudiantes satisfechos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Lo que dicen mis estudiantes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Ellos ya están disfrutando de hablar español. ¿Serás el próximo?
          </p>
          
          <div className="flex justify-center">
            <Link href="https://g.page/r/XXXXXXXXXXXX/review" target="_blank" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              <FaGoogle className="mr-2" /> 4.9 en Google (43 reseñas)
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl relative"
            >
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 shadow-lg">
                {testimonial.country}
              </div>
              
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 dark:text-blue-900 opacity-50 w-10 h-10" />
                <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-6 pt-2">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-4">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center">
                  <span className="mr-2">🏆</span>
                  {testimonial.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-8 bg-blue-600 rounded-2xl text-white shadow-2xl shadow-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">¿Quieres resultados similares?</h3>
            <p className="mb-6">
              Mis estudiantes consiguen hablar español más rápido gracias a mi método práctico y personalizado.
            </p>
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Reserva tu primera clase gratis
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Progreso rápido</h4>
            <p className="text-gray-600 dark:text-gray-300">
              El 90% de mis estudiantes sube un nivel en menos de 3 meses
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hablar desde el día 1</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Método conversacional que te hace ganar confianza rápidamente
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Resultados garantizados</h4>
            <p className="text-gray-600 dark:text-gray-300">
              O te devuelvo el 100% del dinero, sin preguntas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 