import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromptCategories from './components/PromptCategories';
import FeaturedPrompts from './components/FeaturedPrompts';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <PromptCategories />
        <FeaturedPrompts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;