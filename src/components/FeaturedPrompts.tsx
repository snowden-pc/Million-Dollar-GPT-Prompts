import React from 'react';
import { Star } from 'lucide-react';

const featuredPrompts = [
  {
    title: 'AI-Powered Business Strategy',
    description: 'Develop comprehensive business strategies with AI assistance.',
    price: 299,
    rating: 4.9,
  },
  {
    title: 'Creative Writing Masterclass',
    description: 'Generate captivating stories and characters with AI prompts.',
    price: 199,
    rating: 4.8,
  },
  {
    title: 'Code Optimization Genius',
    description: 'Enhance your coding skills and optimize algorithms effortlessly.',
    price: 249,
    rating: 4.7,
  },
];

const FeaturedPrompts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Prompts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrompts.map((prompt, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{prompt.title}</h3>
                <p className="text-gray-600 mb-4">{prompt.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">${prompt.price}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600">{prompt.rating}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrompts;