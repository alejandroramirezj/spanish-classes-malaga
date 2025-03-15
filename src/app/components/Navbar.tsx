'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-blue-900/50 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FaBook className={`h-6 w-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>Spanish Classes Málaga</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Inicio
            </Link>
            <Link href="/about" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Sobre Virginia
            </Link>
            <Link href="/services" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Clases
            </Link>
            <Link href="/booking" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Reservar
            </Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} 
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Sobre Virginia
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Clases
              </Link>
              <Link 
                href="/booking" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Reservar
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 