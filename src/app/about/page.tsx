import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGraduationCap, FaBook, FaUserFriends, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Virginia | Spanish Classes Malaga',
  description: 'Meet Virginia, a native Spanish teacher with over 10 years of experience teaching students from all over the world.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white relative inline-block">
              About Virginia
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full"></div>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-2xl h-80 flex items-center justify-center relative image-frame">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0"></div>
                  <Image 
                    src="/spanish-classes-malaga/images/virginia.jpg" 
                    alt="Virginia - Spanish Teacher"
                    fill
                    className="object-cover z-10"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-accent relative inline-block">
                  Hello! I&apos;m Virginia
                  <div className="absolute -bottom-2 left-0 right-0 h-[0.15em] bg-accent/50 rounded-full"></div>
                </h2>
                <div className="highlight-box mb-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Native Spanish teacher with over 10 years of experience teaching students from all over the world. My passion is helping people communicate effectively and naturally in Spanish.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I believe the best way to learn a language is through meaningful communication. My teaching approach focuses on practical conversation from day one, using real-life situations that matter to you.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="flex items-center text-primary">
                    <FaGraduationCap className="mr-2" />
                    <span className="font-medium">Master&apos;s in Teaching Spanish</span>
                  </div>
                </div>
                <Link href="/booking" className="btn-plan btn-plan-primary">
                  Book a Free Trial Class
                </Link>
              </div>
            </div>
            
            {/* Teaching Philosophy */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white relative inline-block">
                My Teaching Philosophy
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full inline-block mb-4">
                    <FaBook className="text-2xl text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Practical Learning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We focus on communication from day one. You&apos;ll learn vocabulary and phrases you can immediately use in real-life situations. No boring exercises or useless phrases.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full inline-block mb-4">
                    <FaUserFriends className="text-2xl text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Personalized Approach</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Each student has unique needs, interests, and learning styles. I adapt my teaching methods to your specific goals, whether for work, travel, or personal enrichment.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full inline-block mb-4">
                    <FaGlobe className="text-2xl text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Cultural Immersion</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Language and culture are inseparable. You&apos;ll learn Spanish in its cultural context, understanding nuances, idioms, and cultural references that make your Spanish sound natural.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Enjoyable Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Learning should be fun! I create a relaxed, supportive environment where you feel comfortable practicing and making mistakes. We&apos;ll laugh, chat, and learn together.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white relative inline-block">
                Student Testimonials
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                      <span className="text-xl">🇺🇸</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">New York, USA</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &quot;Virginia is an exceptional teacher. Her method made me feel confident speaking Spanish from our very first class. After just a few months, I could have real conversations while traveling in Spain.&quot;
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                      <span className="text-xl">🇩🇪</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Thomas Müller</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Berlin, Germany</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &quot;I needed Spanish for my new job, and Virginia tailored the classes perfectly for my professional needs. She made complex grammar concepts seem easy and fun to learn.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to start your Spanish journey?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute trial class to discuss your goals and experience my teaching approach firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-plan btn-plan-primary">
                  Book Your Free Trial
                </Link>
                <Link href="/contact" className="btn-plan btn-plan-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 