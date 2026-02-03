"use client";

import { type SVGProps, useId } from "react";

import { cn } from "@/lib/utils";

interface About8Props {
  className?: string;
}

const About8 = ({ className }: About8Props) => {
  return (
    <section className={cn("py-32", className)} style={{ paddingTop: '2rem', paddingBottom: '8rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      {/* Hero Section */}
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15" style={{ maxWidth: '80rem', margin: '0 auto', padding: '0.5rem 2rem 3rem' }}>
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Automation, engineered like product.
          </h1>
          <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl" style={{ marginTop: '1rem', maxWidth: '42rem', fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', opacity: 0.7, lineHeight: 1.4 }}>
            Novus builds silent automation and AI systems that remove bottlenecks, connect your tools, and give your team time back—without ripping out your stack.
          </p>
        </div>
        {/* Background decoration */}
        <>
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
            <PlusSigns className="h-full w-full text-foreground/[0.05]" />
          </div>
        </>
      </section>

      {/* Stats Section */}
      <section className="container max-w-5xl border-y py-5" style={{ maxWidth: '80rem', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem 2rem' }}>
        <h2 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground" style={{ fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
          By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4" style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', fontWeight: 500, letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>
              &lt; 2 Weeks
            </h3>
            <p className="mt-1 font-medium text-muted-foreground" style={{ marginTop: '0.25rem', fontWeight: 500, opacity: 0.6 }}>Avg. time to first workflow live</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', fontWeight: 500, letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>
              20+
            </h3>
            <p className="mt-1 font-medium text-muted-foreground" style={{ marginTop: '0.25rem', fontWeight: 500, opacity: 0.6 }}>Common integrations supported</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', fontWeight: 500, letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>
              99.9%
            </h3>
            <p className="mt-1 font-medium text-muted-foreground" style={{ marginTop: '0.25rem', fontWeight: 500, opacity: 0.6 }}>
              Workflow reliability target
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', fontWeight: 500, letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>
              10–30 hrs/mo
            </h3>
            <p className="mt-1 font-medium text-muted-foreground" style={{ marginTop: '0.25rem', fontWeight: 500, opacity: 0.6 }}>
              Admin time typically removed per team
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15" style={{ maxWidth: '80rem', margin: '0 auto', padding: '2.5rem 2rem 3rem' }}>
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Modern businesses don&apos;t fail because of bad strategy—they stall because operations can&apos;t keep up. The real drag is manual work: copying data between tools, chasing approvals, updating spreadsheets, and answering the same questions twice.
            </p>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Novus builds a new foundation underneath your current stack: connected workflows, clean data movement, and AI where it actually compounds.
            </p>

            <h2 className="text-2xl font-medium tracking-tight md:text-3xl" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.2, margin: '1rem 0 1.5rem 0' }}>
              We were told ops can&apos;t be elegant.
            </h2>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Most teams "solve" inefficiency by adding tools, rules, and more people to manage the mess. That creates extra layers, broken handoffs, and fragile processes that only one person understands.
            </p>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              We do the opposite. We map the friction, redesign the workflow, and implement automation that runs quietly in the background—stable, observable, and easy to evolve as you grow.
            </p>
          </div>
          <img
            src="/n8n-workflow-new.png"
            alt="Workflow Automation Dashboard"
            className="object-cover"
            style={{ borderRadius: '12px', objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* CoreAPI Section */}
      <section className="container" style={{ maxWidth: '80rem', margin: '0 auto', padding: '2.5rem 2rem' }}>
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <img
            src="/Gemini_Generated_Image_95bzdm95bzdm95bz.webp"
            alt="Novus Automation Systems"
            className="object-cover order-1"
            style={{ borderRadius: '12px', objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
          />
          <div className="order-2">
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Novus builds systems from the ground up around your workflows—no platform migration, no unnecessary tooling, no "innovation theatre." Every automation is designed to reduce risk, increase clarity, and keep humans focused on judgment—not busywork.
            </p>

            <h2 className="text-2xl font-medium tracking-tight md:text-3xl" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.2, margin: '1rem 0 1.5rem 0' }}>
              We&apos;re not an agency. We&apos;re an engineering layer.
            </h2>

            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We operate like a small, senior team embedded into your business. That means fast implementations, clean documentation, and systems that don&apos;t collapse when one person leaves.
            </p>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              If you want a partner that ships quietly, measures impact, and continuously improves what&apos;s running—this is built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="container py-10 md:py-12 lg:py-15" style={{ maxWidth: '80rem', margin: '0 auto', padding: '2.5rem 2rem 3rem' }}>
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div className="order-1">
            <h2 className="text-4xl font-semibold tracking-tight md:text-4xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              The team behind the systems
            </h2>
            <p className="mt-5 text-lg md:mt-6" style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We&apos;ve seen how high-growth companies get slowed down: not by lack of ambition, but by operational drag. Our work is to remove that drag—connecting the tools you already use, automating the repetitive steps, and implementing AI safely where it delivers real leverage.
            </p>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              If you&apos;re hiring for speed, reliability, and outcomes, we&apos;d love to talk.
            </p>
            <p className="text-lg" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              <a href="/partnerships" style={{ color: '#bbffcc', textDecoration: 'underline' }}>Explore partnership options here.</a>
            </p>
          </div>
          <img
            src="/0F184F36-4E6F-49F5-91BB-3C35938109A4_1_201_a.webp"
            alt="Novus Founder"
            width={480}
            height={400}
            className="order-2 object-cover"
            style={{ borderRadius: '12px', objectFit: 'cover', maxWidth: '70%', height: 'auto' }}
          />
        </div>
      </section>
    </section>
  );
};

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default About8;
