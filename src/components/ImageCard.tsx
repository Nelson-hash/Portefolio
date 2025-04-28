import { useState } from 'react';
import { ImageData } from '../data/images';

interface ImageCardProps {
  image: ImageData;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className={`aspect-[4/5] overflow-hidden ${!isLoaded ? 'bg-gray-200 dark:bg-gray-800 animate-pulse' : ''}`}>
        <img 
          src={image.url} 
          alt={image.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-110`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <h3 className="text-white font-medium text-lg mb-1 font-serif">{image.title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;