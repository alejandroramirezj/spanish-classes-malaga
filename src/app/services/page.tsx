import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserGraduate, FaUserFriends, FaLaptop, FaBookOpen, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Nuestras Clases | Spanish Classes Malaga',
  description: 'Descubre nuestras clases de español personalizadas. Ofrecemos clases individuales, en pareja, online y para fines específicos.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nuestras Clases de Español
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Ofrecemos una variedad de opciones para adaptarnos a tus necesidades, objetivos y disponibilidad. Todas nuestras clases son personalizadas y flexibles.
            </p>
          </div>
        </div>
      </section>
      
      {/* Clases Individuales */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/individual-class.jpg" 
                    alt="Clases individuales de español" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserGraduate className="text-amber-600 text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases Individuales
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Las clases individuales ofrecen la máxima personalización y atención. Son perfectas para quienes buscan progresar rápidamente o tienen necesidades específicas.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Atención completamente personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Progreso más rápido y eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Horarios flexibles adaptados a ti</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Enfoque en tus áreas de dificultad</span>
                  </li>
                </ul>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Precio: Desde 25€/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos disponibles para packs de 5, 10 o 20 clases</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-amber-600 text-white font-medium px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Reservar clase individual
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clases en Pareja */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/pair-class.jpg" 
                    alt="Clases de español en pareja" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserFriends className="text-amber-600 text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases en Pareja
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Aprende con tu pareja, amigo o compañero de trabajo del mismo nivel. Las clases en pareja combinan la atención personalizada con la interacción entre estudiantes.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Práctica de conversación con otro estudiante</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Aprendizaje colaborativo y motivador</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Más económico que las clases individuales</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Ideal para parejas o amigos que viajan juntos</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Precio: Desde 40€/hora (20€ por persona)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos disponibles para packs de 5, 10 o 20 clases</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-amber-600 text-white font-medium px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Reservar clase en pareja
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clases Online */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/online-class.jpg" 
                    alt="Clases de español online" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaLaptop className="text-amber-600 text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases Online
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Aprende español desde cualquier parte del mundo con nuestras clases online. La misma calidad y atención personalizada que en las clases presenciales.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Flexibilidad total de horarios y ubicación</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Materiales digitales de alta calidad</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Plataforma interactiva y fácil de usar</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Seguimiento continuo de tu progreso</span>
                  </li>
                </ul>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Precio: Desde 20€/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos disponibles para packs de 5, 10 o 20 clases</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-amber-600 text-white font-medium px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Reservar clase online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Español para Fines Específicos */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/specialized-class.jpg" 
                    alt="Español para fines específicos" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-amber-600 text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Español para Fines Específicos
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Cursos especializados para necesidades profesionales o académicas específicas. Aprende el vocabulario y las estructuras relevantes para tu campo.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Español para negocios y entornos corporativos</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Español médico y para profesionales de la salud</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Español para turismo y hostelería</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Preparación para exámenes oficiales (DELE, SIELE)</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Precio: Desde 30€/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos disponibles para packs de 5, 10 o 20 clases</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-amber-600 text-white font-medium px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Consultar disponibilidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿No estás seguro de qué opción es la mejor para ti?</h2>
            <p className="text-xl mb-8">
              Contacta con nosotros para una consulta gratuita. Te ayudaremos a encontrar la opción perfecta para tus necesidades, nivel y objetivos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-amber-600 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contactar ahora
              </Link>
              <Link 
                href="/booking" 
                className="border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Ver disponibilidad
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 