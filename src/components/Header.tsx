import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold tracking-tight transition-colors duration-300 text-gray-900 dark:text-white">
          <span className="text-indigo-600 dark:text-indigo-400">Pixel</span>Portfolio
        </h1>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Landscapes
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Portraits
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Abstract
                </a>
              </li>
            </ul>
          </nav>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                All
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Landscapes
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Portraits
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Abstract
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;