'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight, FaPlus, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Interface for Google reviews
interface GoogleReview {
  id: string;
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  original_spanish?: string;
  spanish_expression?: {
    phrase: string;
    literal: string;
    meaning: string;
  };
  country?: string;
  countryFlag?: string;
  gender?: 'male' | 'female';
}

// Real reviews provided by the user, translated to English
const realReviews: GoogleReview[] = [
  {
    id: '1',
    author_name: 'Anonymous',
    profile_photo_url: '',
    rating: 5,
    text: 'I had a great time learning Spanish for 6 months. The classroom environment was fun, and I met many local people. Unforgettable memories!',
    time: Date.now() - 252288000000, // 8 years in milliseconds
    relative_time_description: '8 years ago',
    original_spanish: 'Pasé buen tiempo en esta escuela aprendiendo español durante 6 meses.',
    country: 'South Korea',
    countryFlag: '🇰🇷',
    gender: 'male'
  },
  {
    id: '2',
    author_name: 'Marta',
    profile_photo_url: '',
    rating: 5,
    text: 'I am currently taking English classes to obtain my B1 certification, while balancing it with my work. Flexible schedules. I recommend it 100%.',
    time: Date.now() - 220752000000, // 7 years in milliseconds
    relative_time_description: '7 years ago',
    country: 'Spain',
    countryFlag: '🇪🇸',
    gender: 'female'
  },
  {
    id: '3',
    author_name: 'Norman Nemitz',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia is a fantastic teacher! With her help, I learned the basics in just a few weeks. The small groups allowed me to enhance my personal strengths when learning languages.',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago',
    spanish_expression: {
      phrase: "¡Me quedé con la boca abierta!",
      literal: "I was left with an open mouth!",
      meaning: "I was amazed/speechless"
    },
    country: 'Germany',
    countryFlag: '🇩🇪',
    gender: 'male'
  },
  {
    id: '4',
    author_name: 'Michael Rafi',
    profile_photo_url: '',
    rating: 5,
    text: 'I HIGHLY recommend Virginia and this school. I took private classes 2 hours a day, 4 days a week during the two months I was visiting Malaga. Virginia tailored the classes exactly to what I needed and was a GREAT help. Every day we would have coffee together and talk for about an hour, and then in the second hour, we would move on to some workbook lessons. Virginia is a wonderful person and I really enjoyed my time at the school! 5 stars!!',
    time: Date.now() - 157680000000, // 5 years in milliseconds
    relative_time_description: '5 years ago',
    country: 'USA',
    countryFlag: '🇺🇸',
    gender: 'male'
  },
  {
    id: '5',
    author_name: 'Steve Noyce',
    profile_photo_url: '',
    rating: 5,
    text: 'My wife and I took conversation classes for several weeks this winter with Virginia. She was absolutely fantastic. We really enjoyed our time with her and loved hearing her stories. She is a wonderful woman with a great sense of humor and the hours talking with her flew by. When we return to Malaga, we will definitely take classes with her again.',
    time: Date.now() - 126144000000, // 4 years in milliseconds
    relative_time_description: '4 years ago',
    country: 'UK',
    countryFlag: '🇬🇧',
    gender: 'male'
  },
  {
    id: '6',
    author_name: 'Ruta Z.',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia teaches from the heart. My Spanish lessons were fun and informative. The school is in the heart of the city and makes you feel welcome.',
    time: Date.now() - 157680000000, // 5 years in milliseconds
    relative_time_description: '5 years ago',
    spanish_expression: {
      phrase: "¡Es la caña!",
      literal: "It's the cane/rod!",
      meaning: "It's awesome/amazing"
    },
    country: 'Lithuania',
    countryFlag: '🇱🇹',
    gender: 'female'
  },
  {
    id: '7',
    author_name: 'Anonymous',
    profile_photo_url: '',
    rating: 5,
    text: 'I love experiencing the real Spain by shopping at the market with my teacher, walking around the port, and having breakfast at cafes. Best for conversation!',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago',
    spanish_expression: {
      phrase: "¡Qué chulo!",
      literal: "How cool!",
      meaning: "That's amazing/awesome!"
    },
    country: 'Japan',
    countryFlag: '🇯🇵',
    gender: 'female'
  },
  {
    id: '8',
    author_name: 'Ahyeon Hwang',
    profile_photo_url: '',
    rating: 5,
    text: 'Hello everyone!! I\'m coming here to tell you about my charming teacher, mom (in Malaga), and friend!!! She is truly a great Spanish teacher. My Spanish is improving at an amazing pace. Unlike other academies in Malaga, our time is like a play, a party, and a class. I simply can\'t help but recommend this school to anyone who wants to learn Spanish. With her, every morning you can start with laughter and feel fresh. After finishing the class, I always look forward to tomorrow to spend my precious time with her. Ah!! You have to know this! Our class features an excellent view from the balcony, which makes the class more efficient, happy, and fresh. About the class, all our conversation is learning material, in other words, your way of speaking will get surprisingly better and better. I considered many schools when choosing and I highly recommend registering without thinking further. If you really want to learn Spanish, you should come here to get a native Spanish speaker!',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago',
    country: 'South Korea',
    countryFlag: '🇰🇷', 
    gender: 'female'
  }
];

// Array of image filenames for the gallery
const galleryImages = [
  'Alumnos_1.jpg',
  'Alumnos_2.jpg',
  'Alumnos_3.jpg',
  'Alumnos_4.jpg',
  'Alumnos_5.jpg',
  'Alumnos_6.jpg',
  'Alumnos_7.jpg',
  'Alumnos_8.jpg',
  'Alumnos_9.jpg',
  'Alumnos_10.jpg',
  'Alumnos_11.jpg',
  'Alumnos_12.jpg',
  'Alumnos_13.jpg',
  'Alumnos_14.jpg',
  'Alumnos_15.jpg',
  'Alumnos_16.jpg',
  'Alumnos_18.jpg',
  'Alumnos_19.jpg',
  'Alumnos_20.jpg',
  'Alumnos_21.jpg',
  'vinos.jpg',
  'tortilla.jpg'
];

// Funny Spanish expressions
const spanishExpressions = [
  {
    phrase: "¡Estar como una cabra!",
    literal: "To be like a goat",
    meaning: "To be crazy or eccentric"
  },
  {
    phrase: "Ser pan comido",
    literal: "To be eaten bread",
    meaning: "To be very easy, a piece of cake"
  },
  {
    phrase: "¡No tiene ni pies ni cabeza!",
    literal: "It has neither feet nor head",
    meaning: "It makes no sense at all"
  },
  {
    phrase: "Ponerse las pilas",
    literal: "To put in the batteries",
    meaning: "To get motivated and work hard"
  },
  {
    phrase: "¡Estoy hasta las narices!",
    literal: "I'm up to my nose",
    meaning: "I'm fed up/I've had enough"
  }
];

const Testimonials = () => {
  const reviews = realReviews;
  const totalReviews = realReviews.length;
  const [activeExpression, setActiveExpression] = useState<number | null>(null);
  
  // Function to generate random background color
  const getRandomBgColor = (name: string) => {
    const colors = ['bg-violet-100', 'bg-blue-100', 'bg-amber-100', 'bg-emerald-100', 'bg-rose-100'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Function to generate text color
  const getTextColor = (name: string) => {
    const colors = ['text-violet-600', 'text-blue-600', 'text-amber-600', 'text-emerald-600', 'text-rose-600'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Function to get gender emoji
  const getGenderEmoji = (review: GoogleReview) => {
    return review.gender === 'female' ? '👩' : '👨';
  };

  return (
    <section className="py-8 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-950 dark:to-indigo-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 py-16 px-6 mb-16 text-white text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="absolute top-10 right-10 -rotate-12">
            <span className="text-6xl">🌞</span>
          </div>
          <div className="absolute bottom-10 left-10 rotate-12">
            <span className="text-6xl">🇪🇸</span>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100"
            >
              Learn Spanish in Málaga
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-indigo-100 mb-8"
            >
              Create unforgettable memories while mastering a new language
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/booking" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-8 py-3 rounded-full shadow-lg shadow-indigo-500/20 transition transform hover:scale-105"
              >
                Book Free Trial Class
              </Link>
              <Link
                href="/about"
                className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full transition transform hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Spanish Expressions */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-3">
              <span className="mr-1">🇪🇸</span> Fun Spanish Expressions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              ¡Aprende expresiones divertidas!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {spanishExpressions.map((expression, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveExpression(activeExpression === index ? null : index)}
                className={`relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer transform transition-all ${activeExpression === index ? 'ring-2 ring-violet-500 dark:ring-violet-400' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <FaGlobe />
                  </div>
                  <div className="text-xl">🇪🇸</div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{expression.phrase}</h3>
                
                {activeExpression === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-1">
                      Literal: {expression.literal}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Means: {expression.meaning}
                    </p>
                  </motion.div>
                )}
                
                {activeExpression !== index && (
                  <div className="flex items-center text-xs text-violet-600 dark:text-violet-400 mt-2">
                    <FaPlus className="mr-1" /> Click to see meaning
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Gallery Grid */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-3">
              <span className="mr-1">📸</span> Gallery
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Memories in Málaga
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.03, zIndex: 10 }}
                className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md overflow-hidden h-[200px] md:h-[220px] relative group"
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src={`/spanish-classes-malaga/images/${image}`} 
                    alt={`Spanish learning in Málaga`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative my-16 max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl transform rotate-1 scale-[1.03] opacity-70 blur-xl"></div>
          <div className="relative bg-gradient-to-r from-blue-500 to-violet-500 p-8 md:p-10 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to speak Spanish?</h2>
                <p className="text-blue-100 mb-0">Join our vibrant community and start your language journey today!</p>
              </div>
              <Link 
                href="/booking" 
                className="flex items-center whitespace-nowrap bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-full shadow-lg shadow-blue-500/20 transition transform hover:scale-105"
              >
                Start Learning Now
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials section */}
        <div className="text-center mb-6">
          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-3">
            <span className="mr-1">❤️</span> Reviews
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            What Our Students Say
          </h2>
          <div className="flex justify-center mb-8">
            <Link href="https://g.co/kgs/GAXQqPf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              <FaGoogle className="mr-2" /> 5.0 on Google ({totalReviews} reviews)
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className={`relative w-12 h-12 rounded-full mr-3 overflow-hidden ${getRandomBgColor(review.author_name)} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-lg font-bold ${getTextColor(review.author_name)}`}>
                    {getGenderEmoji(review)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{review.author_name}</h4>
                    {review.countryFlag && <span className="text-lg">{review.countryFlag}</span>}
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {review.relative_time_description} {review.country && `· ${review.country}`}
                  </div>
                </div>
              </div>
              
              <div className="relative flex-grow">
                <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 dark:text-blue-900 opacity-50 w-6 h-6" />
                <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-5 pt-1 text-sm">
                  {review.text}
                  {review.spanish_expression && (
                    <span className="block mt-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded-md">
                      <span className="font-bold text-amber-600 dark:text-amber-400">{review.spanish_expression.phrase}</span>
                      <span className="block text-xs text-gray-500 italic">Literal: {review.spanish_expression.literal}</span>
                      <span className="block text-xs text-gray-600 dark:text-gray-400">Means: {review.spanish_expression.meaning}</span>
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <div className="text-3xl mb-3 text-blue-500">🚀</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Fast Progress</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">Quick results with our proven methods</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <div className="text-3xl mb-3 text-emerald-500">💬</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Speak From Day 1</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">Start communicating immediately</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <div className="text-3xl mb-3 text-amber-500">🏆</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Guaranteed Results</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">Achieve your language goals</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <div className="text-3xl mb-3 text-violet-500">🌞</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sunny Learning</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">Enjoy Spanish in beautiful Málaga</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 