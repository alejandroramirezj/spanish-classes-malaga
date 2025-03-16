import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaUserGraduate, FaUserFriends, FaLaptop, FaBookOpen, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Classes | Spanish Classes Malaga',
  description: 'Discover our personalized Spanish classes: individual, couples, online, and for specific purposes.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Classes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Options tailored to your needs and goals. All our classes are personalized.
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
                  <p className="text-primary font-medium">Individual classes</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserGraduate className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Individual Classes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Maximum personalization and attention for fast and effective progress.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Classes adapted to your pace and learning style
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Focus on your specific needs: conversation, grammar, work vocabulary...
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Maximum flexibility in scheduling
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking?type=individual" className="btn-plan btn-plan-primary">
                  Book a Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Couples/Friends Classes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-primary/10 h-64 flex items-center justify-center">
                  <p className="text-primary font-medium">Classes for couples or friends</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserFriends className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Couples or Friends
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Learn together in a motivating and dynamic environment.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Ideal for friends or couples with similar levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Interactive conversation practice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      More affordable than individual classes
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking?type=couple" className="btn-plan btn-plan-primary">
                  Book a Class
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
                <div className="rounded-lg overflow-hidden shadow-lg bg-primary/10 h-64 flex items-center justify-center">
                  <p className="text-primary font-medium">Online classes</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaLaptop className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Online Classes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Quality Spanish classes from anywhere in the world.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Same personalized attention as face-to-face classes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Interactive digital materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Maximum geographical flexibility
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking?type=online" className="btn-plan btn-plan-primary">
                  Book a Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specific purposes classes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-primary/10 h-64 flex items-center justify-center">
                  <p className="text-primary font-medium">Spanish for specific purposes</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Specific Purposes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Spanish focused on your professional or academic needs.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Business, medical, legal, tourism Spanish...
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Preparation for DELE and SIELE exams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Customized industry-specific vocabulary
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking?type=specific" className="btn-plan btn-plan-primary">
                  Book a Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Individual Classes</h3>
                
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary mb-2">€25<span className="text-sm text-gray-600 dark:text-gray-400"> / hour</span></p>
                  <p className="text-gray-700 dark:text-gray-300">Single class rate</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      5 classes package: €115 (€23/hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      10 classes package: €220 (€22/hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      20 classes package: €400 (€20/hour)
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking?type=individual" className="btn-plan btn-plan-primary w-full">
                  Book Now
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Couples / Online</h3>
                
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary mb-2">From €20<span className="text-sm text-gray-600 dark:text-gray-400"> / hour</span></p>
                  <p className="text-gray-700 dark:text-gray-300">See details below</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Couples: €40/hour (€20 per person)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Online: Same rates as face-to-face
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Package discounts available for all formats
                    </span>
                  </li>
                </ul>
                
                <Link href="/booking" className="btn-plan btn-plan-primary w-full">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Need a customized plan? Contact us for special packages or group rates.
              </p>
              <Link href="/contact" className="btn-plan btn-plan-secondary">
                Contact Us
              </Link>
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