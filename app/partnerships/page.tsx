"use client";

import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Menu from '../components/Menu';
import ThemeToggle from '../components/ThemeToggle';
import { ArrowRight } from "lucide-react";
import { Footer } from '../components/Footer';

export default function Partnerships() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companySize: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with public key (without quotes as per EmailJS docs)
    emailjs.init({
      publicKey: 'iKH6PS8FeisdFzEqO',
    });
    console.log('✓ EmailJS initialized with public key');
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('🔵 Form submitted - starting process...');
    console.log('📋 Form data:', formData);
    
    // Log all form fields being sent
    const formElement = e.currentTarget;
    const formDataToSend = new FormData(formElement);
    console.log('📤 Form fields being sent:');
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Send email using EmailJS with explicit IDs
    console.log('Sending to:', {
      serviceID: 'service_yodwd0o',
      templateID: 'template_i1k9uxc',
      publicKey: 'iKH6PS8FeisdFzEqO'
    });

    emailjs.sendForm('service_yodwd0o', 'template_i1k9uxc', formElement)
      .then((result) => {
        console.log('✅ SUCCESS!', result);
        console.log('Status:', result.status);
        console.log('Text:', result.text);
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          companySize: '',
          role: '',
          message: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('❌ FAILED...', error);
        console.error('Error type:', typeof error);
        console.error('Error keys:', Object.keys(error));
        console.error('Error status:', error?.status);
        console.error('Error text:', error?.text);
        console.error('Error message:', error?.message);
        console.error('Full error object:', error);
        
        // Try to get more info
        if (error.response) {
          console.error('Error response:', error.response);
        }
        
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style jsx global>{`
        .contact-page {
          position: relative;
          min-height: 100vh;
          padding: 8rem 2rem 4rem;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .contact-description {
          font-size: 1.125rem;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 700px;
          margin: 0 auto 1rem;
        }

        .contact-link {
          color: #51fc70;
          text-decoration: underline;
          transition: opacity 200ms ease;
        }

        .contact-link:hover {
          opacity: 0.8;
        }

        body.light-mode .contact-link {
          color: #00aa44;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1.2fr 0.8fr;
            max-width: 1100px;
          }
        }

        .contact-form-card,
        .contact-testimonial-card {
          background: rgba(10, 10, 15, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          transition: background 300ms ease, border-color 300ms ease;
        }

        body.light-mode .contact-form-card,
        body.light-mode .contact-testimonial-card {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .form-row.two-cols {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.9;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          font-size: 0.9375rem;
          color: inherit;
          transition: all 200ms ease;
        }

        body.light-mode .form-input,
        body.light-mode .form-select,
        body.light-mode .form-textarea {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #51fc70;
          background: rgba(81, 252, 112, 0.05);
        }

        body.light-mode .form-input:focus,
        body.light-mode .form-select:focus,
        body.light-mode .form-textarea:focus {
          border-color: #00aa44;
          background: rgba(0, 170, 68, 0.05);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
          font-family: inherit;
        }

        .form-button {
          width: 100%;
          padding: 1rem 2rem;
          background: #51fc70;
          color: #000;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .form-button:hover {
          background: #99ffaa;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(81, 252, 112, 0.3);
        }

        .testimonial-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100%;
        }

        .testimonial-quote {
          font-size: 1.125rem;
          line-height: 1.7;
          font-style: italic;
          opacity: 0.9;
        }

        .testimonial-highlight {
          font-weight: 600;
          opacity: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        body.light-mode .testimonial-author {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .author-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .author-title {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .trust-section {
          text-align: center;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        body.light-mode .trust-section {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .trust-title {
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.6;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trust-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 3rem;
          align-items: center;
        }

        .trust-logo {
          height: 40px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          opacity: 0.8;
          transition: opacity 200ms ease, transform 200ms ease;
        }

        .trust-logo:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-description {
            font-size: 1rem;
          }

          .contact-form-card,
          .contact-testimonial-card {
            padding: 1.5rem;
          }
        }
      `}</style>
      
      <Menu />
      <ThemeToggle />
      
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Partner With Novus</h1>
            <p className="contact-description">
              Ready to transform your business with automation? Schedule a consultation to explore how Novus can help streamline your operations. Have questions? Feel free to{' '}
              <a href="/contact-us" className="contact-link">reach out to our team</a>.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-card">
              <form id="contact-form" onSubmit={handleSubmit}>
                {/* Hidden fields for EmailJS template compatibility */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
                <input type="hidden" name="name" value={`${formData.firstName} ${formData.lastName}`} />
                <input type="hidden" name="reply_to" value={formData.email} />
                <input type="hidden" name="user_email" value={formData.email} />
                <input type="hidden" name="company_size" value={formData.companySize} />
                <input type="hidden" name="user_role" value={formData.role} />
                
                <div className="form-row two-cols">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      placeholder="Bruce"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      placeholder="Wayne"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="bruce@wayne.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row two-cols">
                  <div className="form-group">
                    <label className="form-label">Company Size</label>
                    <select
                      name="companySize"
                      className="form-select"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-500">101-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Role</label>
                    <select
                      name="role"
                      className="form-select"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="CFO">CFO</option>
                      <option value="COO">COO</option>
                      <option value="Manager">Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Share more about your use case, product, tech stack and what you want to accomplish"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div style={{ padding: '1rem', background: 'rgba(81, 252, 112, 0.1)', border: '1px solid #51fc70', borderRadius: '8px', marginBottom: '1rem', color: '#51fc70' }}>
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{ padding: '1rem', background: 'rgba(255, 59, 48, 0.1)', border: '1px solid #ff3b30', borderRadius: '8px', marginBottom: '1rem', color: '#ff3b30' }}>
                    ✗ Failed to send message. Please try again.
                  </div>
                )}

                <button type="submit" className="form-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Continue'} <ArrowRight size={20} />
                </button>
              </form>
            </div>

            <div className="contact-testimonial-card">
              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  "Novus <span className="testimonial-highlight">transformed</span> our manual workflows into <span className="testimonial-highlight">seamless</span> automation. The <span className="testimonial-highlight">efficiency</span> gains have been <span className="testimonial-highlight">remarkable</span>."
                </blockquote>
                <div className="testimonial-author">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                    alt="Emma Sullivan"
                    className="author-image"
                  />
                  <div className="author-info">
                    <div className="author-name">Emma Sullivan</div>
                    <div className="author-title">Operations Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-section">
            <h3 className="trust-title">Valued by clients worldwide</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
