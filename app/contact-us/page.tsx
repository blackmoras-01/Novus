"use client";

import React from "react";
import Menu from '../components/Menu';
import ThemeToggle from '../components/ThemeToggle';
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from '../components/Footer';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  linkText: string;
  href: string;
}

const ContactCard = ({ icon, label, description, linkText, href }: ContactCardProps) => {
  const isExternal = href.startsWith('http');
  
  return (
    <div className="contact-card">
      <span className="contact-icon">
        {icon}
      </span>
      <p className="contact-label">{label}</p>
      <p className="contact-description">{description}</p>
      <a 
        href={href} 
        className="contact-link"
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {linkText}
      </a>
    </div>
  );
};

export default function ContactUs() {
  return (
    <>
      <style jsx global>{`
        .contact-us-page {
          position: relative;
          min-height: 100vh;
          padding: 8rem 2rem 4rem;
        }

        .contact-us-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-us-header {
          margin-bottom: 3.5rem;
          text-align: center;
        }

        .contact-us-title {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .contact-us-title {
            font-size: 3rem;
          }
        }

        .contact-us-description {
          font-size: 1.125rem;
          line-height: 1.7;
          opacity: 0.7;
          max-width: 640px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-card {
          background: rgba(10, 10, 15, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 300ms ease;
        }

        body.light-mode .contact-card {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        body.light-mode .contact-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(187, 255, 204, 0.1);
          margin-bottom: 1rem;
          transition: all 200ms ease;
        }

        .contact-card:hover .contact-icon {
          background: rgba(187, 255, 204, 0.2);
          transform: scale(1.05);
        }

        .contact-icon :global(svg) {
          width: 1.5rem;
          height: 1.5rem;
          color: #bbffcc;
        }

        body.light-mode .contact-icon {
          background: rgba(0, 170, 68, 0.1);
        }

        body.light-mode .contact-card:hover .contact-icon {
          background: rgba(0, 170, 68, 0.15);
        }

        body.light-mode .contact-icon :global(svg) {
          color: #00aa44;
        }

        .contact-label {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .contact-description {
          font-size: 0.9375rem;
          opacity: 0.7;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .contact-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #bbffcc;
          text-decoration: none;
          transition: all 200ms ease;
          display: inline-block;
        }

        .contact-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        body.light-mode .contact-link {
          color: #00aa44;
        }
      `}</style>
      
      <Menu />
      <ThemeToggle />
      
      <div className="contact-us-page">
        <div className="contact-us-container">
          <div className="contact-us-header">
            <h1 className="contact-us-title">Contact Us</h1>
            <p className="contact-us-description">
              Have questions about automation? Want to discuss your specific needs? Our team is here to help you transform your business operations.
            </p>
          </div>

          <div className="contact-grid">
            <ContactCard
              icon={<Mail />}
              label="Email"
              description="We respond to all emails within 24 hours."
              linkText="contact@novus-labs.ai"
              href="mailto:contact@novus-labs.ai"
            />
            
            <ContactCard
              icon={<MapPin />}
              label="Office"
              description="Drop by our office for a chat."
              linkText="Boschdijk 525, 5621 JG Eindhoven"
              href="https://www.google.com/maps/place/VB+Student+Living+(Holland2Stay)/@51.4599147,5.4513768,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6d9f7f753acbb:0x12fd95497bf741d!8m2!3d51.4599114!4d5.4539517!16s%2Fg%2F11vkghtq8t?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
            />
            
            <ContactCard
              icon={<Phone />}
              label="Phone"
              description="We're available Mon-Fri, 9am-5pm."
              linkText="+31 6 21146808"
              href="tel:+31621146808"
            />
            
            <ContactCard
              icon={<MessageCircle />}
              label="Live Chat"
              description="Get instant help from our support team."
              linkText="Start Chat"
              href="#"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
