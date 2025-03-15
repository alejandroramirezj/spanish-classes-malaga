'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaUserFriends, FaComment, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">👋</span> ¡Hola! Soy Virginia
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Tu profesora de español<br className="hidden md:block" /> en <span className="text-blue-600">Málaga</span>
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mb-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-semibold">¿Cansado de estudiar español sin poder hablarlo realmente?</span> Yo te enseño a comunicarte desde el primer día, no solo a memorizar reglas gramaticales.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl mb-6 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;Después de 10 años enseñando español a más de 500 estudiantes, he creado un método que realmente funciona. Mi enfoque se basa en la <span className="font-semibold">conversación práctica y situaciones reales</span> que encontrarás en tu día a día en España.&rdquo;
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Personalizo cada clase</span> según tus objetivos, ya sea para trabajo, turismo o residencia permanente.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Creo un ambiente relajado</span> donde puedes equivocarte sin miedo, la única forma de aprender un idioma de verdad.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Te muestro la cultura malagueña</span> y te ayudo a integrarte en la vida local para una inmersión completa.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserva una clase de prueba gratis
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-10">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl mb-6">
                  <Image
                    src="/virginia-profile.jpg"
                    alt="Virginia - Profesora de español en Málaga"
                    width={600}
                    height={450}
                    className="object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex flex-col items-center text-center">
                    <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Certificada</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Máster en ELE y DELE</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex flex-col items-center text-center">
                    <FaUserFriends className="text-blue-600 dark:text-blue-400 text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experiencia</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+500 estudiantes</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-xl text-white">
                  <div className="flex items-start mb-4">
                    <FaComment className="text-white opacity-80 text-2xl mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Hablemos de tus objetivos</h4>
                      <p className="text-blue-100">
                        ¿Necesitas aprender español para trabajo, integración o simplemente para disfrutar más de Málaga? Cuéntame tus metas y diseñaré un plan personalizado para ti.
                      </p>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg transition-all hover:bg-blue-50 text-sm float-right"
                  >
                    Contáctame ahora
                    <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué mis estudiantes aprenden más rápido?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mi método se basa en 3 pilares fundamentales que te harán hablar español con fluidez en poco tiempo:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Conversación Real
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Desde el primer día hablarás español sobre temas que te interesan. Nada de ejercicios aburridos o diálogos artificiales.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Método Personalizado
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Adapto mi enseñanza a tu estilo de aprendizaje. No todos aprendemos igual, y tu curso se ajusta a como tú aprendes mejor.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Inmersión Cultural
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Aprenderás el idioma en su contexto cultural. Te mostraré la Málaga auténtica que solo los locales conocen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 