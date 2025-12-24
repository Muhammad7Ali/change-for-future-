import React from 'react';
import { HeartHandshake } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="about" className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <HeartHandshake className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">ChangeForFuture</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm font-light mb-6">
              This platform is a student-led initiative designed to bring the hidden reality of child labour in Pakistan to the digital forefront. We believe that education and awareness are the first steps towards legislative and social change.
            </p>
            <div className="text-sm text-gray-500 font-mono">
              Project ID: CLA-PAK-2024
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Navigation</h3>
             <ul className="space-y-3 text-gray-400 font-light">
               <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
               <li><a href="#problem" onClick={(e) => handleScroll(e, '#problem')} className="hover:text-white transition-colors">The Problem</a></li>
               <li><a href="#impact" onClick={(e) => handleScroll(e, '#impact')} className="hover:text-white transition-colors">Impact</a></li>
               <li><a href="#organizations" onClick={(e) => handleScroll(e, '#organizations')} className="hover:text-white transition-colors">Organizations</a></li>
               <li><a href="#action" onClick={(e) => handleScroll(e, '#action')} className="hover:text-white transition-colors">How to Help</a></li>
             </ul>
          </div>

          <div className="md:col-span-3">
             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Resources</h3>
             <ul className="space-y-3 text-gray-400 font-light">
               <li><a href="https://www.ilo.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ILO Conventions</a></li>
               <li><a href="https://www.unicef.org/pakistan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">UNICEF Pakistan</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Legal Framework</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Student Resources</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Student Awareness Initiative. Educational Purpose Only.</p>
          <p className="mt-2 md:mt-0">Created by Muhammad Ali L1S25BSCS0025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;