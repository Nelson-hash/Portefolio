import { Camera } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg)',
            backgroundPosition: 'center',
            willChange: 'transform',
            animation: 'slowZoom 20s ease-in-out infinite alternate'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-indigo-600/80 text-white">
          <Camera size={32} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
          Capturing Moments, 
          <span className="block mt-2">Creating Memories</span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          [...?]
        </p>
        
        <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          Explore Gallery
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-scrollBounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
