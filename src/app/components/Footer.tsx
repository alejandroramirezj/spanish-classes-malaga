'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

// Interface for Spanish expressions
interface SpanishExpressionProps {
  phrase: string;
  literal: string;
  meaning: string;
}

// Component for Spanish expressions with tooltips
const SpanishExpression = ({ phrase, literal, meaning }: SpanishExpressionProps) => (
  <div className="relative group inline-block">
    <span className="cursor-help text-amber-300 dark:text-amber-300 font-bold border-b border-dashed border-amber-300">
      {phrase}
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-blue-950 rounded shadow-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-blue-700">
      <p className="font-bold text-amber-300">{phrase}</p>
      <p className="text-gray-300 italic">Literal: &ldquo;{literal}&rdquo;</p>
      <p className="text-gray-300">Means: &ldquo;{meaning}&rdquo;</p>
    </div>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
      
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto -mt-1 fill-current text-white">
          <path d="M0,0L48,16C96,32,192,64,288,69.3C384,75,480,53,576,48C672,43,768,53,864,53.3C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Spanish Classes Málaga</h3>
            <p className="text-gray-300 mb-6">
              Personalized Spanish lessons in Málaga with Virginia, a native teacher with over 10 years of experience. 
              Learn Spanish effectively and have fun. <SpanishExpression phrase="¡Olé!" literal="Olé!" meaning="An expression of excitement and appreciation" />
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all hover:scale-110">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-blue-800 h-1 w-3 mr-2 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-blue-800 h-1 w-3 mr-2 rounded-full"></span>
                  About Virginia
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-blue-800 h-1 w-3 mr-2 rounded-full"></span>
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-blue-800 h-1 w-3 mr-2 rounded-full"></span>
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-blue-800 h-1 w-3 mr-2 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Málaga, Spain <SpanishExpression phrase="La tierra del sol" literal="The land of the sun" meaning="Nickname for the sunny southern region of Spain" /></span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@spanishclassesmalaga.com" className="text-gray-300 hover:text-white transition-colors">
                  info@spanishclassesmalaga.com
                </a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+34600000000" className="text-gray-300 hover:text-white transition-colors">
                  +34 600 000 000
                </a>
              </li>
            </ul>
            
            <div className="mt-6 bg-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-300">Hours <SpanishExpression phrase="Horario español" literal="Spanish schedule" meaning="The unique Spanish timetable with late lunches and dinners" /></h4>
              <p className="text-sm text-gray-300">Monday - Friday: 9:00 - 20:00</p>
              <p className="text-sm text-gray-300">Saturday: 9:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-4">&copy; {currentYear} Spanish Classes Málaga. All rights reserved.</p>
          <p className="text-xs">Website designed with 💙 for Virginia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 