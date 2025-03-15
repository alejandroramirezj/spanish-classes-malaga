'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

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

// Reseñas reales proporcionadas por el usuario
const realReviews: GoogleReview[] = [
  {
    id: '1',
    author_name: 'Anónimo',
    profile_photo_url: '',
    rating: 5,
    text: 'Pasé buen tiempo en esta escuela aprendiendo español durante 6 meses. El ambiente de clase era muy bueno y divertido, por eso pude disfrutar del estudio de español sin dificultad encontrando con tanta gente de aquí. Nunca me arrepiento de estudiar en esta escuela ni me olvidaré de los recuerdos inolvidables. Antes de marcharme a mi país, dejo mi comentario en esta página para que vean la información y varias fotos de esta escuela.',
    time: Date.now() - 252288000000, // 8 años en milisegundos
    relative_time_description: 'Hace 8 años'
  },
  {
    id: '2',
    author_name: 'Marta',
    profile_photo_url: '',
    rating: 5,
    text: 'Actualmente estoy dando clases de inglés para sacarme la titulación B1, compaginándolo con mi trabajo. Horarios flexibles. Lo recomiendo 100%.',
    time: Date.now() - 220752000000, // 7 años en milisegundos
    relative_time_description: 'Hace 7 años'
  },
  {
    id: '3',
    author_name: 'Norman Nemitz',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia es una profesora fantástica y recomiendo encarecidamente su escuela de idiomas. Sin conocimientos previos, con la ayuda de Virginia, aprendí los conceptos básicos de este hermoso idioma en unas pocas semanas y me divertí mucho haciéndolo. Además de los conceptos básicos de gramática, lo principal es hablar el idioma con confianza y ahora puedo afirmar que puedo comunicarme sobre casi cualquier tema. Con su carácter cálido y su personalidad divertida, Virginia crea una atmósfera de bienestar al aprender un idioma tan diferente a lo que estás acostumbrado en otras escuelas de idiomas. Las clases en grupos reducidos o los cursos de idiomas individuales te permiten potenciar tus puntos fuertes personales y áreas de desarrollo a la hora de aprender idiomas, lo que a mí me ayudó mucho. En grupos pequeños os conocéis mucho mejor que en grupos grandes y podéis aprender unos de otros. Para aquellos que estén planeando un viaje de idiomas a Málaga, la escuela de idiomas de Virginia también es ideal, ya que alquila apartamentos a viajeros (de idiomas) en el corazón del casco antiguo de Málaga y en el mismo edificio. Para los viajeros de idiomas, ofrece un agradable programa de apoyo que les muestra la Málaga auténtica y les permite sumergirse en la cultura española/andaluza. Por todo ello le doy 5 estrellas a Virginia School en Málaga. ¡Gracias Virginia por todo!',
    time: Date.now() - 189216000000, // 6 años en milisegundos
    relative_time_description: 'Hace 6 años'
  },
  {
    id: '4',
    author_name: 'Michael Rafi',
    profile_photo_url: '',
    rating: 5,
    text: 'Recomiendo ALTAMENTE Virginia y esta escuela. Tomé clases privadas durante 2 horas al día, 4 días a la semana durante los dos meses que estuve visitando Málaga. Virginia adaptó las clases exactamente a lo que necesitaba y fue de GRAN ayuda. Cada día tomábamos un café juntos y hablábamos durante aproximadamente una hora, y luego, en la segunda hora, pasábamos a algunas lecciones del libro de trabajo. ¡Virginia es una persona maravillosa y realmente disfruté mi tiempo en la escuela! 5 estrellas!!',
    time: Date.now() - 157680000000, // 5 años en milisegundos
    relative_time_description: 'Hace 5 años'
  },
  {
    id: '5',
    author_name: 'Steve Noyce',
    profile_photo_url: '',
    rating: 5,
    text: 'Mi esposa y yo tomamos clases de conversación durante varias semanas este invierno con Virginia. Ella fue absolutamente fantástica. Realmente disfrutamos nuestro tiempo con ella y nos encantó escuchar sus historias. Es una mujer maravillosa con un sentido del humor estupendo y las horas hablando con ella pasaron muy rápido. Cuando volvamos a Málaga, sin duda volveremos a tomar clases con ella.',
    time: Date.now() - 126144000000, // 4 años en milisegundos
    relative_time_description: 'Hace 4 años'
  },
  {
    id: '6',
    author_name: 'Ruta Z.',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia es una maestra increíble, amigable, atenta y enseña desde el fondo de su corazón. Mis lecciones de español fueron divertidas y muy informativas, ya que como soy nuevo en el idioma, he aprendido mucho. La escuela está en el corazón de la ciudad y es fácil de recorrer, además es muy luminosa y te hace sentir bienvenido y feliz en todo momento. Muy agradecido por la oportunidad de ser su alumno, gracias por todo. ¡Muy recomendable! Me encanta la escuela Virginia ®',
    time: Date.now() - 157680000000, // 5 años en milisegundos
    relative_time_description: 'Hace 5 años'
  },
  {
    id: '7',
    author_name: 'Anónimo',
    profile_photo_url: '',
    rating: 5,
    text: 'Al principio me preocupé porque no había muchas reseñas sobre esta academia, pero ¡¡me gusta mucho!! Elegí mejorar mis habilidades de conversación y fue realmente útil poder hablar continuamente con el profesor, en lugar de tener un grupo de estudiantes reunidos y solo poder hablar un poco como en una escuela de idiomas normal. Me encanta poder experimentar la verdadera España comprando en el mercado con mi profesor todas las mañanas, dando un paseo por el puerto y desayunando en una cafetería de al lado. ¡¡Es la mejor academia para conversar!!',
    time: Date.now() - 189216000000, // 6 años en milisegundos
    relative_time_description: 'Hace 6 años'
  },
  {
    id: '8',
    author_name: 'Ahyeon Hwang',
    profile_photo_url: '',
    rating: 5,
    text: 'Hola a todos!! Vengo aquí para informárselo a mi encantadora profesora, mamá (en Málaga) y amiga!!! Ella es realmente una gran profesora de español. Mi español está mejorando a un ritmo sorprendente. A diferencia de otras academias en Málaga, nuestro tiempo es como una obra de teatro, una fiesta y una clase. Simplemente no puedo evitar recomendar esta escuela a todas las personas que quieran aprender español. Con ella, cada mañana podrás empezar con risas y sentirte fresco. Después de terminar la clase, siempre espero mañana para pasar mi precioso tiempo con ella. ¡¡Ah!! ¡Tienes que conocer este! Nuestra clase se compone de una excelente vista desde el balcón, lo que hace que la clase sea más eficiente, feliz y fresca. Acerca de la clase, toda nuestra conversación es material de aprendizaje, en otras palabras, tu forma de hablar será cada vez mejor sorprendentemente. Consideré muchas escuelas cuando elegí y recomiendo encarecidamente registrarse sin pensarlo más. ¡Si realmente quieres aprender español, debes venir aquí para conseguir un hablante nativo de español!',
    time: Date.now() - 189216000000, // 6 años en milisegundos
    relative_time_description: 'Hace 6 años'
  }
];

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
  const reviews = realReviews;
  const totalReviews = realReviews.length;

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
        </div>

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