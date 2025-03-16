'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaCalendarDay, FaClock, FaComments, FaUsers, FaShieldAlt } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    date: '',
    time: '',
    service: '',
    groupSize: '1',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simulate available dates (in a real implementation, this would come from Google Calendar API)
  const availableDates = [];
  // Generate available dates for the next 30 days
  const today = new Date();
  for (let i = 1; i <= 30; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    // Exclude Sundays (0 is Sunday in JavaScript)
    if (nextDate.getDay() !== 0) {
      const dateString = nextDate.toISOString().split('T')[0];
      availableDates.push(dateString);
    }
  }

  // Simulate available time slots (in a real implementation, this would come from Google Calendar API)
  const availableTimes = [
    '09:00', '10:30', '12:00', '15:00', '16:30', '18:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      console.log('Form data:', formData);
      
      // Simulate a successful response after 1.5 seconds
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 8000);
    }
  };

  return (
    <div className="p-8">
      {formStatus === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
        >
          <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Submitted!</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Thanks for booking a class with us. You&apos;ll receive a confirmation email shortly with all the details.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            If you don&apos;t receive an email within the next few minutes, please check your spam folder.
          </p>
          <button
            onClick={() => setFormStatus('idle')}
            className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded transition-colors"
          >
            Book Another Class
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number (optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Spanish Level
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaGlobe className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (A1-A2)</option>
                    <option value="intermediate">Intermediate (B1-B2)</option>
                    <option value="advanced">Advanced (C1-C2)</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Class Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Class Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarDay className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  >
                    <option value="">Select a date</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaClock className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Class Type
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaComments className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  >
                    <option value="">Select class type</option>
                    <option value="individual">Individual Class</option>
                    <option value="couple">Couple/Friend Class</option>
                    <option value="online">Online Class</option>
                    <option value="business">Business Spanish</option>
                    <option value="exam">Exam Preparation (DELE/SIELE)</option>
                    <option value="conversation">Conversation Practice</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Number of Students
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUsers className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
              placeholder="Tell us about your learning goals, specific needs, or any questions you may have..."
            ></textarea>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaShieldAlt className="text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Your information is secure and encrypted</span>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-plan ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'btn-plan-primary'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Book Class'}
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-md text-center">
              <p className="text-red-600 dark:text-red-400">
                There was an error submitting your booking. Please try again or contact us directly.
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default BookingForm; 