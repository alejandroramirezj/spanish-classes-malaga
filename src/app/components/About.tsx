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
    <div className="relative inline-block">
      <span 
        className="font-bold text-accent dark:text-accent-light cursor-pointer border-b border-dashed border-accent dark:border-accent-light flex items-center gap-1"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {phrase}
        <FaInfoCircle className="text-xs text-accent" />
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-accent/20">
          <div className="relative">
            <p className="font-bold text-accent dark:text-accent-light">{phrase}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Means: &ldquo;{meaning}&rdquo;</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
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
              <span className="mr-1">👋</span> Hi! I&apos;m Virginia
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Spanish Teacher<br className="hidden md:block" /> in <span className="text-primary">Málaga</span>
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mb-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-semibold">Tired of studying Spanish without being able to actually speak it?</span> I&apos;ll teach you to communicate from day one, not just memorize grammar rules. As we say in Spain, <SpanishExpression phrase="más vale tarde que nunca" literal="better late than never" meaning="it's never too late to start learning" />.
              </p>
              
              <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-xl mb-6 border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;After 10 years teaching Spanish to more than 500 students, I&apos;ve created a method that really works. My approach is based on <span className="font-semibold">practical conversation and real-life situations</span> that you&apos;ll encounter in your daily life in Spain. You&apos;ll be <SpanishExpression phrase="como pez en el agua" literal="like a fish in water" meaning="completely comfortable/in your element" /> in no time!&rdquo;
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">I personalize each class</span> according to your goals, whether for work, tourism, or permanent residency. No <SpanishExpression phrase="paños calientes" literal="hot cloths" meaning="half-measures or useless solutions" /> here!
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">I create a relaxed environment</span> where you can make mistakes without fear, the only way to truly learn a language. Don&apos;t worry about <SpanishExpression phrase="meter la pata" literal="sticking in the leg" meaning="making a mistake/putting your foot in your mouth" />!
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">I show you Málaga&apos;s culture</span> and help you integrate into local life for complete immersion. You&apos;ll be <SpanishExpression phrase="de cine" literal="from the movies" meaning="fantastic/awesome" /> at Spanish in no time!
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Trial Class
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
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-10">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-full relative">
                    <img 
                      src="/virginia.jpg" 
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
                    className="inline-flex items-center bg-white text-primary font-semibold px-4 py-2 rounded-lg transition-all hover:bg-primary/10 text-sm float-right"
                  >
                    Contact me now
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