'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

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
}

// Real reviews provided by the user, translated to English
const realReviews: GoogleReview[] = [
  {
    id: '1',
    author_name: 'Anonymous',
    profile_photo_url: '',
    rating: 5,
    text: 'I had a great time at this school learning Spanish for 6 months. The classroom environment was very good and fun, which is why I was able to enjoy studying Spanish without difficulty while meeting so many local people. I never regret studying at this school and I will never forget the unforgettable memories. Before leaving for my country, I leave my comment on this page so they can see the information and various photos of this school.',
    time: Date.now() - 252288000000, // 8 years in milliseconds
    relative_time_description: '8 years ago',
    original_spanish: 'Pasé buen tiempo en esta escuela aprendiendo español durante 6 meses.'
  },
  {
    id: '2',
    author_name: 'Marta',
    profile_photo_url: '',
    rating: 5,
    text: 'I am currently taking English classes to obtain my B1 certification, while balancing it with my work. Flexible schedules. I recommend it 100%.',
    time: Date.now() - 220752000000, // 7 years in milliseconds
    relative_time_description: '7 years ago'
  },
  {
    id: '3',
    author_name: 'Norman Nemitz',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia is a fantastic teacher and I highly recommend her language school. With no previous knowledge, with Virginia\'s help, I learned the basics of this beautiful language in just a few weeks and had a lot of fun doing it. Besides the basics of grammar, the main thing is to speak the language with confidence, and now I can say I can communicate on almost any topic. With her warm character and fun personality, Virginia creates an atmosphere of well-being when learning a language so different from what you\'re used to in other language schools. The small group classes or individual language courses allow you to enhance your personal strengths and areas for development when learning languages, which helped me a lot. In small groups, you get to know each other much better than in large groups and can learn from each other. For those planning a language trip to Malaga, Virginia\'s language school is also ideal, as she rents apartments to language travelers in the heart of old town Malaga and in the same building. For language travelers, she offers a nice support program that shows them the authentic Malaga and allows them to immerse themselves in Spanish/Andalusian culture. For all these reasons, I give Virginia School in Malaga 5 stars. Thank you Virginia for everything!',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago',
    spanish_expression: {
      phrase: "¡Me quedé con la boca abierta!",
      literal: "I was left with an open mouth!",
      meaning: "I was amazed/speechless"
    }
  },
  {
    id: '4',
    author_name: 'Michael Rafi',
    profile_photo_url: '',
    rating: 5,
    text: 'I HIGHLY recommend Virginia and this school. I took private classes 2 hours a day, 4 days a week during the two months I was visiting Malaga. Virginia tailored the classes exactly to what I needed and was a GREAT help. Every day we would have coffee together and talk for about an hour, and then in the second hour, we would move on to some workbook lessons. Virginia is a wonderful person and I really enjoyed my time at the school! 5 stars!!',
    time: Date.now() - 157680000000, // 5 years in milliseconds
    relative_time_description: '5 years ago'
  },
  {
    id: '5',
    author_name: 'Steve Noyce',
    profile_photo_url: '',
    rating: 5,
    text: 'My wife and I took conversation classes for several weeks this winter with Virginia. She was absolutely fantastic. We really enjoyed our time with her and loved hearing her stories. She is a wonderful woman with a great sense of humor and the hours talking with her flew by. When we return to Malaga, we will definitely take classes with her again.',
    time: Date.now() - 126144000000, // 4 years in milliseconds
    relative_time_description: '4 years ago'
  },
  {
    id: '6',
    author_name: 'Ruta Z.',
    profile_photo_url: '',
    rating: 5,
    text: 'Virginia is an incredible teacher, friendly, attentive, and teaches from the heart. My Spanish lessons were fun and very informative, and as someone new to the language, I learned a lot. The school is in the heart of the city and is easy to get around, plus it\'s very bright and makes you feel welcome and happy at all times. Very grateful for the opportunity to be her student, thank you for everything. Highly recommended! I love Virginia\'s school ®',
    time: Date.now() - 157680000000, // 5 years in milliseconds
    relative_time_description: '5 years ago',
    spanish_expression: {
      phrase: "¡Es la caña!",
      literal: "It's the cane/rod!",
      meaning: "It's awesome/amazing"
    }
  },
  {
    id: '7',
    author_name: 'Anonymous',
    profile_photo_url: '',
    rating: 5,
    text: 'At first I was worried because there weren\'t many reviews about this academy, but I love it!! I chose to improve my conversation skills and it was really useful to be able to talk continuously with the teacher, instead of having a group of students gathered and only being able to talk a little bit like in a normal language school. I love being able to experience the real Spain by shopping at the market with my teacher every morning, walking around the port, and having breakfast at a nearby cafe. It\'s the best academy for conversation!!',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago'
  },
  {
    id: '8',
    author_name: 'Ahyeon Hwang',
    profile_photo_url: '',
    rating: 5,
    text: 'Hello everyone!! I\'m coming here to tell you about my charming teacher, mom (in Malaga), and friend!!! She is truly a great Spanish teacher. My Spanish is improving at an amazing pace. Unlike other academies in Malaga, our time is like a play, a party, and a class. I simply can\'t help but recommend this school to anyone who wants to learn Spanish. With her, every morning you can start with laughter and feel fresh. After finishing the class, I always look forward to tomorrow to spend my precious time with her. Ah!! You have to know this! Our class features an excellent view from the balcony, which makes the class more efficient, happy, and fresh. About the class, all our conversation is learning material, in other words, your way of speaking will get surprisingly better and better. I considered many schools when choosing and I highly recommend registering without thinking further. If you really want to learn Spanish, you should come here to get a native Spanish speaker!',
    time: Date.now() - 189216000000, // 6 years in milliseconds
    relative_time_description: '6 years ago'
  }
];

// Information for content blocks that replace photos
const contentBlocks = [
  {
    emoji: '🌊',
    title: 'Immersive Experiences',
    description: 'Total immersion in Spanish culture'
  },
  {
    emoji: '🗣️',
    title: 'Practical Conversation',
    description: 'Focus on speaking Spanish from day one'
  },
  {
    emoji: '📚',
    title: 'Effective Methods',
    description: 'Learning based on real-life situations'
  },
  {
    emoji: '🏙️',
    title: 'Cultural Málaga',
    description: 'Discover local history and traditions'
  },
  {
    emoji: '🎭',
    title: 'Social Events',
    description: 'Participate in activities with other students'
  },
  {
    emoji: '🎓',
    title: 'DELE Certifications',
    description: 'Preparation for official exams'
  },
  {
    emoji: '✈️',
    title: 'Study in Spain',
    description: 'The best way to learn Spanish'
  }
];

const Testimonials = () => {
  const reviews = realReviews;
  const totalReviews = realReviews.length;

  // Function to generate random background color for each avatar
  const getRandomBgColor = (name: string) => {
    const colors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-amber-100', 'bg-red-100', 'bg-pink-100'];
    // We use the name as a seed to generate a consistent color for the same author
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Function to generate text color that contrasts with the background
  const getTextColor = (name: string) => {
    const colors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-amber-600', 'text-red-600', 'text-pink-600'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* New content blocks section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <span className="mr-1">🎉</span> Learn Spanish in Málaga
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
              Real Experiences in Málaga
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our students enjoy learning Spanish while immersing themselves in Spanish culture and creating unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contentBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ 
                  height: index === 0 ? '300px' : '180px',
                }}
                className={`relative overflow-hidden rounded-xl shadow-lg ${
                  index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 from-amber-500 to-amber-300' : 
                  index % 6 === 1 ? 'from-blue-500 to-blue-300' :
                  index % 6 === 2 ? 'from-green-500 to-green-300' :
                  index % 6 === 3 ? 'from-purple-500 to-purple-300' :
                  index % 6 === 4 ? 'from-red-500 to-red-300' :
                  'from-pink-500 to-pink-300'
                } bg-gradient-to-br`}
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-white">
                  <div className="text-4xl mb-3">{block.emoji}</div>
                  <h3 className={`${index === 0 ? 'text-2xl' : 'text-lg'} font-bold text-center`}>
                    {block.title}
                  </h3>
                  {index === 0 ? (
                    <p className="text-white/90 mt-2 text-center">{block.description}</p>
                  ) : (
                    <p className="text-white/80 mt-1 text-sm text-center">{block.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="text-center mb-8">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center mb-4">
            <span className="mr-1">❤️</span> Verified Google Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
          <div className="flex justify-center">
            <Link href="https://g.co/kgs/GAXQqPf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              <FaGoogle className="mr-2" /> 5.0 on Google ({totalReviews} reviews)
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className={`relative w-12 h-12 rounded-full mr-3 overflow-hidden ${getRandomBgColor(review.author_name)} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-lg font-bold ${getTextColor(review.author_name)}`}>
                    {review.author_name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{review.author_name}</h4>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {review.relative_time_description}
                  </div>
                </div>
              </div>
              
              <div className="relative flex-grow">
                <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 dark:text-blue-900 opacity-50 w-8 h-8" />
                <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-6 pt-2 text-sm">
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
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="p-6 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
            <h3 className="text-xl font-bold mb-3">Want Similar Results?</h3>
            <Link 
              href="/booking" 
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Book Your Free Trial Class
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mt-10 text-center">
          <div className="p-4">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Rapid Progress</h4>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Speaking from Day 1</h4>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Guaranteed Results</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 