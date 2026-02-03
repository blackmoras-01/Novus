'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    } else {
      setIsLightMode(false);
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsLightMode = !isLightMode;
    setIsLightMode(newIsLightMode);
    
    if (newIsLightMode) {
      // Use requestAnimationFrame to batch DOM updates
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('dark');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      });
    } else {
      requestAnimationFrame(() => {
        document.body.classList.remove('light-mode');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      });
    }
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <svg className="theme-icon sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" strokeWidth="2"/>
        <path strokeLinecap="round" strokeWidth="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/>
      </svg>
      <div className="switch">
        <div className="switch-thumb"></div>
      </div>
      <svg className="theme-icon moon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    </div>
  );
}
