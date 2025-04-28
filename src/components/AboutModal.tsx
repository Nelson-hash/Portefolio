import { useEffect } from 'react';
import { siteConfig } from '../config/content';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-black/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl sm:text-4xl font-light tracking-wider mb-4 sm:mb-6">{siteConfig.title}</h2>
        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
          {siteConfig.description}
        </p>
        <button
          onClick={onClose}
          className="px-4 sm:px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;