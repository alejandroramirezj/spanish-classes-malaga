import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const metadata = {
  title: 'Contacto | Spanish Classes Malaga',
  description: 'Ponte en contacto con Virginia para obtener más información sobre las clases de español en Málaga. Estamos aquí para responder a todas tus preguntas.',
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Contacta con Nosotros
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre nuestras clases? Estamos aquí para ayudarte. Completa el formulario a continuación o utiliza cualquiera de nuestros canales de contacto.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Info de contacto */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-amber-600 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Dirección</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Centro de Málaga<br />
                        Málaga, 29001<br />
                        España
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-amber-600 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a 
                        href="mailto:info@spanishclassesmalaga.com" 
                        className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
                      >
                        info@spanishclassesmalaga.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaWhatsapp className="text-amber-600 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">WhatsApp</h3>
                      <a 
                        href="tel:+34600000000" 
                        className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
                      >
                        +34 600 000 000
                      </a>
                    </div>
                  </div>
                </div>
                
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Redes Sociales
                </h3>
                
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <FaFacebook className="text-amber-600 text-xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <FaInstagram className="text-amber-600 text-xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <FaTwitter className="text-amber-600 text-xl" />
                  </a>
                </div>
                
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Horario de Atención
                </h3>
                
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-medium">Lunes - Viernes:</span>
                    <span>9:00 - 20:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sábado:</span>
                    <span>9:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Domingo:</span>
                    <span>Cerrado</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Formulario de contacto */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa de ubicación */}
      <section className="pb-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Nuestra Ubicación
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12793.019825273807!2d-4.424941673443939!3d36.721457492101505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7eb8b71f5c1%3A0x2b3feca80cb5289!2zTcOhbGFnYSwgRXNwYcOxYQ!5e0!3m2!1ses!2ses!4v1625124576348!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 