'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBook, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glassmorphism bg-white/80 dark:glassmorphism-dark dark:bg-surface/80 shadow-md py-2' 
        : 'gradient-mixed py-4'
    } backdrop-blur-md`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              isScrolled 
              ? 'bg-primary/10 text-primary' 
              : 'bg-white/20 text-white'
            } transition-all duration-200 group-hover:scale-110`}>
              <FaBook className="h-5 w-5" />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Spanish in Málaga
            </span>
            
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm max-w-xs z-50"
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
                          <div 
                            key={index}
                            className={`h-1 rounded-full ${currentExpression === index ? 'w-4 bg-accent' : 'w-2 bg-gray-light'}`}
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
            <Link href="/" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-all`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-all`}>
              About Virginia
            </Link>
            <Link href="/services" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-all`}>
              Classes
            </Link>
            <Link href="/booking" className={`ml-2 px-4 py-2 rounded-full text-sm font-medium ${
              isScrolled 
                ? 'bg-accent text-white hover:bg-accent-light' 
                : 'bg-white text-accent hover:bg-white/90'
            } transition-all shadow-sm hover:shadow transform hover:scale-105`}>
              Book Now
            </Link>
            <Link href="/contact" className={`px-3 py-2 rounded-full text-sm font-medium ${isScrolled ? 'text-gray-dark hover:text-primary hover:bg-primary/5' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-all`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className={`md:hidden p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-dark hover:bg-gray-light' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
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
            className="md:hidden glassmorphism dark:glassmorphism-dark border-t border-gray-light/30 dark:border-gray-light/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link 
                href="/" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Virginia
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Classes
              </Link>
              <Link 
                href="/booking" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-900 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="p-4 mt-2 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/10 dark:from-accent/20 dark:to-primary/10 dark:border-accent/20">
                <p className="font-bold text-accent dark:text-accent-light mb-1">
                  ¡Me pilla el toro! 🐂
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                  Literal: The bull is catching me!
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-xs">
                  Means: I&apos;m running out of time!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 