'use client';

import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
];

const Faq5 = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
  className,
}: Faq5Props) => {
  return (
    <>
      <style jsx>{`
        .faq-section {
          position: relative;
          z-index: 4;
          padding: 5rem 2rem;
          width: 100%;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .faq-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.375rem 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 300ms ease;
        }

        :global(body.light-mode) .faq-badge {
          background: rgba(0, 0, 0, 0.05);
          color: #000;
          border-color: rgba(0, 0, 0, 0.1);
        }

        .faq-heading {
          margin-top: 1.5rem;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 600;
          line-height: 1.2;
          color: #fff;
          transition: color 300ms ease;
        }

        :global(body.light-mode) .faq-heading {
          color: #000;
        }

        .faq-description {
          margin-top: 1.5rem;
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          transition: color 300ms ease;
        }

        :global(body.light-mode) .faq-description {
          color: rgba(0, 0, 0, 0.7);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .faq-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.75rem;
          height: 1.75rem;
          flex-shrink: 0;
          border-radius: 0.25rem;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.75rem;
          font-family: ui-monospace, monospace;
          font-weight: 500;
          transition: all 300ms ease;
        }

        :global(body.light-mode) .faq-number {
          background: rgba(0, 0, 0, 0.08);
          color: #000;
        }

        .faq-content {
          flex: 1;
        }

        .faq-question {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
          color: #fff;
          transition: color 300ms ease;
        }

        :global(body.light-mode) .faq-question {
          color: #000;
        }

        .faq-answer {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          transition: color 300ms ease;
        }

        :global(body.light-mode) .faq-answer {
          color: rgba(0, 0, 0, 0.65);
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 3rem 1.5rem;
          }

          .faq-header {
            margin-bottom: 3rem;
          }

          .faq-heading {
            font-size: 1.75rem;
          }

          .faq-description {
            font-size: 0.9375rem;
          }

          .faq-question {
            font-size: 1rem;
          }

          .faq-answer {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <section className={cn("faq-section", className)}>
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-badge">{badge}</span>
            <h2 className="faq-heading">{heading}</h2>
            <p className="faq-description">{description}</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <span className="faq-number">{index + 1}</span>
                <div className="faq-content">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Faq5 };
