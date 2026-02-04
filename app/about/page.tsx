'use client';

import Menu from '../components/Menu';
import ThemeToggle from '../components/ThemeToggle';
import Testimonials from '../components/Testimonials';
import { Footer } from '../components/Footer';
import About8 from '../components/About8';

export default function About() {
  return (
    <div className="about-page-wrapper">
      <style jsx>{`
        .about-page-wrapper {
          overflow-x: hidden;
          width: 100%;
        }

        h2, h3 {
          transition: color 300ms ease;
        }

        :global(body.light-mode) h2,
        :global(body.light-mode) h3 {
          color: #000;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Section 1: Narrative Hero */
        .narrative-hero {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 6rem auto;
          padding: 0 2rem;
        }

        .narrative-hero h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
        }

        .narrative-hero p {
          font-size: 1.125rem;
          line-height: 1.7;
          opacity: 0.8;
          margin: 0;
        }

        /* Section 4: Testimonials */
        .testimonials-section {
          margin-bottom: 0.5rem;
        }

        .testimonials-section h3 {
          font-size: 2.5rem;
          font-weight: 600;
          margin: 0 0 3rem 0;
          text-align: center;
          letter-spacing: -0.01em;
        }

        /* Section 5: Seamless Integration */
        .integration-section {
          padding: 3rem 0 3rem;
          text-align: center;
          background: #ffffff !important;
          color: #000000 !important;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          margin-bottom: 0;
        }

        .integration-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .integration-title {
          color: #000000 !important;
          font-size: 2rem !important;
          font-weight: 600 !important;
          margin: 0 auto 1rem auto !important;
          letter-spacing: -0.01em !important;
        }

        .integration-subtitle {
          color: #666666 !important;
          font-size: 1.125rem !important;
          margin: 0 auto 3rem auto !important;
          opacity: 0.8;
        }

        .companies-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4rem;
          align-items: center;
          padding: 1rem 0;
        }

        .company-logo {
          height: 40px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          opacity: 0.8;
          transition: opacity 200ms ease, transform 200ms ease;
        }

        .company-logo:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Responsive Adjustments */
        @media (min-width: 768px) {
          .bento-grid {
            gap: 1.75rem;
          }

          .box-why {
            grid-column: span 12;
          }

          .box-founder {
            grid-column: span 7;
          }

          .box-philosophy {
            grid-column: span 5;
          }
        }

        @media (min-width: 1024px) {
          .box-why {
            grid-column: span 7;
            grid-row: span 2;
            min-height: 500px;
          }

          .box-founder {
            grid-column: span 5;
            grid-row: span 1;
          }

          .box-philosophy {
            grid-column: span 5;
            grid-row: span 1;
          }
        }
      `}</style>

      <Menu />
      <ThemeToggle />

      <section id="about" style={{ position: 'relative', zIndex: 1, padding: '8rem 2rem 4rem' }}>
        <div className="about-container">
          {/* Section 1: The Narrative Hero */}
          <div className="narrative-hero">
            <h1>We engineer the time you've lost.</h1>
            <p>
              We believe that founders should build the future, not manage the paperwork. 
              Novus exists to bridge the gap between where your business is and where it could be, 
              simply by removing the friction of manual work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: About8 Component */}
      <About8 />

      <section style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <div className="about-container">
          {/* Section 4: Testimonials */}
          <div className="testimonials-section">
            <h3>Trusted by high-growth founders.</h3>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Section 5: Seamless Integration */}
      <div className="integration-section">
        <div className="integration-content">
          <h2 className="integration-title">Seamless integration with your current setup</h2>
          <p className="integration-subtitle">We don't rip and replace. We connect and enhance.</p>
          <div className="companies-grid">
            <img
              src="https://mms.businesswire.com/media/20250903907062/en/2568785/5/HubSpot_Logo-6614x1916-1b4e806.jpg?download=1"
              alt="HubSpot"
              className="company-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
              alt="Salesforce"
              className="company-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
              alt="Slack"
              className="company-logo"
            />
            <img
              src="https://monday.com/p/wp-content/uploads/2023/03/Logo-monday.com-2.png"
              alt="Monday.com"
              className="company-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft 365"
              className="company-logo"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
