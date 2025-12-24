import React from 'react';
import { IMPACTS } from '../constants';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-bold sm:text-5xl mb-8">Impact on Children and Society</h2>
            <p className="text-gray-400 text-lg mb-6 font-light leading-relaxed">
              Child labour affects children physically, mentally, and emotionally. It denies them education and increases vulnerability to abuse and exploitation.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              A society that allows child labour weakens its future workforce and economic growth, creating a cycle that is hard to break.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {IMPACTS.map((impact, index) => (
              <div key={index} className="bg-zinc-900/50 p-6 border border-zinc-800 hover:border-white transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{impact.title}</h3>
                <p className="text-gray-400">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;