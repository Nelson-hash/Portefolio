import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import Projects from './components/Projects';
import AboutModal from './components/AboutModal';
import Navigation from './components/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedMode ? savedMode === 'true' : prefersDark;
    }
    return false;
  });

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Navigation onAboutClick={() => setIsAboutOpen(true)} />
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

export default App;