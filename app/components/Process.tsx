"use client";

import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface ProcessProps {
  className?: string;
}

const Process = ({ className }: ProcessProps) => {
  const process = [
    {
      step: "01",
      title: "Analyze & Identify",
      description:
        "We start by reviewing your current workflows to find exactly where things get stuck. We identify the manual, repetitive tasks that are eating up your day and determine which ones are best suited for automation.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Before we touch any software, we map out a clear plan. We design a solution that connects your existing tools and fits your specific business goals, ensuring the new system is easy for your team to adopt.",
    },
    {
      step: "03",
      title: "Build & Connect",
      description:
        "We handle the technical setup completely. We connect your applications and build the automation workflows in the background, testing everything rigorously to ensure it runs smoothly without errors.",
    },
    {
      step: "04",
      title: "Monitor & Improve",
      description:
        "We don't just set it and forget it. We monitor the system to make sure it delivers consistent results, making adjustments as needed so your operations stay efficient even as your business grows.",
    },
  ];

  return (
    <>
      <style jsx>{`
        .process-section {
          position: relative;
          z-index: 4;
          padding: 8rem 2rem 3rem 2rem;
          background: #ffffff;
          color: #000000;
          transition: background 300ms ease, color 300ms ease;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }

        /* Inverted colors - black background in light mode */
        :global(body.light-mode) .process-section {
          background: #000000;
          color: #ffffff;
        }

        .process-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .process-grid {
            grid-template-columns: 2fr 4fr;
            gap: 5rem;
          }
        }

        .process-header {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          padding: 2rem 0;
        }

        @media (min-width: 1024px) {
          .process-header {
            position: sticky;
            top: 2.5rem;
            height: fit-content;
          }
        }

        .process-title-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .process-title {
          font-size: 3rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        @media (min-width: 768px) {
          .process-title {
            font-size: 4.5rem;
          }
        }

        .process-asterisk {
          width: 2rem;
          height: 2rem;
          color: #ff6b35;
          stroke: #ff6b35;
          fill: #ff6b35;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        @media (min-width: 768px) {
          .process-asterisk {
            width: 2.5rem;
            height: 2.5rem;
            margin-top: 0.5rem;
          }
        }

        .process-description {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.6;
        }

        .process-button {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.5rem;
          padding: 0.5rem 0;
          background: transparent;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: all 200ms ease;
          color: inherit;
          text-decoration: none;
        }

        .process-button:hover {
          opacity: 0.8;
          transform: translateX(4px);
        }

        .process-button-icon {
          color: #ff6b35;
        }

        .process-list {
          position: relative;
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .process-item {
          position: relative;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 2rem 0;
        }

        /* Inverted border color */
        :global(body.light-mode) .process-item {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 768px) {
          .process-item {
            gap: 2.5rem;
            padding: 2.5rem 0;
          }
        }

        .process-step {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          flex-shrink: 0;
          background: rgba(0, 0, 0, 0.05);
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        /* Inverted step background */
        :global(body.light-mode) .process-step {
          background: rgba(255, 255, 255, 0.1);
        }

        .process-content {
          flex: 1 1 100%;
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          .process-content {
            flex: 1 1 auto;
            margin-top: 0;
          }
        }

        .process-step-title {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        @media (min-width: 1024px) {
          .process-step-title {
            font-size: 1.875rem;
          }
        }

        .process-step-description {
          opacity: 0.6;
          line-height: 1.6;
        }

        .process-illustration {
          position: absolute;
          top: 1rem;
          right: 0;
        }
      `}</style>

      <section className={cn("process-section", className)}>
        <div className="process-container">
          <div className="process-grid">
            <div className="process-header">
              <div className="process-title-wrapper">
                <h2 className="process-title">Our Process</h2>
                <Asterisk className="process-asterisk" color="#ff6b35" fill="#ff6b35" />
              </div>
              <p className="process-description">
                We take a practical look at how your business runs today to see where you are losing time. Instead of temporary fixes, we build reliable systems that handle your repetitive tasks automatically, so you and your team can focus on the work that actually drives revenue.
              </p>

              <a href="/partnerships" className="process-button">
                <CornerDownRight className="process-button-icon" />
                Get in touch
              </a>
            </div>

            <ul className="process-list">
              {process.map((step, index) => (
                <li key={index} className="process-item">
                  <Illustration className="process-illustration" />

                  <div className="process-step">
                    0{index + 1}
                  </div>
                  <div className="process-content">
                    <h3 className="process-step-title">
                      {step.title}
                    </h3>
                    <p className="process-step-description">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF6B35"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF6B35"
        strokeWidth="4"
      />
    </svg>
  );
};
