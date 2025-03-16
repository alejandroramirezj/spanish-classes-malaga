'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useRef } from 'react';

interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };
  
  return (
    <div className="relative inline-block">
      <span 
        className="underline decoration-dashed decoration-accent decoration-2 cursor-pointer font-medium text-accent dark:text-accent-light flex items-center gap-1"
        onClick={toggleTooltip}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression}
        <FaInfoCircle className="text-xs text-accent-light" />
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50">
          <div className="relative">
            <p className="font-bold text-accent dark:text-accent-light">{expression}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
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

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl opacity-30 dark:opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full filter blur-3xl opacity-30 dark:opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content - Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <span className="mr-2">🇪🇸</span> Unleash Your Spanish Potential
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Learn Spanish <span className="text-accent">Like a Native</span> in Sunny Málaga
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
                className="btn-accent inline-flex items-center group"
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
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-gray-600 dark:text-gray-300">Years Teaching</p>
              </div>
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-600 dark:text-gray-300">Happy Students</p>
              </div>
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-gray-600 dark:text-gray-300">Countries</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3"></div>
              <div className="glassmorphism dark:glassmorphism-dark rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark"></div>
                
                {/* Video de Virginia */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <video 
                    ref={videoRef}
                    className="w-full h-full rounded-xl object-cover shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/video-poster.jpg"
                  >
                    <source src="/videos/Video_virginia.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
                
                {/* Overlay con botón para control de video */}
                <div className="absolute bottom-4 right-4 z-10">
                  <button 
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                        } else {
                          videoRef.current.pause();
                        }
                      }
                    }}
                    className="w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    {videoRef.current?.paused ? (
                      <span className="text-accent">▶</span>
                    ) : (
                      <span className="text-accent">⏸</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-24 glassmorphism dark:glassmorphism-dark p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Why Students <SpanishExpression expression="flipan en colores" literal="flip in colors" meaning="are absolutely amazed" /> With Our Spanish Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-shadow hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conversation-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">You&apos;ll be speaking Spanish from day one, not just studying grammar rules. Say goodbye to <SpanishExpression expression="quedarse en blanco" literal="staying blank" meaning="drawing a blank/freezing up" />!</p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-shadow hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl mb-3">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Personalized Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">Classes tailored to your needs, so you&apos;ll progress <SpanishExpression expression="a toda mecha" literal="at full wick" meaning="at full speed/very quickly" />.</p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-shadow hover:-translate-y-1 hover:shadow-lg">
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