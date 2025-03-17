'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
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
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 h-full"
          >
            <div className="sticky top-32">
              <span className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <span className="mr-1">👋</span> Hello, I&apos;m Virginia
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Your Teacher<br className="hidden md:block" /> in <span className="text-primary">Málaga</span>
              </h2>
             
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  I teach Spanish for communication from day one, not just memorizing rules. <SpanishExpression phrase="más vale tarde que nunca" literal="better late than never" meaning="it&apos;s never too late to start" />.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Personalized classes</span> based on your goals: work, tourism or residency.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Relaxed environment</span> where you can make mistakes without fear. Don&apos;t worry about <SpanishExpression phrase="meter la pata" literal="putting in the leg" meaning="making mistakes" />.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Cultural immersion</span> in Málaga&apos;s local life. You&apos;ll be <SpanishExpression phrase="de cine" literal="of cinema" meaning="fantastic/amazing" /> speaking Spanish.
                    </p>
                  </div>
                </div>
               
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary inline-flex"
                >
                  Book a Free Trial Class
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 h-full"
          >
            <div className="relative h-full">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-10 h-full flex flex-col">
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
             
                <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-xl mb-6 border-l-4 border-primary">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &ldquo;With 10 years of experience and +500 students, I&apos;ve created an effective method based on <span className="font-semibold">practical conversation</span>. You&apos;ll be <SpanishExpression phrase="como pez en el agua" literal="like a fish in water" meaning="completely at ease" /> very soon.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full border border-gray-100">
            <div className="text-center mb-6">
              <span className="flex items-center justify-center gap-2 text-xl mb-2">
                <span role="img" aria-label="blonde girl">👱‍♀️</span>
                <span role="img" aria-label="pointing hand">👉</span>
              </span>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Learn fun expressions!
              </h2>
              <p className="text-center mb-8 text-gray-700">
                Start using Spanish idioms to speak <SpanishExpression phrase="a todo gas" literal="at full gas" meaning="at full speed" /> like a native.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-accent">Daily expressions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="dar en el clavo" literal="to hit the nail" meaning="to hit the nail on the head" />
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="estar como una cabra" literal="to be like a goat" meaning="to be crazy" />
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="ser pan comido" literal="to be eaten bread" meaning="to be a piece of cake" />
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-accent">Cultural expressions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="hacer de tripas corazón" literal="to make heart from guts" meaning="to pluck up courage" />
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="ponerse las pilas" literal="to put in the batteries" meaning="to get one&apos;s act together" />
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    <SpanishExpression phrase="tomar el pelo" literal="to take the hair" meaning="to pull someone&apos;s leg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
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