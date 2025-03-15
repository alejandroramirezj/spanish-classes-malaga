'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Link from 'next/link';

interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => (
  <div className="relative group">
    <span className="underline decoration-dashed decoration-amber-400 cursor-help font-medium text-amber-600 dark:text-amber-400">
      {expression}
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded shadow-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-amber-200 dark:border-amber-800">
      <p className="font-bold text-amber-600 dark:text-amber-400">{expression}</p>
      <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
      <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-30 dark:opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-200 dark:bg-amber-900/30 rounded-full filter blur-3xl opacity-30 dark:opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content - Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <span className="mr-2">🇪🇸</span> Unleash Your Spanish Potential
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Learn Spanish <span className="text-amber-500">Like a Native</span> in Sunny Málaga
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              From complete beginner to <SpanishExpression expression="hablar por los codos" literal="talking through your elbows" meaning="talking non-stop" /> fluency with personalized classes that will have you <SpanishExpression expression="hablando como un libro abierto" literal="speaking like an open book" meaning="speaking very eloquently" /> in no time!
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link 
                href="/booking" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center group"
              >
                Book Your Free Trial Class
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300 font-medium ml-1">
                  5.0 on Google (8 reviews)
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-4"
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-gray-600 dark:text-gray-300">Years Teaching</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600 dark:text-gray-300">Happy Students</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-3xl font-bold text-blue-600">30+</p>
                <p className="text-gray-600 dark:text-gray-300">Countries</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Image and testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/20 rounded-2xl transform rotate-3"></div>
              <div className="bg-gradient-to-r from-blue-500 to-amber-500 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <span className="text-white text-2xl font-medium drop-shadow-md">Spanish Classes in Málaga</span>
                
                {/* First testimonial bubble */}
                <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105">
                  <p className="font-bold mb-1">Student from USA:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    &ldquo;Learning Spanish here was <SpanishExpression expression="la leche" literal="the milk" meaning="awesome/amazing" />! Virginia is <SpanishExpression expression="de primera" literal="of first" meaning="top-notch/excellent" />!&rdquo;
                  </p>
                </div>
                
                {/* Second testimonial bubble */}
                <div className="absolute top-6 left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105">
                  <p className="font-bold mb-1">Student from Germany:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    &ldquo;I was <SpanishExpression expression="en las nubes" literal="in the clouds" meaning="over the moon/extremely happy" /> with my progress!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-24 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Why Students <SpanishExpression expression="flipan en colores" literal="flip in colors" meaning="are absolutely amazed" /> With Our Spanish Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conversation-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">You&apos;ll be speaking Spanish from day one, not just studying grammar rules. Say goodbye to <SpanishExpression expression="quedarse en blanco" literal="staying blank" meaning="drawing a blank/freezing up" />!</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Personalized Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">Classes tailored to your needs, so you&apos;ll progress <SpanishExpression expression="a toda mecha" literal="at full wick" meaning="at full speed/very quickly" />.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🌞</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Cultural Immersion</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience Spanish culture firsthand in the beautiful city of Málaga and soon you&apos;ll be <SpanishExpression expression="como pez en el agua" literal="like a fish in water" meaning="completely comfortable/in your element" />.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 