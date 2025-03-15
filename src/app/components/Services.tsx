'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaUserGraduate, FaLaptop, FaBookOpen, FaCheck, FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

// Interface for Spanish expressions
interface SpanishExpression {
  phrase: string;
  literal: string;
  meaning: string;
}

// Component to display Spanish expressions
const ExpressTooltip = ({ expression }: { expression: SpanishExpression }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block">
      <span 
        className="cursor-pointer text-amber-600 dark:text-amber-400 font-bold border-b border-dashed border-amber-600 dark:border-amber-400 flex items-center gap-1"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression.phrase}
        <FaInfoCircle className="text-xs text-amber-400" />
      </span>
      {showTooltip && (
        <div className="bg-white dark:bg-gray-800 text-sm p-2 rounded-md shadow-lg absolute z-50 left-1/2 -translate-x-1/2 w-48 mt-1 border border-gray-200 dark:border-gray-700">
          <div className="relative">
            <div className="text-xs text-gray-500 italic">Literal: {expression.literal}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Means: {expression.meaning}</div>
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

const servicesList = [
  {
    id: 1,
    title: 'Individual Classes',
    emoji: '👨‍🏫',
    description: '100% personalized attention to progress quickly.',
    icon: <FaUserGraduate className="h-8 w-8 text-blue-600" />,
    price: '25€',
    period: 'hour',
    popular: false,
    details: [
      'Program tailored to your needs',
      'Progress 3 times faster',
      'Flexible scheduling',
      'Personalized materials included'
    ],
    expression: {
      phrase: "¡A toda pastilla!",
      literal: "At full pill!",
      meaning: "At full speed/very quickly"
    }
  },
  {
    id: 2,
    title: 'Intensive Plan',
    emoji: '🔥',
    description: 'Learn Spanish in record time with intensive sessions.',
    icon: <FaBookOpen className="h-8 w-8 text-blue-600" />,
    price: '299€',
    period: 'month',
    popular: true,
    details: [
      '3 classes of 90 min. per week',
      'Access to online platform',
      'Practice with native speakers',
      'Guaranteed progress or your money back'
    ],
    expression: {
      phrase: "¡Vas a flipar!",
      /* eslint-disable-next-line react/no-unescaped-entities */
      literal: "You're going to flip!",
      /* eslint-disable-next-line react/no-unescaped-entities */
      meaning: "You'll be amazed/blown away"
    }
  },
  {
    id: 3,
    title: 'Couple Classes',
    emoji: '👫',
    description: 'Save by sharing the experience with a friend.',
    icon: <FaUserFriends className="h-8 w-8 text-blue-600" />,
    price: '40€',
    period: 'hour',
    popular: false,
    details: [
      'Real conversation dynamics',
      '€20 per person',
      'Collaborative learning',
      'Healthy competition'
    ],
    expression: {
      phrase: "Dos pájaros de un tiro",
      literal: "Two birds with one shot",
      meaning: "Two for the price of one"
    }
  },
  {
    id: 4,
    title: 'Online Spanish',
    emoji: '💻',
    description: 'Learn from anywhere with effective virtual classes.',
    icon: <FaLaptop className="h-8 w-8 text-blue-600" />,
    price: '20€',
    period: 'hour',
    popular: false,
    details: [
      'Interactive platform',
      'Session recordings',
      'Digital materials included',
      'No geographical limits'
    ],
    expression: {
      phrase: "En un pispás",
      literal: "In a pispás",
      meaning: "In the blink of an eye/very quickly"
    }
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
            <span className="mr-1">💰</span> Plans that fit your budget
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Choose the perfect plan for you
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select the program that best fits your needs and start speaking Spanish from the first class. As we say in Spain: <ExpressTooltip expression={{
              phrase: "¡A por todas!",
              literal: "Go for all!",
              meaning: "Give it your all/Let's do this!"
            }} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border ${service.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-200 dark:border-gray-700 shadow-xl'} relative`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-1.5 text-center text-sm font-semibold">
                  Most popular 🌟
                </div>
              )}
              
              <div className="p-6 pt-8">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 min-h-[40px]">
                    {service.description} <ExpressTooltip expression={service.expression} />
                  </p>
                </div>
                
                <div className="text-center my-6">
                  <div className="flex items-end justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1 mb-1">/{service.period}</span>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/booking"
                  className={`w-full py-3 px-4 rounded-xl transition-all flex items-center justify-center font-semibold ${
                    service.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {service.popular ? 'Start now' : 'Book'} 
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Not sure which plan to choose?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Schedule a 15-minute call to analyze your level and recommend the perfect plan for your goals. As they say in Spain: <ExpressTooltip expression={{
              phrase: "Tener enchufe",
              literal: "To have a plug",
              meaning: "To have connections/insider help"
            }} />
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
          >
            Free 15-minute consultation
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-gray-200 dark:border-gray-700 rounded-full py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>If you don't make progress in 30 days, we'll refund your money</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 