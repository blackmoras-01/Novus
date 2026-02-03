'use client';
import React from 'react';
import { Linkedin, Twitter, FileText, Shield, Handshake, HelpCircle, Mail } from 'lucide-react';

// SVG Icon for KvK
const KvKIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }}>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Company',
    links: [
      { title: 'Legal', href: '/legal', icon: FileText },
      { title: 'Partnership', href: '/partnerships', icon: Handshake },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'X.com', href: 'https://x.com', icon: Twitter },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/company/globalnovuslabs/', icon: Linkedin },
      { title: 'KvK', href: 'https://www.kvk.nl/bestellen/#/99468468000064537463?origin=search' },
    ],
  },
  {
    label: 'Reach out',
    links: [
      { title: 'FAQ', href: '/faq', icon: HelpCircle },
      { title: 'Contact', href: '/contact-us', icon: Mail },
    ],
  },
];

export function Footer() {
  return (
    <>
      <style jsx global>{`
        footer {
          padding: 3rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        body.light-mode footer {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
          }
        }

        .footer-logo-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-section p {
          font-size: 0.875rem;
          margin-top: 1.5rem;
          opacity: 0.7;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
        }

        .footer-section h3 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-section li {
          display: flex;
          align-items: center;
        }

        .footer-section a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .footer-section a svg {
          flex-shrink: 0;
        }

        footer a {
          color: #BBFFCC !important;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: #D4FFE0 !important;
        }

        body.light-mode footer a {
          color: #00D66F !important;
        }

        body.light-mode footer a:hover {
          color: #00A856 !important;
        }
      `}</style>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            {/* Logo and Copyright Section */}
            <div className="footer-logo-section">
              <img 
                src="/logo.svg" 
                alt="Novus Logo" 
                className="footer-logo"
                style={{ width: '56px', height: '56px' }}
              />
              <p>© {new Date().getFullYear()} Novus. All rights reserved.</p>
            </div>

            {/* Links Grid */}
            <div className="footer-links-grid">
              {footerLinks.map((section) => (
                <div key={section.label} className="footer-section">
                  <h3>{section.label}</h3>
                  <ul>
                    {section.links.map((link) => {
                      const isExternal = link.href.startsWith('http');
                      const Icon = link.icon;
                      
                      return (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                          >
                            {Icon && <Icon size={16} />}
                            {!Icon && link.href.includes('kvk') && <KvKIcon />}
                            {link.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
