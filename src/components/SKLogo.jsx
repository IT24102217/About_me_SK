import React from 'react';

const SKLogo = () => (
  <svg width="70" height="70" viewBox="0 0 100 100" className="logo">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#f0d57eff', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#d0ce41ff', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGradient)" strokeWidth="3"/>
    <text x="50" y="65" fontSize="42" fontWeight="bold" fill="url(#logoGradient)" textAnchor="middle" fontFamily="Inter, sans-serif">SK</text>
  </svg>
);

export default SKLogo;
