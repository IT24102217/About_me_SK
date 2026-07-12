import React, { useState, useEffect } from 'react';
import './App.css';
import SKLogo from './components/SKLogo';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Trading from './components/Trading';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading and hide loader after minimum display time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Komal_Dissanayaka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* WhatsApp Floating Button - Always visible */}
      <a 
        href="https://wa.me/94713419970" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Contact via WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.973 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62c0 7.51-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.317-0.116-0.548-0.174-0.779 0.174s-0.895 1.123-1.098 1.354c-0.203 0.232-0.405 0.26-0.751 0.087s-1.466-0.54-2.791-1.721c-1.032-0.92-1.729-2.057-1.931-2.403s-0.022-0.536 0.152-0.709c0.157-0.156 0.348-0.405 0.522-0.608s0.231-0.347 0.347-0.578 0.058-0.434-0.029-0.608c-0.087-0.174-0.779-1.88-1.068-2.574-0.281-0.676-0.567-0.584-0.779-0.596-0.202-0.012-0.433-0.014-0.665-0.014s-0.608 0.087-0.927 0.434c-0.319 0.347-1.218 1.19-1.218 2.902s1.247 3.366 1.421 3.597c0.174 0.232 2.445 3.733 5.922 5.235 0.827 0.357 1.473 0.571 1.977 0.731 0.831 0.263 1.586 0.226 2.183 0.137 0.666-0.099 2.049-0.837 2.338-1.646s0.289-1.501 0.202-1.646c-0.087-0.146-0.319-0.232-0.666-0.405z"/>
        </svg>
      </a>

      {/* Scroll to Top Button - Always visible when scrolled */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" className="scroll-icon">
            <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      )}

      {loading ? (
        <div className="loader-wrapper">
          <div className="loader-content">
            <div className="logo-loader">
              <SKLogo />
            </div>
            <div className="loader-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="loader-text">Preparing your journey…</div>
          </div>
        </div>
      ) : (
        <div className="site-root">
          <Navbar handleDownloadCV={handleDownloadCV} />
          <div className="page-enter">
            <Home />
            <About />
            <Projects />
            <Trading />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
