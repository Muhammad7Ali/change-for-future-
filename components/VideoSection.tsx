import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoUrl = "https://youtu.be/vDaEztb1rtE";
  // extracting the video ID (vDaEztb1rtE) to get the specific thumbnail from YouTube
  const thumbnailUrl = "https://img.youtube.com/vi/vDaEztb1rtE/maxresdefault.jpg";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-black font-bold tracking-widest uppercase text-sm border-b-2 border-black pb-1">Watch the Reality</span>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Unseen Chains</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Witness the stories of resilience and struggle. This documentary sheds light on the daily lives of children working in Pakistan's industrial and agricultural sectors.
          </p>
        </div>
        
        <div className="relative group">
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative pt-[56.25%] bg-black rounded-sm overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Background Image */}
            <img 
              src={thumbnailUrl} 
              alt="Documentary Thumbnail" 
              className="absolute top-0 left-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-60 transition-opacity duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                   <Play className="h-6 w-6 text-black fill-black ml-1" />
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-3 py-1 backdrop-blur-md">
              Watch on YouTube
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;