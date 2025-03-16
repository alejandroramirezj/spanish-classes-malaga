'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaInfoCircle, FaWineGlassAlt, FaUtensils, FaWalking, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

// Interface para expresiones españolas
interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

// Componente para mostrar expresiones españolas con tooltip
const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <span className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-accent decoration-2 cursor-pointer font-bold text-accent dark:text-accent-light flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-accent/5 hover:bg-accent/10"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression}
        <FaInfoCircle className="text-xs text-accent animate-pulse group-hover:animate-none" />
      </span>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-accent/20"
        >
          <div className="relative">
            <p className="font-bold text-accent dark:text-accent-light">{expression}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
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

// Actividades de inmersión en Málaga
const malagaActivities = [
  {
    icon: <FaWineGlassAlt className="text-primary text-xl" />,
    title: "Wine Tasting Tours",
    description: "Visit local vineyards and learn Spanish while enjoying the best wines from Málaga.",
    expression: { expression: "Estar en la gloria", literal: "to be in heaven", meaning: "to be in absolute bliss" }
  },
  {
    icon: <FaUtensils className="text-primary text-xl" />,
    title: "Cooking Classes",
    description: "Learn to make authentic Spanish tortilla and tapas while practicing conversation.",
    expression: { expression: "Chuparse los dedos", literal: "to lick your fingers", meaning: "something delicious" }
  },
  {
    icon: <FaWalking className="text-primary text-xl" />,
    title: "Cultural Walking Tours",
    description: "Explore the historic streets of Málaga while learning practical Spanish vocabulary.",
    expression: { expression: "De pe a pa", literal: "from P to P", meaning: "thoroughly/completely" }
  },
  {
    icon: <FaUsers className="text-primary text-xl" />,
    title: "Language Exchange",
    description: "Connect with locals and practice Spanish in authentic conversation settings.",
    expression: { expression: "Hablar por los codos", literal: "to talk through the elbows", meaning: "to talk a lot" }
  }
];

const MalagaExperience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] z-0"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Learn faster through immersion
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-white"
            >
              Why Málaga is The Perfect Place <br />
              <span className="text-primary">To Learn Spanish</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Combine my proven teaching method with Málaga's rich culture for the fastest way to Spanish fluency. As they say, <SpanishExpression expression="quien a buen árbol se arrima" literal="who leans against a good tree" meaning="you benefit from good company/environment" />!
            </motion.p>
          </div>
          
          {/* Two columns layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left column - My teaching method */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why My Students Learn Faster</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                My method is based on 3 fundamental pillars that accelerate your learning process. You&apos;ll be saying <SpanishExpression expression="¡Está chupado!" literal="It&apos;s sucked!" meaning="It&apos;s super easy!" /> in no time!
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🗣️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real Conversations</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      From day one, you&apos;ll speak Spanish about topics that interest you. No boring exercises or artificial dialogues.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personalized Method</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      I adapt my teaching to your learning style. We don&apos;t all learn the same way, and your course adjusts to how you learn best.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cultural Immersion</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      You&apos;ll learn the language in its cultural context. I&apos;ll show you the authentic Málaga that only locals know.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right column - Why Málaga */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 shadow-xl border border-primary/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Málaga: Your Spanish Classroom</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Learning in Málaga provides authentic immersion that accelerates your progress. As locals say, <SpanishExpression expression="vivir a lo grande" literal="to live grandly" meaning="to live life to the fullest" />.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Native speakers everywhere</span> - Practice your Spanish in real-life situations with friendly locals
                  </p>
                </div>
                
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Rich cultural context</span> - Learn vocabulary through museums, food markets, and local festivals
                  </p>
                </div>
                
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Clear accent</span> - Malagueños speak with one of the clearest Spanish accents, perfect for beginners
                  </p>
                </div>
                
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Enjoyable environment</span> - Learning is easier when you&apos;re surrounded by sunshine, beaches and great food
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Immersive activities section */}
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Immersive Activities in Málaga
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Learn Spanish while experiencing the best of Andalusian culture. These activities will have you <SpanishExpression expression="matando dos pájaros de un tiro" literal="killing two birds with one stone" meaning="accomplishing two things at once" />.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {malagaActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {activity.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{activity.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{activity.description}</p>
                  <SpanishExpression 
                    expression={activity.expression.expression} 
                    literal={activity.expression.literal} 
                    meaning={activity.expression.meaning}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Botón para ver todas las actividades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link 
                href="/malaga-activities" 
                className="inline-flex items-center px-6 py-3 text-white bg-primary hover:bg-primary-dark transition-all duration-300 rounded-full font-medium shadow-lg hover:shadow-xl group"
              >
                Ver todas las actividades en Málaga
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalagaExperience; 