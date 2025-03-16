'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MalagaExperience from './components/MalagaExperience';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Nuevo componente de Málaga Experience */}
      <MalagaExperience />
      
      <Testimonials />
      
      <ContactForm />
      <Footer />
    </main>
  );
}
