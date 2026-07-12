import React, { useState, useEffect } from 'react';
import SKLogo from './SKLogo';

const Navbar = ({ handleDownloadCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav nav-enter ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <div className="nav-progress-bar">
        <div
          className="nav-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="brand">
        <SKLogo />
        <span><span style={{ color: 'white' }}>Master</span>Dev</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#trading">Trading</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" aria-label="Toggle theme">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </button>
        <a className="btn resume" href="/cv.pdf" onClick={handleDownloadCV}>
          Download CV
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 15l-4-4h3V3h2v8h3l-4 4zm-6 4h12v2H6v-2z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
