'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaUserFriends, FaComment, FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

// Interface for Spanish expressions
interface SpanishExpressionProps {
  phrase: string;
  literal: string;
  meaning: string;
}

// Component for Spanish expressions with tooltips
const SpanishExpression = ({ phrase, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <span className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-yellow-400 decoration-2 cursor-pointer font-bold text-yellow-500 dark:text-yellow-400 flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-yellow-500/10 hover:bg-yellow-500/20"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {phrase}
        <FaInfoCircle className="text-xs text-yellow-500 dark:text-yellow-400 animate-pulse group-hover:animate-none" />
      </span>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-yellow-400/20"
        >
          <div className="relative">
            <p className="font-bold text-yellow-500 dark:text-yellow-400">{phrase}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Means: &ldquo;{meaning}&rdquo;</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </span>
  );
};

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
            <span className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">👋</span> Hola, soy Virginia
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Tu Profesora<br className="hidden md:block" /> en <span className="text-primary">Málaga</span>
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mb-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Enseño español para comunicarte desde el primer día, no solo memorizar reglas. <SpanishExpression phrase="más vale tarde que nunca" literal="better late than never" meaning="it's never too late to start learning" />.
              </p>
              
              <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-xl mb-6 border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;Con 10 años de experiencia y +500 alumnos, he creado un método efectivo basado en <span className="font-semibold">conversación práctica</span>. Estarás <SpanishExpression phrase="como pez en el agua" literal="like a fish in water" meaning="completely comfortable/in your element" /> muy pronto.&rdquo;
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Clases personalizadas</span> según tus objetivos: trabajo, turismo o residencia.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Ambiente relajado</span> donde equivocarse sin miedo. No te preocupes por <SpanishExpression phrase="meter la pata" literal="sticking in the leg" meaning="making a mistake" />.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Inmersión cultural</span> en la vida local de Málaga. Serás <SpanishExpression phrase="de cine" literal="from the movies" meaning="fantastic/awesome" /> hablando español.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/booking" 
              className="btn-plan btn-plan-primary"
            >
              Book a Free Trial Class
              <FaArrowRight />
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
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-10">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-full relative">
                    <img 
                      src="/spanish-classes-malaga/images/virginia.jpg" 
                      alt="Virginia - Spanish Teacher in Málaga"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl flex flex-col items-center text-center">
                    <FaGraduationCap className="text-primary dark:text-primary-light text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Certified</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Master in ELE & DELE</p>
                  </div>
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl flex flex-col items-center text-center">
                    <FaUserFriends className="text-primary dark:text-primary-light text-2xl mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experience</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+500 students</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary to-primary-dark p-5 rounded-xl text-white">
                  <div className="flex items-start mb-4">
                    <FaComment className="text-white opacity-80 text-2xl mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Let&apos;s talk about your goals</h4>
                      <p className="text-primary-100">
                        Do you need to learn Spanish for work, integration, or simply to enjoy Málaga more? Tell me your goals and I&apos;ll design a personalized plan for you. Let&apos;s get started <SpanishExpression phrase="a todo gas" literal="at full gas" meaning="full speed ahead/with great energy" />!
                      </p>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="btn-plan btn-plan-secondary"
                  >
                    Contact me now
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why my students learn faster
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My method is based on 3 fundamental pillars that will have you speaking Spanish fluently in no time. As they say, <SpanishExpression phrase="al mal tiempo, buena cara" literal="to bad weather, good face" meaning="make the best of a difficult situation" />!
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
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real Conversation
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                From day one you&apos;ll speak Spanish about topics that interest you. No boring exercises or artificial dialogues. It&apos;s time to <SpanishExpression phrase="romper el hielo" literal="break the ice" meaning="overcome initial awkwardness and start talking" />!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Personalized Method
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I adapt my teaching to your learning style. We don&apos;t all learn the same way, and your course adjusts to how you learn best. You&apos;ll be <SpanishExpression phrase="como anillo al dedo" literal="like a ring to the finger" meaning="a perfect fit" />!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Cultural Immersion
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                You&apos;ll learn the language in its cultural context. I&apos;ll show you the authentic Málaga that only locals know. You&apos;ll be <SpanishExpression phrase="en tu salsa" literal="in your sauce" meaning="in your element/comfortable in your environment" /> here!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 