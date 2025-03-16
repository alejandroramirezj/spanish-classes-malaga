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
                  I was born and raised in Málaga, a beautiful coastal city in southern Spain. I studied Hispanic Philology at the University of Málaga and hold a Master&apos;s Degree in Teaching Spanish as a Foreign Language.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Throughout my career, I&apos;ve had the privilege of teaching students from more than 30 different countries, adapting my method to each student&apos;s specific needs.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full mr-4">
                    <FaGraduationCap className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Academic Background</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Degree in Hispanic Philology - University of Málaga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Master&apos;s in Teaching Spanish as a Foreign Language - University of Salamanca</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Certificate of Pedagogical Aptitude (CAP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>DELE Certification (Official Examiner)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full mr-4">
                    <FaBook className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Methodology</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My teaching approach is communicative and student-centered. I believe that learning a language should be:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Practical and based on real-life situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Fun and motivational</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Adapted to your interests and needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Integrated with cultural elements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white relative inline-block">
                Professional Experience
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full"></div>
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6 py-4 hover:bg-accent/5 transition-colors rounded-r-lg">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Málaga Language Academy | 2015 - Present
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Spanish teacher for all levels. Individual and group classes. Preparation for DELE exams.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6 py-4 hover:bg-accent/5 transition-colors rounded-r-lg">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="text-accent mr-2">•</span>
                    International University of Andalusia | 2013 - 2015
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Assistant professor in the Spanish for foreigners program. Development of teaching materials.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6 py-4 hover:bg-accent/5 transition-colors rounded-r-lg">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Spanish Classes Malaga | 2010 - Present
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Founder and main teacher. Personalized classes for students from around the world. Cultural visits and complementary activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-accent/10 dark:bg-accent/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                    <FaUserFriends className="text-accent text-3xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">+500</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Students</p>
              </div>
              
              <div className="bg-accent/10 dark:bg-accent/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                    <FaGlobe className="text-accent text-3xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">+30</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Countries</p>
              </div>
              
              <div className="bg-accent/10 dark:bg-accent/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                    <FaBook className="text-accent text-3xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">+10</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Years of experience</p>
              </div>
              
              <div className="bg-accent/10 dark:bg-accent/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                    <FaGraduationCap className="text-accent text-3xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">100%</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Satisfaction</p>
              </div>
            </div>
            
            <div className="text-center py-8 px-6 glassmorphism dark:glassmorphism-dark rounded-2xl shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to start your Spanish journey?
              </h2>
              <Link 
                href="/booking" 
                className="btn-plan btn-plan-primary"
              >
                Book your first class
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 