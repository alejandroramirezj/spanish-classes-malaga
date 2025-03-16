'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaArrowRight, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mr-3 shadow-lg">
                <FaGlobe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Spanish in Málaga</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Learn Spanish with a native teacher in the vibrant city of Málaga. 
              Experience immersive private lessons, engaging small groups, and 
              customized learning journeys.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 neomorphism dark:neomorphism-dark flex items-center justify-center text-primary hover:text-accent transition-all transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 neomorphism dark:neomorphism-dark flex items-center justify-center text-primary hover:text-accent transition-all transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 neomorphism dark:neomorphism-dark flex items-center justify-center text-primary hover:text-accent transition-all transform hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:ml-8">
            <h3 className="text-md font-bold uppercase text-primary dark:text-primary-light mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light inline-flex items-center transition-all transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/50 inline-block mr-2.5"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light inline-flex items-center transition-all transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/50 inline-block mr-2.5"></span>
                  About Virginia
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light inline-flex items-center transition-all transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/50 inline-block mr-2.5"></span>
                  Classes
                </Link>
              </li>
              <li>
                <Link 
                  href="/booking" 
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light inline-flex items-center transition-all transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/50 inline-block mr-2.5"></span>
                  Book Now
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light inline-flex items-center transition-all transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/50 inline-block mr-2.5"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-md font-bold uppercase text-primary dark:text-primary-light mb-5">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-md">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  Málaga, Andalusia, Spain
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                  <FaPhone className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="tel:+34123456789" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                  <FaEnvelope className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="mailto:info@spanishinmalaga.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light transition-colors">
                  info@spanishinmalaga.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Call to Action */}
          <div>
            <h3 className="text-md font-bold uppercase text-primary dark:text-primary-light mb-5">Start Learning</h3>
            <div className="glassmorphism dark:glassmorphism-dark p-5 rounded-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary-light to-accent rounded-full opacity-20 blur-lg"></div>
              
              <h4 className="text-lg font-bold text-accent dark:text-accent-light mb-3">Ready to speak Spanish?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Book your first class today and start your Spanish language journey in beautiful Málaga!
              </p>
              <Link 
                href="/booking" 
                className="inline-flex items-center text-sm text-white bg-accent hover:bg-accent-light px-4 py-2 rounded-full shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1"
              >
                Book a Free Trial
                <FaArrowRight className="ml-1.5 w-3 h-3" />
              </Link>
              
              <div 
                className="relative mt-4 pt-4 border-t border-primary/10 dark:border-primary/20"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <p className="text-xs text-accent font-bold cursor-pointer">
                  ¡Es pan comido! 🍞
                </p>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-0 mb-2 p-3 glassmorphism dark:glassmorphism-dark rounded-lg shadow-lg text-xs max-w-[220px] z-10"
                  >
                    <p className="text-gray-500 dark:text-gray-400 italic">Literal: It&apos;s eaten bread!</p>
                    <p className="text-gray-700 dark:text-gray-300">Means: It&apos;s a piece of cake/super easy!</p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="pt-6 mt-12 border-t border-gray-light dark:border-gray-light/10 text-center">
          <p className="text-sm text-gray-medium dark:text-gray-medium">
            &copy; {currentYear} Spanish in Málaga. All rights reserved.
          </p>
          <p className="text-xs text-gray-medium dark:text-gray-medium mt-2">
            Designed with
            <span className="inline-block mx-1">
              <svg className="w-3 h-3 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </span>
            in Málaga, Spain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 