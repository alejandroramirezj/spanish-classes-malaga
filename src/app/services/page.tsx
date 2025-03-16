import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserGraduate, FaUserFriends, FaLaptop, FaBookOpen, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Our Classes | Spanish Classes Malaga',
  description: 'Discover our personalized Spanish classes. We offer individual, paired, online, and specific purpose classes.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Spanish Classes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We offer a variety of options to suit your needs, goals, and availability. All our classes are personalized and flexible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Individual Classes */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-primary/10 h-64 flex items-center justify-center">
                  <p className="text-primary font-medium">Individual Spanish classes</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserGraduate className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Individual Classes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Individual classes offer maximum personalization and attention. They are perfect for those looking to progress quickly or who have specific needs.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Completely personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Faster and more efficient progress</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Flexible schedules adapted to you</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Focus on your areas of difficulty</span>
                  </li>
                </ul>
                
                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Price: From €25/hour</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discounts available for packages of 5, 10, or 20 classes</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-accent text-gray-900 font-medium px-6 py-2 rounded-full hover:bg-accent-light transition-colors shadow-md"
                >
                  Book Individual Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Paired Classes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/pair-class.jpg" 
                    alt="Spanish classes for pairs" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaUserFriends className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Paired Classes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Learn with your partner, friend, or colleague of the same level. Paired classes combine personalized attention with student interaction.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Conversation practice with another student</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Collaborative and motivating learning</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>More economical than individual classes</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Ideal for couples or friends traveling together</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Price: From €40/hour (€20 per person)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discounts available for packages of 5, 10, or 20 classes</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-accent text-gray-900 font-medium px-6 py-2 rounded-full hover:bg-accent-light transition-colors shadow-md"
                >
                  Book Paired Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Online Classes */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/online-class.jpg" 
                    alt="Online Spanish classes" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaLaptop className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Online Classes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Learn Spanish from anywhere in the world with our online classes. The same quality and personalized attention as in-person classes.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Total flexibility in schedules and location</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>High-quality digital materials</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Interactive and easy-to-use platform</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Continuous tracking of your progress</span>
                  </li>
                </ul>
                
                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Price: From €20/hour</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discounts available for packages of 5, 10, or 20 classes</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-accent text-gray-900 font-medium px-6 py-2 rounded-full hover:bg-accent-light transition-colors shadow-md"
                >
                  Book Online Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spanish for Specific Purposes */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/specialized-class.jpg" 
                    alt="Spanish for specific purposes" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-accent text-3xl mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Spanish for Specific Purposes
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Specialized courses for specific professional or academic needs. Learn vocabulary and structures relevant to your field.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Business Spanish (meetings, negotiations, presentations)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Spanish for tourism and hospitality</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Medical Spanish for healthcare professionals</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Spanish for academic and research purposes</span>
                  </li>
                </ul>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-6">
                  <p className="font-medium text-gray-900 dark:text-white">Price: From €30/hour</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Contact us for a personalized quote based on your specific needs</p>
                </div>
                
                <Link 
                  href="/booking" 
                  className="inline-block bg-accent text-gray-900 font-medium px-6 py-2 rounded-full hover:bg-accent-light transition-colors shadow-md"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional services */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Additional Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">DELE Exam Preparation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Specialized preparation for official DELE exams at all levels. Includes practice with previous exams and specific techniques to pass each section.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Price: From €28/hour</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Spanish Conversation Club</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Group sessions focused on conversation practice. Different topics each week and guided discussions to improve fluency and confidence.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Price: €15/session (90 minutes)</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Cultural Immersion Activities</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tours of Málaga, tapas nights, museum visits, and other cultural activities to practice Spanish in real contexts while enjoying the city.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Price: Varies by activity</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Spanish for Children</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Fun and dynamic classes adapted for children and adolescents. Games, songs, and interactive activities that make learning Spanish enjoyable.
                </p>
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <p className="font-medium">Price: From €22/hour</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 