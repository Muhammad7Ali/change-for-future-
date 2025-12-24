import React from 'react';
import { FACTS } from '../constants';
import { AlertTriangle, Factory, TrendingDown, Users, LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  AlertTriangle,
  Factory,
  TrendingDown,
  Users,
};

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-black font-bold tracking-widest uppercase text-sm border-b-2 border-black pb-1">The Reality</span>
          <h2 className="mt-6 text-3xl leading-8 font-bold tracking-tight text-black sm:text-5xl">
            Understanding Child Labour
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto font-light">
            Child labour refers to work that deprives children of their childhood, education, and dignity. It is driven by poverty and systemic issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACTS.map((fact) => {
            const Icon = iconMap[fact.iconName] || Users;
            return (
              <div key={fact.id} className="bg-gray-50 p-8 rounded-none border-l-4 border-black hover:bg-gray-100 transition-colors flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <div>
                  <p className="text-lg text-gray-800 font-medium">{fact.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;