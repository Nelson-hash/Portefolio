import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ImageData } from '../data/images';

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [animationState, setAnimationState] = useState<'entering' | 'entered' | 'exiting'>('entering');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
      
      // Enter animation
      setAnimationState('entering');
      const enterTimeout = setTimeout(() => {
        setAnimationState('entered');
      }, 50);
      
      // Clean up function
      return () => {
        clearTimeout(enterTimeout);
        document.body.style.overflow = '';
      };
    }
  }, [image]);

  if (!image) return null;

  const handleClose = () => {
    setAnimationState('exiting');
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 ${
        animationState === 'entering' ? 'opacity-0' : 
        animationState === 'entered' ? 'opacity-100' : 
        'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative max-w-screen-lg max-h-[90vh] w-full transition-all duration-500 ${
          animationState === 'entering' ? 'scale-95 opacity-0' : 
          animationState === 'entered' ? 'scale-100 opacity-100' : 
          'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <div className={`absolute inset-0 ${!isLoaded ? 'bg-gray-900 animate-pulse' : ''}`}></div>
          <img 
            src={image.url} 
            alt={image.title} 
            className={`w-full h-full object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h2 className="text-white text-2xl font-serif mb-2">{image.title}</h2>
          <p className="text-gray-200">{image.description}</p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-indigo-600/80 text-white text-xs font-medium">
            {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;