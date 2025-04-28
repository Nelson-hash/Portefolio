import { useState } from 'react';
import { images } from '../config/content';

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="h-screen pt-16 sm:pt-20 p-3 sm:p-6 flex items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 sm:gap-6 max-w-[1600px] mx-auto h-full">
        {/* Mobile Thumbnails - Horizontal Scroll */}
        <div className="lg:hidden w-full overflow-x-auto pb-4 mb-3">
          <div className="flex gap-3 min-w-max px-2">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`w-20 aspect-[3/4] cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  index === selectedIndex 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black/10' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowDescription(false);
                }}
              >
                <img
                  src={`/src/assets/images/gallery/${image.filename}`}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Left Thumbnails */}
        <div className="hidden lg:block w-24 xl:w-28 h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="flex flex-col gap-4 pr-2">
            {images.slice(0, Math.ceil(images.length / 2)).map((image, index) => (
              <div
                key={image.id}
                className={`aspect-[3/4] cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  index === selectedIndex 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black/10' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowDescription(false);
                }}
              >
                <img
                  src={`/src/assets/images/gallery/${image.filename}`}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 h-full flex items-center justify-center px-4">
          <div 
            className="relative h-full max-h-[calc(100vh-12rem)] aspect-[3/4] cursor-pointer group"
            onClick={() => setShowDescription(!showDescription)}
          >
            <img
              src={`/src/assets/images/gallery/${images[selectedIndex].filename}`}
              alt={images[selectedIndex].title}
              className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {showDescription && (
              <div className="absolute inset-0 bg-black/70 rounded-2xl sm:rounded-3xl flex items-center justify-center p-6 sm:p-12 transition-all duration-500">
                <div className="text-white max-w-lg">
                  <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-6 tracking-wider">
                    {images[selectedIndex].title}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed font-light tracking-wide">
                    {images[selectedIndex].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Right Thumbnails */}
        <div className="hidden lg:block w-24 xl:w-28 h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="flex flex-col gap-4 pl-2">
            {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
              <div
                key={image.id}
                className={`aspect-[3/4] cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  index + Math.ceil(images.length / 2) === selectedIndex 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black/10' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => {
                  setSelectedIndex(index + Math.ceil(images.length / 2));
                  setShowDescription(false);
                }}
              >
                <img
                  src={`/src/assets/images/gallery/${image.filename}`}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;