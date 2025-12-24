import React from 'react';
import { NGOS } from '../constants';
import { ExternalLink, Globe } from 'lucide-react';

const NgoSection: React.FC = () => {
  return (
    <section id="organizations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-black font-bold tracking-widest uppercase text-sm border-b-2 border-black pb-1">Who is Fighting?</span>
          <h2 className="mt-6 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organizations Making a Difference
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto font-light">
            These organizations are actively working to reduce and eliminate child labour in Pakistan through education, legal support, and advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NGOS.map((ngo) => (
            <div key={ngo.name} className="flex flex-col bg-white shadow-sm border border-gray-200 hover:shadow-xl hover:border-black transition-all duration-300">
              <div className="h-2 bg-black w-full"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{ngo.name}</h3>
                  <Globe className="text-black h-5 w-5" />
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-black bg-gray-100 px-2 py-1 uppercase tracking-wide">
                    Focus
                  </span>
                  <p className="mt-2 text-gray-700 font-medium">{ngo.focus}</p>
                </div>
                
                <div className="mb-6 flex-1">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Work
                  </span>
                  <p className="mt-1 text-gray-600 text-sm">{ngo.work}</p>
                </div>

                <a 
                  href={ngo.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center w-full px-4 py-3 border border-black text-black hover:bg-black hover:text-white transition-all font-medium text-sm group"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NgoSection;