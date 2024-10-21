import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Unlock the Power of <span className="text-indigo-600">Million-Dollar GPT Prompts</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Elevate your AI interactions with our curated collection of high-impact prompts. Designed for innovators, creators, and problem-solvers.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Explore Prompts <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;