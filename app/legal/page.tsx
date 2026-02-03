'use client';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import ThemeToggle from '../components/ThemeToggle';
import { Footer } from '../components/Footer';

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState<'privacy' | 'terms'>('privacy');

  return (
    <>
      <Menu />
      <ThemeToggle />
      
      <main style={{ 
        minHeight: '100vh', 
        padding: '8rem 2rem 4rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Legal
        </h1>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <button
            onClick={() => setActiveSection('privacy')}
            style={{
              padding: '1rem 2rem',
              background: 'none',
              border: 'none',
              borderBottom: activeSection === 'privacy' ? '2px solid #BBFFCC' : '2px solid transparent',
              color: activeSection === 'privacy' ? '#BBFFCC' : 'inherit',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: activeSection === 'privacy' ? '600' : '400',
              transition: 'all 0.3s ease'
            }}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveSection('terms')}
            style={{
              padding: '1rem 2rem',
              background: 'none',
              border: 'none',
              borderBottom: activeSection === 'terms' ? '2px solid #BBFFCC' : '2px solid transparent',
              color: activeSection === 'terms' ? '#BBFFCC' : 'inherit',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: activeSection === 'terms' ? '600' : '400',
              transition: 'all 0.3s ease'
            }}
          >
            Terms of Service
          </button>
        </div>

        {/* Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '2rem',
          lineHeight: '1.8'
        }}>
          {activeSection === 'privacy' && (
            <div className="legal-content">
              <h2>PRIVACY POLICY (GDPR COMPLIANT)</h2>
              <p><em>Last Updated: 26/01/2026</em></p>

              <h3>1. Introduction</h3>
              <p>Global Novus ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and share information about you when you visit our website or engage with our automation and integration services.</p>

              <h3>2. Data Controller</h3>
              <p>Global Novus is the controller for the processing of personal data.</p>
              <ul>
                <li><strong>Legal Entity:</strong> Global Novus (Eenmanszaak)</li>
                <li><strong>Location:</strong> Eindhoven, The Netherlands</li>
                <li><strong>Chamber of Commerce (KVK) Number:</strong> 99468468</li>
                <li><strong>Contact:</strong> giovannimoras04@gmail.com</li>
              </ul>

              <h3>3. Data We Collect</h3>
              <p>We collect information to provide our services and improve your experience:</p>
              <ul>
                <li><strong>Identity Data:</strong> Name, job title.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, billing address.</li>
                <li><strong>Technical Data:</strong> IP address.</li>
                <li><strong>Client Data:</strong> In the course of building automations, we may process data contained within your CRM or internal systems (e.g., customer lists). In these cases, we act as a Data Processor and you remain the Data Controller.</li>
              </ul>

              <h3>4. How We Use Your Data</h3>
              <p>We use your data strictly for the following purposes:</p>
              <ul>
                <li>To register you as a new client.</li>
                <li>To deliver our services (Audits, Architecture, System Integration, Calibration).</li>
                <li>To manage payments and collect fees.</li>
                <li>To comply with legal obligations (e.g., Dutch tax retention laws).</li>
              </ul>

              <h3>5. Data Sharing</h3>
              <p>We do not sell your data. We may share data with trusted third parties solely to run our operations:</p>
              <ul>
                <li><strong>Service Providers:</strong> Hosting services, invoicing software, and the specific tools we integrate for you (e.g., HubSpot, Slack, n8n) strictly as required for the automation.</li>
                <li><strong>Legal Authorities:</strong> If required by Dutch law.</li>
              </ul>

              <h3>6. International Transfers</h3>
              <p>Some of our third-party tools are based outside the EEA (European Economic Area). Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring standard contractual clauses (SCCs) are in place.</p>

              <h3>7. Data Security</h3>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.</p>

              <h3>8. Your Legal Rights</h3>
              <p>Under the GDPR, you have the right to:</p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction or erasure of your data.</li>
                <li>Object to processing.</li>
                <li>Request restriction of processing.</li>
              </ul>
            </div>
          )}

          {activeSection === 'terms' && (
            <div className="legal-content">
              <h2>TERMS OF SERVICE (ALGEMENE VOORWAARDEN)</h2>
              <p><em>Last Updated: 26/01/2026</em></p>

              <h3>1. General</h3>
              <p>1.1. These General Terms and Conditions apply to all offers, agreements, and services provided by Global Novus, established in Eindhoven, The Netherlands.</p>
              <p>1.2. Deviations from these terms are only valid if agreed upon in writing.</p>

              <h3>2. Services</h3>
              <p>2.1. Global Novus specializes in business process automation, software integration, and system architecture.</p>
              <p>2.2. <strong>Obligation of Effort:</strong> Global Novus will perform the services to the best of its ability ("inspanningsverplichting"). However, we cannot guarantee specific commercial results (e.g., a specific increase in revenue) derived from the use of our automations.</p>

              <h3>3. Quotes and Offers</h3>
              <p>3.1. All quotes are non-binding and valid for 30 days unless stated otherwise.</p>
              <p>3.2. An agreement is formed when the Client confirms the quote in writing or when Global Novus commences work with the Client's knowledge.</p>

              <h3>4. Client Obligations</h3>
              <p>4.1. The Client must provide all necessary access (API keys, login credentials) and information required for Global Novus to build the automations.</p>
              <p>4.2. The Client is responsible for ensuring they have the legal right to use the software and data they provide to Global Novus.</p>

              <h3>5. Intellectual Property</h3>
              <p>5.1. <strong>Background IP:</strong> Global Novus retains all rights to the underlying methodologies, code snippets, and pre-existing templates used to build the system.</p>
              <p>5.2. <strong>Deliverables:</strong> Upon full payment, the specific configurations and workflows built for the Client become the property of the Client.</p>

              <h3>6. Payment Terms</h3>
              <p>6.1. Invoices must be paid within 14 days of the invoice date.</p>
              <p>6.2. For project-based work, Global Novus may require a deposit (e.g., 50%) before commencement.</p>
              <p>6.3. For "Calibration" or "Maintenance" retainers, fees are billed monthly in advance.</p>

              <h3>7. Liability (Crucial for Sole Proprietorship)</h3>
              <p>7.1. Global Novus is only liable for direct damages resulting from a demonstrable failure to perform ("toerekenbare tekortkoming").</p>
              <p>7.2. <strong>Liability Cap:</strong> The liability of Global Novus is at all times limited to the amount of the invoice fees paid by the Client for the specific assignment in the 3 months prior to the event causing the damage.</p>
              <p>7.3. Global Novus is never liable for indirect damages, including lost profits, missed savings, or data loss caused by third-party API changes (e.g., if OpenAI or HubSpot changes their API and breaks the automation).</p>

              <h3>8. Confidentiality</h3>
              <p>Both parties agree to keep all confidential information received from the other party private and use it only for the purpose of the agreement.</p>

              <h3>9. Governing Law</h3>
              <p>9.1. Dutch law applies to all legal relationships to which Global Novus is a party.</p>
              <p>9.2. Disputes shall be settled exclusively by the competent court in the district of Noord-Brabant.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        body.light-mode .legal-content {
          color: #000;
        }

        .legal-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #BBFFCC;
        }

        body.light-mode .legal-content h2 {
          color: #00D66F;
        }

        .legal-content h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #BBFFCC;
        }

        body.light-mode .legal-content h3 {
          color: #00D66F;
        }

        .legal-content p {
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .legal-content ul {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }

        .legal-content li {
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .legal-content em {
          opacity: 0.7;
        }

        body.light-mode button {
          color: #000 !important;
        }

        body.light-mode button[style*="color: rgb(187, 255, 204)"] {
          color: #00D66F !important;
        }
      `}</style>
    </>
  );
}
