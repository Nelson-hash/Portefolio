import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

interface NavigationProps {
  onAboutClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAboutClick }) => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 flex justify-between items-center backdrop-blur-sm bg-black/20">
      <Link
        to="/"
        className={`p-2 rounded-full transition-all duration-300 ${
          location.pathname === '/'
            ? 'bg-primary-600 text-white'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        <Home size={20} className="sm:w-6 sm:h-6" />
      </Link>
      
      <div className="flex gap-2 sm:gap-4">
        <Link
          to="/projects"
          className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-medium ${
            location.pathname === '/projects'
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          Projects
        </Link>
        <button
          onClick={onAboutClick}
          className="px-4 sm:px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm sm:text-base font-medium"
        >
          About
        </button>
      </div>
    </nav>
  );
}

export default Navigation;