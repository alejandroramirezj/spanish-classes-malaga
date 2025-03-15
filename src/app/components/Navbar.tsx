'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
          <Link href="/" 
            className="flex items-center space-x-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <FaBook className={`h-6 w-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>Spanish Classes Málaga</span>
            {showTooltip && (
              <div className="absolute top-full left-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded shadow-lg text-sm">
                <p className="font-bold">¡Estoy hasta las narices! 🤦‍♂️</p>
                <p className="text-gray-500 italic">Literal: &ldquo;I&apos;m up to my nostrils!&rdquo;</p>
                <p className="text-gray-700">Really means: &ldquo;I&apos;m fed up!&rdquo;</p>
              </div>
            )}
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              About Virginia
            </Link>
            <Link href="/services" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Classes
            </Link>
            <Link href="/booking" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Book Now
            </Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-300 transition-colors`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                About Virginia
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Classes
              </Link>
              <Link 
                href="/booking" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                <p className="font-bold">¡Me pilla el toro! 🐂</p>
                <p className="text-gray-500 italic">Literal: &ldquo;The bull is catching me!&rdquo;</p>
                <p className="text-gray-700">Really means: &ldquo;I&apos;m running out of time!&rdquo;</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 