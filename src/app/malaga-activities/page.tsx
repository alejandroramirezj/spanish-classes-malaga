'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkedAlt, FaInfoCircle, FaWineGlassAlt, FaUtensils, FaWalking, FaUsers, FaGuitar, FaTheaterMasks, FaUmbrellaBeach, FaShoppingBasket, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Interface para expresiones españolas
interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

// Componente para mostrar expresiones españolas con tooltip
const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-accent decoration-2 cursor-pointer font-bold text-accent dark:text-accent-light flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-accent/5 hover:bg-accent/10"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression}
        <FaInfoCircle className="text-xs text-accent animate-pulse group-hover:animate-none" />
      </span>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-accent/20"
        >
          <div className="relative">
            <p className="font-bold text-accent dark:text-accent-light">{expression}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Todas las actividades inmersivas de Málaga
const allMalagaActivities = [
  {
    icon: <FaWineGlassAlt className="text-primary text-xl" />,
    title: "Wine Tasting Tours",
    description: "Visit local vineyards and learn Spanish while enjoying the best wines from Málaga. We&apos;ll practice vocabulary related to flavors, aromas, and winemaking traditions.",
    expression: { expression: "Estar en la gloria", literal: "to be in heaven", meaning: "to be in absolute bliss" },
    image: "/images/activities/wine-tasting.jpg",
    difficulty: "Beginner-Friendly"
  },
  {
    icon: <FaUtensils className="text-primary text-xl" />,
    title: "Cooking Classes",
    description: "Learn to make authentic Spanish tortilla, gazpacho, and tapas while practicing conversation. We&apos;ll cover cooking vocabulary and traditional Spanish recipes.",
    expression: { expression: "Chuparse los dedos", literal: "to lick your fingers", meaning: "something delicious" },
    image: "/images/activities/cooking.jpg",
    difficulty: "All Levels"
  },
  {
    icon: <FaWalking className="text-primary text-xl" />,
    title: "Cultural Walking Tours",
    description: "Explore the historic streets of Málaga while learning practical Spanish vocabulary. Visit Picasso Museum, the Alcazaba, and the Cathedral with Spanish explanations.",
    expression: { expression: "De pe a pa", literal: "from P to P", meaning: "thoroughly/completely" },
    image: "/images/activities/walking-tour.jpg",
    difficulty: "All Levels"
  },
  {
    icon: <FaUsers className="text-primary text-xl" />,
    title: "Language Exchange",
    description: "Connect with locals and practice Spanish in authentic conversation settings. Weekly meetings at local cafés to practice with native Spanish speakers.",
    expression: { expression: "Hablar por los codos", literal: "to talk through the elbows", meaning: "to talk a lot" },
    image: "/images/activities/language-exchange.jpg",
    difficulty: "Intermediate"
  },
  {
    icon: <FaGuitar className="text-primary text-xl" />,
    title: "Flamenco Experience",
    description: "Learn about flamenco traditions, basic dance steps, and the vocabulary of this passionate art form. Includes a visit to an authentic tablao in Málaga.",
    expression: { expression: "Tener duende", literal: "to have a goblin", meaning: "to have a special charm or magic" },
    image: "/images/activities/flamenco.jpg",
    difficulty: "Beginner-Friendly"
  },
  {
    icon: <FaTheaterMasks className="text-primary text-xl" />,
    title: "Spanish Theater Workshop",
    description: "Improve your pronunciation and expression through role-playing and short theater exercises in Spanish. Culminates in a mini-performance.",
    expression: { expression: "Meterse en el papel", literal: "to get into the paper", meaning: "to get into character/role" },
    image: "/images/activities/theater.jpg",
    difficulty: "Intermediate-Advanced"
  },
  {
    icon: <FaUmbrellaBeach className="text-primary text-xl" />,
    title: "Beach Conversation Club",
    description: "Practice Spanish in a relaxed beach setting. Learn vocabulary related to the beach, swimming, and coastal life while enjoying Málaga&apos;s beautiful beaches.",
    expression: { expression: "Pasarlo bomba", literal: "to pass it bomb", meaning: "to have a great time" },
    image: "/images/activities/beach.jpg",
    difficulty: "All Levels"
  },
  {
    icon: <FaShoppingBasket className="text-primary text-xl" />,
    title: "Market Visit & Negotiation",
    description: "Visit the Atarazanas Market to practice ordering food, asking for prices, and negotiating in Spanish. Learn about local products and gastronomy.",
    expression: { expression: "A ojo de buen cubero", literal: "in the eye of a good barrel maker", meaning: "to estimate by eye/approximately" },
    image: "/images/activities/market.jpg",
    difficulty: "Beginner-Intermediate"
  },
];

export default function MalagaActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] z-0"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-[100px] z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                Learning through experience
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Immersive Activities in <span className="text-primary">Málaga</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Experience the Spanish language in its natural habitat. Learning while doing is the fastest way to fluency. As we say in Spain, <SpanishExpression expression="la práctica hace al maestro" literal="practice makes the master" meaning="practice makes perfect" />.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Reserva tu experiencia inmersiva
                  <FaArrowRight />
                </Link>
                
                <Link 
                  href="#activities" 
                  className="btn-plan btn-plan-secondary"
                >
                  Explora todas las actividades
                  <FaMapMarkedAlt />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Social Proof Section al estilo Marc Lou */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                Estudiantes satisfechos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Más de 500 estudiantes confían en mi método
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Únete a cientos de estudiantes que ya han transformado su experiencia aprendiendo español
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Estudiantes felices</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600 dark:text-gray-400">Países de origen</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Años enseñando</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-gray-600 dark:text-gray-400">Valoración media</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🇺🇸</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">Estados Unidos</span>
              </div>
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🇬🇧</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">Reino Unido</span>
              </div>
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🇩🇪</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">Alemania</span>
              </div>
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🇫🇷</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">Francia</span>
              </div>
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🇮🇹</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">Italia</span>
              </div>
              <div className="inline-flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="mr-2">🌎</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">+25 países más</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* About immersive learning */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Immersive Learning Works</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Research shows that immersion is the most effective way to learn a language. When you combine focused learning with real-world experiences, your brain creates stronger neural connections and retains information better. That&apos;s why my students who participate in these activities progress <span className="font-bold text-primary">3x faster</span> than with traditional methods alone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Deeper Memory</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When language is tied to experiences, your brain creates multiple pathways to access that knowledge.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Natural Context</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Learn how language is actually used by natives in real situations, not artificial examples.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">😊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Enjoyable Practice</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You&apos;ll be having so much fun that you won&apos;t even realize how much you&apos;re learning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* All activities */}
        <section id="activities" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                Choose your adventure
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-white"
              >
                Spanish Learning Activities
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-700 dark:text-gray-300"
              >
                All activities include focused language preparation, the experience itself, and a follow-up session to reinforce what you&apos;ve learned.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMalagaActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10"></div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-primary px-3 py-1 rounded-full text-sm font-semibold z-10">
                      {activity.difficulty}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        {activity.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{activity.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{activity.description}</p>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      You&apos;ll learn to say: <SpanishExpression 
                        expression={activity.expression.expression} 
                        literal={activity.expression.literal} 
                        meaning={activity.expression.meaning} 
                      />
                    </p>
                  </div>
                  
                  <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                    <Link 
                      href="/booking?activity={activity.title}" 
                      className="btn-plan btn-plan-primary"
                    >
                      Reserve this activity
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Can&apos;t find what you&apos;re looking for? I can customize activities based on your interests and Spanish level.
              </p>
              <Link 
                href="/contact" 
                className="btn-plan btn-plan-primary"
              >
                Request a custom activity
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                What Students Say About Our Activities
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Don&apos;t just take my word for it. Here&apos;s what previous students have experienced.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🇺🇸</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sarah T.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Wine Tasting Tour</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300">
                  &ldquo;The wine tasting tour was incredible! I learned so much Spanish vocabulary related to wine, and Virginia made sure we practiced in a relaxed environment. I&apos;ve retained those words much better than anything I&apos;ve learned in traditional classes.&rdquo;
                </blockquote>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🇬🇧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">James B.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Cultural Walking Tour</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300">
                  &ldquo;Walking through Málaga while learning Spanish was a game-changer for me. Virginia customized the tour to include architecture vocabulary since I&apos;m an architect. I was surprised how quickly I picked up technical terms when seeing the actual buildings!&rdquo;
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Ready to experience Spanish like a local?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Book your immersive Spanish experience today and start speaking with confidence. As they say in Spain, <SpanishExpression expression="el que no arriesga, no gana" literal="who doesn't risk, doesn't win" meaning="nothing ventured, nothing gained" />.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/booking" 
                  className="btn-plan btn-plan-primary"
                >
                  Book your immersive experience
                  <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 