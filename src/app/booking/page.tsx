import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { FaCalendarAlt, FaClock, FaUserCheck, FaLaptop } from 'react-icons/fa';

export const metadata = {
  title: 'Book Your Class | Spanish Classes Malaga',
  description: 'Book your Spanish class with Virginia. Choose the day, time and type of class you prefer. Start your Spanish learning journey today!',
};

export default function BookingPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Book Your Spanish Class
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              You&apos;re just a few steps away from starting your Spanish learning journey! Complete the form below to book your class.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaCalendarAlt className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Choose Your Date</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Select the day that best fits your schedule.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaClock className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Select Your Time</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Choose a time that works for you.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaUserCheck className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Class Type</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Individual, couples, or specialized classes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                    <FaLaptop className="text-amber-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Format</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  In-person in Malaga or online via Zoom.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-600">
                <h2 className="text-2xl font-bold text-white text-center">Book Your Class Now</h2>
              </div>
              
              <BookingForm />
            </div>
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Booking Information</h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before the class. Late cancellations will be charged 50% of the class price.
                </p>
                
                <p>
                  <strong>Payment:</strong> Payment can be made via bank transfer, PayPal, or cash (for in-person classes) after booking confirmation.
                </p>
                
                <p>
                  <strong>Location:</strong> In-person classes take place in central Málaga. The exact location will be shared after booking.
                </p>
                
                <p>
                  <strong>Online Classes:</strong> Online classes are conducted via Zoom. A link will be sent to you after booking confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 