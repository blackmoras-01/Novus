'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Menu Icon */}
      <div
        className={`menu-icon ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <img src="/logo.svg" alt="Novus Logo" />
      </div>

      {/* Menu Overlay */}
      <div
        className={`menu-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <img src="/logo.svg" alt="Novus Logo" />
          </div>
          <div className="menu-title">NOVUS</div>
        </div>
        <nav className="menu-nav">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/partnerships" onClick={() => setIsOpen(false)}>Partnerships</Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link href="/legal" onClick={() => setIsOpen(false)}>Legal</Link>
        </nav>
      </div>
    </>
  );
}
