import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaGraduationCap, FaBook, FaUserFriends, FaGlobe } from 'react-icons/fa';

export const metadata = {
  title: 'Sobre Virginia | Spanish Classes Malaga',
  description: 'Conoce a Virginia, profesora nativa de español con más de 10 años de experiencia enseñando a estudiantes de todo el mundo.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Sobre Virginia
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/virginia-profile.jpg" 
                    alt="Virginia - Profesora de español" 
                    width={600} 
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-amber-600">
                  ¡Hola! Soy Virginia
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Profesora nativa de español con más de 10 años de experiencia enseñando a estudiantes de todo el mundo. Mi pasión es ayudar a las personas a comunicarse en español de forma efectiva y natural.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Nací y crecí en Málaga, una hermosa ciudad costera en el sur de España. Estudié Filología Hispánica en la Universidad de Málaga y tengo un Máster en Enseñanza de Español como Lengua Extranjera.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Durante mi carrera, he tenido el privilegio de enseñar a estudiantes de más de 30 países diferentes, adaptando mi método a las necesidades específicas de cada uno.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-amber-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Formación Académica</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Licenciatura en Filología Hispánica - Universidad de Málaga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Máster en Enseñanza de Español como Lengua Extranjera - Universidad de Salamanca</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Certificado de Aptitud Pedagógica (CAP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Certificación DELE (Examinadora oficial)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaBook className="text-amber-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Metodología</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Mi enfoque de enseñanza es comunicativo y centrado en el estudiante. Creo que aprender un idioma debe ser:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Práctico y basado en situaciones reales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Divertido y motivador</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Adaptado a tus intereses y necesidades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Integrado con elementos culturales</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                Experiencia Profesional
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Academia de Idiomas Málaga | 2015 - Presente</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Profesora de español para todos los niveles. Clases individuales y grupales. Preparación para exámenes DELE.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Universidad Internacional de Andalucía | 2013 - 2015</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Profesora asistente en el programa de español para extranjeros. Desarrollo de materiales didácticos.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Spanish Classes Malaga | 2010 - Presente</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fundadora y profesora principal. Clases personalizadas para estudiantes de todo el mundo. Visitas culturales y actividades complementarias.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <FaUserFriends className="text-amber-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">+500</h3>
                <p className="text-gray-700 dark:text-gray-300">Estudiantes</p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <FaGlobe className="text-amber-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">+30</h3>
                <p className="text-gray-700 dark:text-gray-300">Países</p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <FaBook className="text-amber-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">+10</h3>
                <p className="text-gray-700 dark:text-gray-300">Años de experiencia</p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <FaGraduationCap className="text-amber-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">100%</h3>
                <p className="text-gray-700 dark:text-gray-300">Satisfacción</p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                ¿Listo para empezar?
              </h2>
              <a 
                href="/booking" 
                className="inline-block bg-amber-600 text-white font-medium px-8 py-3 rounded-md hover:bg-amber-700 transition-colors"
              >
                Reserva tu primera clase
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 