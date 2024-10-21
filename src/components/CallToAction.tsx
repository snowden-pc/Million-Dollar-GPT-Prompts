import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Supercharge Your AI Experience?</h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of innovators and creators who are leveraging our million-dollar GPT prompts to achieve extraordinary results.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-full hover:bg-indigo-50 transition-colors"
        >
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;