import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-800">PromptGenius</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Categories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;