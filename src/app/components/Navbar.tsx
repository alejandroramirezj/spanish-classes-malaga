'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBook, FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Spanish expressions for the navbar tooltip
const spanishExpressions = [
  {
    phrase: "¡Estoy hasta las narices!",
    literal: "I'm up to my nostrils!",
    meaning: "I'm fed up!"
  },
  {
    phrase: "¡Me pilla el toro!",
    literal: "The bull is catching me!",
    meaning: "I'm running out of time!"
  },
  {
    phrase: "¡No tiene ni pies ni cabeza!",
    literal: "It has neither feet nor head",
    meaning: "It makes no sense at all"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentExpression, setCurrentExpression] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si se ha hecho scroll más allá de 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calcular la progresión del scroll para una transición más suave
      const scrollThreshold = 80; // umbral para completar la transición
      const progress = Math.min(1, window.scrollY / scrollThreshold);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Rotate through expressions
  useEffect(() => {
    if (showTooltip) {
      const interval = setInterval(() => {
        setCurrentExpression((prev) => (prev + 1) % spanishExpressions.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [showTooltip]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calcular estilos dinámicos basados en el scroll
  const navHeight = 64 + (scrollProgress * -8); // Altura inicial 64px, hasta 56px
  const bgOpacity = 0.8 + (scrollProgress * 0.2); // Opacidad de 0.8 a 1
  const shadowOpacity = scrollProgress * 0.2; // Sombra de 0 a 0.2

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glassmorphism dark:glassmorphism-dark shadow-lg py-2' 
          : 'py-4'
      } backdrop-blur-md`}
      style={{
        background: isScrolled 
          ? `rgba(255, 255, 255, ${bgOpacity})` 
          : 'linear-gradient(135deg, var(--primary), var(--accent))',
        boxShadow: isScrolled ? `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})` : 'none',
        height: `${navHeight}px`,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" 
            className="flex items-center space-x-2 group relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              isScrolled 
              ? 'bg-primary/10 text-primary shadow-inner' 
              : 'bg-white/20 text-white shadow-md'
            } transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <FaBook className="h-5 w-5" />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-primary' : 'text-white'
            } transition-all duration-300`}>
              Spanish in Málaga
            </span>
            
            <motion.div 
              animate={{ y: showTooltip ? 0 : -5, opacity: showTooltip ? 1 : 0 }}
              className={`absolute -top-1 right-0 transform -translate-y-full ${
                isScrolled ? 'text-primary' : 'text-white'
              } opacity-60`}
            >
              <FaChevronDown className="w-3 h-3 animate-bounce" />
            </motion.div>
            
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm max-w-xs z-50 border border-accent/10"
                >
                  <div className="flex items-start space-x-2">
                    <div className="bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light p-2 rounded-full">
                      <FaGlobe className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{spanishExpressions[currentExpression].phrase}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs italic">Literal: {spanishExpressions[currentExpression].literal}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs">Means: {spanishExpressions[currentExpression].meaning}</p>
                      <div className="flex space-x-1 mt-1.5">
                        {spanishExpressions.map((_, index) => (
                          <motion.div 
                            key={index}
                            animate={{ 
                              width: currentExpression === index ? 16 : 8,
                              backgroundColor: currentExpression === index ? 'var(--accent)' : 'var(--gray-light)'
                            }}
                            className={`h-1 rounded-full`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white hover:text-white hover:bg-white/10'} transition-all hover:shadow-inner transform hover:scale-105`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white hover:text-white hover:bg-white/10'} transition-all hover:shadow-inner transform hover:scale-105`}>
              About Virginia
            </Link>
            <Link href="/services" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white hover:text-white hover:bg-white/10'} transition-all hover:shadow-inner transform hover:scale-105`}>
              Classes
            </Link>
            <Link href="/booking" className={`ml-2 px-4 py-2 rounded-full text-sm font-medium ${
              isScrolled 
                ? 'bg-accent text-white hover:bg-accent-light' 
                : 'bg-white text-accent hover:bg-white/90'
            } transition-all shadow-sm hover:shadow-md transform hover:scale-105 hover:-translate-y-0.5`}>
              Book Now
            </Link>
            <Link href="/contact" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white hover:text-white hover:bg-white/10'} transition-all hover:shadow-inner transform hover:scale-105`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className={`md:hidden p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-dark hover:bg-gray-light' 
                : 'text-white hover:bg-white/20'
            } transition-all hover:scale-110`}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glassmorphism dark:glassmorphism-dark border-t border-gray-light/30 dark:border-gray-light/10 shadow-xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link 
                href="/" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium hover:translate-x-1 transition-transform flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.span className="mr-2 text-primary" initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}>•</motion.span>
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium hover:translate-x-1 transition-transform flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.span className="mr-2 text-primary" initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.1 }}>•</motion.span>
                About Virginia
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium hover:translate-x-1 transition-transform flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.span className="mr-2 text-primary" initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.2 }}>•</motion.span>
                Classes
              </Link>
              <Link 
                href="/booking" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium hover:translate-x-1 transition-transform flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.span className="mr-2 text-primary" initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.3 }}>•</motion.span>
                Book Now
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium hover:translate-x-1 transition-transform flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.span className="mr-2 text-primary" initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.4 }}>•</motion.span>
                Contact
              </Link>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="p-4 mt-2 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/10 dark:from-accent/20 dark:to-primary/10 dark:border-accent/20"
              >
                <p className="font-bold text-accent dark:text-accent-light mb-1 flex items-center">
                  <span className="mr-2">🐂</span>¡Me pilla el toro!
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                  Literal: The bull is catching me!
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-xs">
                  Means: I&apos;m running out of time!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 