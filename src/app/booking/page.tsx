import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { FaCalendarAlt, FaClock, FaUserCheck, FaLaptop } from 'react-icons/fa';

export const metadata = {
  title: 'Reserva tu Clase | Spanish Classes Malaga',
  description: 'Reserva tu clase de español con Virginia. Elige el día, la hora y el tipo de clase que prefieras. ¡Comienza tu viaje de aprendizaje del español hoy!',
};

export default function BookingPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Reserva tu Clase de Español
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              ¡Estás a solo unos pasos de comenzar tu viaje de aprendizaje del español! Completa el formulario a continuación para reservar tu clase.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaCalendarAlt className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Elige tu Fecha</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Selecciona el día que mejor se adapte a tu horario.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaClock className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Elige tu Hora</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tenemos flexibilidad horaria para adaptarnos a tus necesidades.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaUserCheck className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Personaliza</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Indica tu nivel y tus objetivos para adaptar la clase a ti.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaLaptop className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Confirma</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Recibirás una confirmación por email tras completar la reserva.
                </p>
              </div>
            </div>
            
            <BookingForm />
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                Preguntas Frecuentes
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    ¿Tengo que pagar por adelantado?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No, el pago se realiza después de recibir la confirmación de la disponibilidad. Te enviaremos las instrucciones de pago por email.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    ¿Puedo cancelar o cambiar mi reserva?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sí, puedes cambiar o cancelar tu reserva hasta 24 horas antes de la clase sin ningún coste. Para cancelaciones con menos de 24 horas de antelación, se aplicará un cargo del 50%.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    ¿Qué necesito para las clases online?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Para las clases online necesitarás una conexión estable a internet, un ordenador o tablet con cámara y micrófono, y la aplicación Zoom o Skype instalada.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    ¿Ofrecéis descuentos para paquetes de clases?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sí, ofrecemos descuentos para paquetes de 5, 10 o 20 clases. Cuantas más clases reserves, mayor será el descuento. Consulta los detalles en la sección de precios o contáctanos directamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 