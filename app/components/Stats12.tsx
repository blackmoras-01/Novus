"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

const STATS = {
  monthly: {
    HeroMetric: 1250,
    Stat1: 430,
    Stat2: 100,
    Stat3: 0,
    Stat4: 12,
  },
  yearly: {
    HeroMetric: 14500,
    Stat1: 5.2,
    Stat2: 2,
    Stat3: 99.9,
    Stat4: 725,
  },
} as const;

const ZERO_STATS = {
  monthly: {
    HeroMetric: 0,
    Stat1: 0,
    Stat2: 0,
    Stat3: 0,
    Stat4: 0,
  },
  yearly: {
    HeroMetric: 0,
    Stat1: 0,
    Stat2: 0,
    Stat3: 0,
    Stat4: 0,
  },
};

interface Stats12Props {
  className?: string;
}

const Stats12 = ({ className }: Stats12Props) => {
  const [showMonthlyStats, setShowMonthlyStats] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const stats = isInView ? STATS : ZERO_STATS;

  return (
    <section className={cn("py-32", className)} style={{ position: 'relative', zIndex: 4, paddingTop: '10rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="stats-container">
          {/* Left Section: Title, Text, Button, Graph */}
          <div className="stats-left">
            <h1 className="stats-title">
              We don't just talk. We deliver results.
            </h1>
            <p className="stats-description">
              Measurable impact through invisible workflows.
            </p>
            <a href="/partnerships" className="stats-button group active:scale-95">
              <span>Get Started With Us</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
            <div className="stats-graph">
              <Graph />
            </div>
          </div>

          {/* Right Section: Large Number, Switch Button, Stats Grid */}
          <div ref={ref} className="stats-right">
            {/* 1. Large Number */}
            <h1 className="stats-revenue">
              <NumberFlow
                value={
                  showMonthlyStats
                    ? stats.monthly.HeroMetric
                    : stats.yearly.HeroMetric
                }
                suffix="+"
              />
            </h1>
            <p className="stats-hero-label">
              {showMonthlyStats 
                ? "Hours Saved This Month" 
                : "Hours of Manual Work Eliminated"}
            </p>
            
            {/* 2. Switch Stats Button */}
            <div className="stats-switch-container">
              <p className="stats-year-text">And it's just in a year</p>
              <button
                className="stats-switch-button group active:scale-95"
                onClick={() => setShowMonthlyStats(!showMonthlyStats)}
              >
                <span>Show Monthly Stats</span>
                <RefreshCcw className="w-4 h-4 transition-all ease-out group-hover:rotate-180" />
              </button>
            </div>
            
            {/* 3. Stats Grid */}
            <div className="stats-grid">
              <div className="stats-item stats-item-left">
                <h2 className="stats-number">
                  {showMonthlyStats ? (
                    <NumberFlow value={stats.monthly.Stat1} suffix="k+" />
                  ) : (
                    <NumberFlow value={stats.yearly.Stat1} suffix="M+" />
                  )}
                </h2>
                <p className="stats-label">
                  {showMonthlyStats ? "Active Operations" : "Total Workflow Executions"}
                </p>
              </div>
              <div className="stats-item stats-item-right">
                <h2 className="stats-number">
                  {showMonthlyStats ? (
                    <NumberFlow value={stats.monthly.Stat2} suffix="%" />
                  ) : (
                    <>{"< "}<NumberFlow value={stats.yearly.Stat2} suffix=" Weeks" /></>
                  )}
                </h2>
                <p className="stats-label">
                  {showMonthlyStats ? "Uptime & Availability" : "Avg. Implementation Time"}
                </p>
              </div>
              <div className="stats-item stats-item-left">
                <h2 className="stats-number">
                  {showMonthlyStats ? (
                    <NumberFlow value={stats.monthly.Stat3} />
                  ) : (
                    <NumberFlow value={stats.yearly.Stat3} suffix="%" />
                  )}
                </h2>
                <p className="stats-label">
                  {showMonthlyStats ? "Critical Errors" : "Workflow Success Rate"}
                </p>
              </div>
              <div className="stats-item stats-item-right">
                <h2 className="stats-number">
                  {showMonthlyStats ? (
                    <NumberFlow value={stats.monthly.Stat4} />
                  ) : (
                    <NumberFlow value={stats.yearly.Stat4} prefix="$" suffix="k+" />
                  )}
                </h2>
                <p className="stats-label">
                  {showMonthlyStats ? "New Automations Deployed" : "Est. Client Cost Savings"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 3rem;
        }

        .stats-left {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .stats-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stats-title {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 600;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .stats-description {
          margin: 1rem 0;
          font-size: 1.125rem;
          opacity: 0.7;
          line-height: 1.75;
        }

        .stats-button {
          margin-top: 2.5rem;
          display: flex;
          width: fit-content;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 9999px;
          padding: 0.75rem 2rem;
          transition: all 300ms;
          font-size: 0.875rem;
          text-decoration: none;
          background: #51fc70;
          color: #000;
          border: none;
        }

        .stats-button:hover {
          background: #99ffaa;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(81, 252, 112, 0.3);
        }

        .stats-graph {
          margin-top: 2.5rem;
          width: 100%;
        }

        .stats-revenue {
          font-size: clamp(4rem, 12vw, 10rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .stats-hero-label {
          font-size: 1rem;
          opacity: 0.7;
          margin-bottom: 2rem;
          text-align: left;
        }

        .stats-switch-container {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        .stats-year-text {
          font-size: 1rem;
        }

        .stats-switch-button {
          display: flex;
          width: fit-content;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 9999px;
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
          transition: all 300ms;
          background: #51fc70;
          color: #000;
          border: none;
          cursor: pointer;
        }

        .stats-switch-button:hover {
          background: #99ffaa;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(81, 252, 112, 0.3);
        }

        .stats-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          gap: 3.5rem;
          column-gap: 6rem;
        }

        .stats-item {
          display: flex;
          flex-direction: column;
        }

        .stats-item-left {
          text-align: left;
          padding-left: 2rem;
        }

        .stats-item-right {
          text-align: right;
        }

        .stats-number {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        :global(body.light-mode) .stats-number {
          color: #000;
        }

        .stats-label {
          font-size: 0.875rem;
          opacity: 0.6;
        }

        :global(body.light-mode) .stats-label {
          color: #000;
        }

        .stats-revenue {
          color: inherit;
        }

        :global(body.light-mode) .stats-revenue {
          color: #000;
        }

        :global(body.light-mode) .stats-hero-label {
          color: #000;
        }

        /* Fix NumberFlow suffixes and prefixes in both modes */
        .stats-number :global(*),
        .stats-revenue :global(*) {
          color: #fff !important;
        }

        :global(body.light-mode) .stats-number :global(*),
        :global(body.light-mode) .stats-revenue :global(*) {
          color: #000 !important;
        }

        @media (min-width: 1024px) {
          .stats-container {
            flex-direction: row;
            gap: 3rem;
            justify-content: space-between;
          }

          .stats-left {
            width: 32%;
          }

          .stats-right {
            width: 58%;
            align-items: flex-end;
          }

          .stats-graph {
            width: 115%;
          }

          .stats-switch-container {
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            gap: 1.5rem;
          }

          .stats-item-left {
            padding-left: 3rem;
          }

          .stats-hero-label {
            text-align: right;
          }
        }
      `}</style>
    </section>
  );
};

export { Stats12 };

function Graph() {
  return (
    <div className="w-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 388"
        className="w-full h-auto"
        initial={{
          clipPath: "inset(0px 100% 0px 0px)",
        }}
        animate={{
          clipPath: "inset(0px 0% 0px 0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 18,
        }}
      >
        <g clipPath="url(#grad)">
          <path
            d="M1 118.5C1 118.5 83.308 102.999 114.735 89.4998C146.162 76.0008 189.504 87.7868 235.952 77.4998C273.548 69.1718 294.469 62.4938 329.733 46.9998C409.879 11.7848 452.946 30.9998 483.874 22.4998C514.802 13.9998 635.97 0.84884 644 1.49984"
            stroke="#0090FF"
            strokeWidth="2"
          />
          <path
            d="M113.912 89.4888C82.437 102.988 1 118.487 1 118.487V438.477H644V1.49977C635.957 0.849773 514.601 13.9988 483.625 22.4978C452.649 30.9958 409.515 11.7838 329.245 46.9938C293.926 62.4868 272.973 69.1638 235.318 77.4908C188.798 87.7768 145.388 75.9908 113.912 89.4888Z"
            fill="url(#grad)"
          />
        </g>
        <defs>
          <linearGradient
            id="grad"
            x1="321.5"
            y1="0.476773"
            x2="321.5"
            y2="387.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#138EED" stopOpacity="0.4" />
            <stop offset="1" stopColor="#058FFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
