import React from 'react';
import { Briefcase, Lightbulb, Code, PenTool, Microscope, BookOpen } from 'lucide-react';

const categories = [
  { name: 'Business', icon: Briefcase },
  { name: 'Creativity', icon: Lightbulb },
  { name: 'Programming', icon: Code },
  { name: 'Writing', icon: PenTool },
  { name: 'Research', icon: Microscope },
  { name: 'Education', icon: BookOpen },
];

const PromptCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Prompt Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <category.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptCategories;