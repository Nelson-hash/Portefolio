import { Camera, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Camera className="text-indigo-600 dark:text-indigo-400 mr-2" size={28} />
              <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                <span className="text-indigo-600 dark:text-indigo-400">Pixel</span>Portfolio
              </h2>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Capturing beautiful moments and showcasing them in unique ways since 2023.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} PixelPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;