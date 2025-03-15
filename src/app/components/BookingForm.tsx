'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaCalendarDay, FaClock, FaComments, FaUsers, FaShieldAlt } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    date: '',
    time: '',
    service: '',
    groupSize: '1',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simular fechas disponibles (en una implementación real, esto vendría de la API de Google Calendar)
  const availableDates = [];
  // Generar fechas disponibles para los próximos 30 días
  const today = new Date();
  for (let i = 1; i <= 30; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    // Excluir los domingos (0 es domingo en JavaScript)
    if (nextDate.getDay() !== 0) {
      const dateString = nextDate.toISOString().split('T')[0];
      availableDates.push(dateString);
    }
  }

  // Simular slots de tiempo disponibles (en una implementación real, esto vendría de la API de Google Calendar)
  const availableTimes = [
    '09:00', '10:30', '12:00', '15:00', '16:30', '18:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulamos la integración con Google Calendar
      // En una implementación real, esto sería una llamada a una API que crearía un evento en Google Calendar
      
      // 1. Validación del formulario en el servidor
      // 2. Creación de un evento en Google Calendar usando la API
      // 3. Envío de confirmación por email
      
      console.log('Booking data:', formData);
      
      // Simulamos una respuesta exitosa
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      // Reiniciar el formulario después del éxito
      setFormData({
        name: '',
        email: '',
        phone: '',
        level: '',
        date: '',
        time: '',
        service: '',
        groupSize: '1',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reiniciar el estado después de 5 segundos
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Reserva tu Clase
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Selecciona la fecha y hora que prefieras para tu clase. 
              Las reservas se integran directamente con mi calendario.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 relative">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center text-green-600 dark:text-green-400">
                <FaShieldAlt className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Conexión Segura</span>
              </div>
            </div>
            
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Reserva Confirmada!</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Tu reserva ha sido programada con éxito. Recibirás un correo de confirmación con los detalles y un recordatorio 24 horas antes de tu clase.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre completo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Teléfono
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+34 123 456 789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nivel de español
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGlobe className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Selecciona tu nivel</option>
                        <option value="A1">Principiante (A1)</option>
                        <option value="A2">Elemental (A2)</option>
                        <option value="B1">Intermedio (B1)</option>
                        <option value="B2">Intermedio alto (B2)</option>
                        <option value="C1">Avanzado (C1)</option>
                        <option value="C2">Maestría (C2)</option>
                        <option value="No sé">No estoy seguro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Fecha preferida
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarDay className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Selecciona una fecha</option>
                        {availableDates.map((date) => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('es-ES', { 
                              weekday: 'long', 
                              day: 'numeric', 
                              month: 'long' 
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Hora preferida
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaClock className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Selecciona una hora</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tipo de clase
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaComments className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Selecciona tipo de clase</option>
                        <option value="individual">Clases Individuales</option>
                        <option value="pair">Clases en Pareja</option>
                        <option value="online">Clases Online</option>
                        <option value="specific">Español para Fines Específicos</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Número de estudiantes
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUsers className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="1">1 estudiante</option>
                        <option value="2">2 estudiantes</option>
                        <option value="3">3 estudiantes</option>
                        <option value="4">4+ estudiantes (grupo)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Cuéntame sobre tus objetivos o cualquier otra información que consideres relevante..."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-md font-medium text-white transition-all ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'Procesando...' : 'Confirmar Reserva'}
                  </button>
                </div>
                
                {formStatus === 'error' && (
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-red-600 dark:text-red-400">
                      Hubo un error al procesar tu reserva. Por favor, inténtalo de nuevo o contáctanos directamente.
                    </p>
                  </div>
                )}
                
                <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                  <p>Tus datos están protegidos y solo se utilizarán para gestionar la reserva de tu clase.</p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm; 