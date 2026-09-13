import { use } from "react";
import type { TechItem } from "../App";

interface TechCardsProps {
  techPromise: Promise<TechItem[]>;
  handleAddToStack: (tech: TechItem) => void;
  stack: TechItem[];
}

const TechCards = ({ techPromise, handleAddToStack, stack }: TechCardsProps) => {
  const technologies = use(techPromise);

  return (
    <div className="w-full lg:w-2/3">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2">Pick one technology per category to build your ideal stack.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => {
          const isAdded = stack.some((item) => item.id === tech.id);

          return (
            <div key={tech.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col h-full hover:shadow-md transition-shadow">
              
              <div className="flex justify-between items-start mb-4">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                <span className="bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">{tech.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <span className="bg-gray-50 text-gray-600 text-[10px] font-medium px-2 py-1 rounded border border-gray-100">{tech.category}</span>
                  <span className="bg-gray-50 text-gray-600 text-[10px] font-medium px-2 py-1 rounded border border-gray-100">{tech.difficulty}</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                  <span className="text-yellow-400 text-lg">★</span> {tech.rating}
                </div>
              </div>
              
              <button 
                onClick={() => handleAddToStack(tech)}
                disabled={isAdded}
                className={`w-full font-medium py-2.5 rounded-lg transition-colors text-sm ${
                  isAdded ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-[#0f172a] hover:bg-gray-800 text-white'
                }`}
              >
                {isAdded ? '✓ Added' : 'Add to Stack'}
              </button>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCards;