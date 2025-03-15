'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Interfaz para las reseñas de Google
interface GoogleReview {
  id: string;
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

// Información para los bloques de contenido que reemplazan a las fotos
const contentBlocks = [
  {
    emoji: '🌊',
    title: 'Experiencias inmersivas',
    description: 'Inmersión total en la cultura española'
  },
  {
    emoji: '🗣️',
    title: 'Conversación práctica',
    description: 'Enfoque en hablar español desde el primer día'
  },
  {
    emoji: '📚',
    title: 'Métodos efectivos',
    description: 'Aprendizaje basado en situaciones reales'
  },
  {
    emoji: '🏙️',
    title: 'Málaga cultural',
    description: 'Descubre la historia y tradiciones locales'
  },
  {
    emoji: '🎭',
    title: 'Eventos sociales',
    description: 'Participa en actividades con otros estudiantes'
  },
  {
    emoji: '🎓',
    title: 'Certificaciones DELE',
    description: 'Preparación para exámenes oficiales'
  },
  {
    emoji: '✈️',
    title: 'Estudiar en España',
    description: 'La mejor forma de aprender español'
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalReviews, setTotalReviews] = useState<number>(0);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar las reseñas');
        }
        
        const data = await response.json();
        
        // Usamos todas las reseñas sin truncar el texto
        setReviews(data.reviews);
        setTotalReviews(data.total);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar reseñas de Google:', err);
        setError('No se pudieron cargar las reseñas. Mostrando reseñas de ejemplo.');
        setLoading(false);
        
        // Cargar reseñas de ejemplo en caso de error
        setReviews([
          {
            id: '1',
            author_name: 'Ana Schmidt',
            profile_photo_url: '',
            rating: 5,
            text: '"Llegué a Málaga sin saber nada de español. En 3 meses con Virginia, ¡ya puedo mantener conversaciones con locales! Su método es divertido y efectivo."',
            time: Date.now() - 7776000000, // 90 días atrás
            relative_time_description: 'hace 3 meses'
          },
          {
            id: '2',
            author_name: 'James Wilson',
            profile_photo_url: '',
            rating: 5,
            text: '"Las clases online con Virginia son fantásticas. Me encanta su enfoque práctico y cómo adapta todo a mi trabajo en el sector turístico. ¡Recomendado 100%!"',
            time: Date.now() - 2592000000, // 30 días atrás
            relative_time_description: 'hace 1 mes'
          },
          {
            id: '3',
            author_name: 'Sophie Dupont',
            profile_photo_url: '',
            rating: 5,
            text: '"Después de 6 meses de clases, aprobé el examen DELE B2 con una puntuación de 85/100. Virginia conoce perfectamente el formato del examen."',
            time: Date.now() - 1209600000, // 14 días atrás
            relative_time_description: 'hace 2 semanas'
          },
          {
            id: '4',
            author_name: 'Hiroshi Tanaka',
            profile_photo_url: '',
            rating: 5,
            text: '"Lo que más valoro es cómo Virginia adapta sus clases a mi ritmo y forma de aprender. Tiene mucha paciencia con la pronunciación."',
            time: Date.now() - 604800000, // 7 días atrás
            relative_time_description: 'hace 1 semana'
          }
        ]);
        setTotalReviews(8);
      }
    };

    fetchGoogleReviews();
  }, []);

  // Función para generar color de fondo aleatorio para cada avatar
  const getRandomBgColor = (name: string) => {
    const colors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-amber-100', 'bg-red-100', 'bg-pink-100'];
    // Usamos el nombre como semilla para generar un color consistente para el mismo autor
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Función para generar color de texto que contraste con el fondo
  const getTextColor = (name: string) => {
    const colors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-amber-600', 'text-red-600', 'text-pink-600'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Nueva sección de bloques de contenido */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">🎉</span> Aprende español en Málaga
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
              Experiencias reales en Málaga
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre cómo nuestros estudiantes disfrutan aprendiendo español mientras se sumergen en la cultura española y crean recuerdos inolvidables
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contentBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ 
                  height: index === 0 ? '300px' : '180px',
                }}
                className={`relative overflow-hidden rounded-xl shadow-lg ${
                  index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 from-amber-500 to-amber-300' : 
                  index % 6 === 1 ? 'from-blue-500 to-blue-300' :
                  index % 6 === 2 ? 'from-green-500 to-green-300' :
                  index % 6 === 3 ? 'from-purple-500 to-purple-300' :
                  index % 6 === 4 ? 'from-red-500 to-red-300' :
                  'from-pink-500 to-pink-300'
                } bg-gradient-to-br`}
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-white">
                  <div className="text-4xl mb-3">{block.emoji}</div>
                  <h3 className={`${index === 0 ? 'text-2xl' : 'text-lg'} font-bold text-center`}>
                    {block.title}
                  </h3>
                  {index === 0 ? (
                    <p className="text-white/90 mt-2 text-center">{block.description}</p>
                  ) : (
                    <p className="text-white/80 mt-1 text-sm text-center">{block.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Sección de testimonios existente */}
        <div className="text-center mb-8">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
            <span className="mr-1">❤️</span> Reseñas verificadas de Google
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="flex justify-center">
            <Link href="https://g.co/kgs/GAXQqPf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              <FaGoogle className="mr-2" /> 5.0 en Google ({totalReviews} reseñas)
            </Link>
          </div>
          
          {error && (
            <div className="mt-4 text-amber-600 dark:text-amber-400">
              {error}
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className={`relative w-12 h-12 rounded-full mr-3 overflow-hidden ${getRandomBgColor(review.author_name)} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-lg font-bold ${getTextColor(review.author_name)}`}>
                      {review.author_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{review.author_name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {review.relative_time_description}
                    </div>
                  </div>
                </div>
                
                <div className="relative flex-grow">
                  <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 dark:text-blue-900 opacity-50 w-8 h-8" />
                  <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-6 pt-2 text-sm">
                    {review.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="p-6 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
            <h3 className="text-xl font-bold mb-3">¿Quieres resultados similares?</h3>
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Reserva tu primera clase gratis
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mt-10 text-center">
          <div className="p-4">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Progreso rápido</h4>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Hablar desde el día 1</h4>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Resultados garantizados</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 