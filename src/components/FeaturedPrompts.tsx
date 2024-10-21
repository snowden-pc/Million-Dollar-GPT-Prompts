import React from 'react';
import { Star } from 'lucide-react';

const featuredPrompts = [
  {
    title: 'Million Dollar GPT Prompts!',
    description: 'Secrets for Marketers, Influencers, Entrepreneurs, Engineers, and Everyone in Between.',
    price: 19.99,
    rating: 4.9,
  }
];

const FeaturedPrompts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Prompts</h2>
        <div className="flex justify-center">
          {featuredPrompts.map((prompt, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden max-w-md">
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
                <a
                  href="https://tensaiway.gumroad.com/l/million-dollar-gpt-prompts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 px-4 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrompts;
