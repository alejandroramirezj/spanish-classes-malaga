import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserGraduate, FaUserFriends, FaLaptop, FaBookOpen, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Clases | Spanish Classes Malaga',
  description: 'Descubre nuestras clases de español personalizadas: individuales, en pareja, online y para fines específicos.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nuestras Clases
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Opciones adaptadas a tus necesidades y objetivos. Todas nuestras clases son personalizadas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Individual Classes */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-primary/10 h-64 flex items-center justify-center">
                  <p className="text-primary font-medium">Clases individuales</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserGraduate className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases Individuales
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Máxima personalización y atención para un progreso rápido y eficaz.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Progreso eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Horarios flexibles</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Materiales incluidos</span>
                  </li>
                </ul>
                
                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Desde €25/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos en bonos de 5, 10 o 20 clases</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Reservar Clase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Paired Classes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/pair-class.jpg" 
                    alt="Spanish classes for pairs" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserFriends className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases en Pareja
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Aprende con tu pareja o amigo del mismo nivel. Combina atención personalizada con interacción.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Práctica de conversación</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Aprendizaje colaborativo</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Más económico</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Ideal para viajeros</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">€40/hora (€20 por persona)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos disponibles en bonos</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Reservar Clase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Online Classes */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/online-class.jpg" 
                    alt="Online Spanish classes" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaLaptop className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Clases Online
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Aprende español desde cualquier lugar con la misma calidad y atención personalizada.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Flexibilidad total</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Materiales digitales</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Plataforma interactiva</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Seguimiento continuo</span>
                  </li>
                </ul>
                
                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Desde €20/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos en bonos</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Reservar Clase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spanish for Specific Purposes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/specialized-class.jpg" 
                    alt="Spanish for specific purposes" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Español para Fines Específicos
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Cursos especializados para necesidades profesionales o académicas específicas.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Español de negocios</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Español para turismo</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Español médico</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Español académico</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Desde €30/hora</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Consulta por presupuesto personalizado</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Solicitar Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional services */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Servicios Adicionales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Preparación DELE</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Preparación especializada para exámenes DELE oficiales. Incluye práctica con exámenes anteriores.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Desde €28/hora</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Club de Conversación</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Sesiones grupales enfocadas en la práctica de conversación con diferentes temas cada semana.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">€15/sesión (90 min)</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Actividades Culturales</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tours por Málaga, noches de tapas y visitas para practicar español en contextos reales.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Según actividad</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Español para Niños</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Clases divertidas adaptadas para niños con juegos, canciones y actividades interactivas.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Desde €22/hora</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="btn-plan btn-plan-primary"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 