import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596525760888-009139906666?q=80&w=2070&auto=format&fit=crop" 
          alt="Street scene in Pakistan" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Child Labour in Pakistan:<br />
          <span className="text-gray-400">Awareness, Action, Hope</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
          Millions of children are forced into labor, sacrificing their education and childhood. 
          Join us in raising awareness and supporting the organizations fighting for their future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#problem" 
            onClick={(e) => handleScroll(e, '#problem')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-200 transition-colors"
          >
            Learn the Facts
          </a>
          <a 
            href="#action" 
            onClick={(e) => handleScroll(e, '#action')}
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            How to Help <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;