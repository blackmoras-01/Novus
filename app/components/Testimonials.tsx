'use client';

import { useEffect, useState, useRef } from 'react';

interface Testimonial {
  username: string;
  handle: string | null;
  avatar: string;
  content: string;
  date: string;
  likes: number | null;
  retweets: number | null;
  isGhost?: boolean;
  ghostIndex?: number;
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ghostTemplate: Testimonial = {
    username: "Client Name",
    handle: null,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost",
    content: "Amazing work! The team delivered exceptional results that exceeded our expectations. Highly professional and skilled.",
    date: "2026",
    likes: null,
    retweets: null,
    isGhost: true,
  };

  const realTestimonials: Testimonial[] = [
    {
      username: "Sarah Jenkins",
      handle: "@s_jenkins_dev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "The speed at which we can now process incoming requests is insane. The AI agent handles the initial Q&A perfectly, so our team only steps in when a lead is actually qualified.",
      date: "Jan 10, 2026",
      likes: 112,
      retweets: 18,
    },
    {
      username: "Aniek de Vries",
      handle: null,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aniek",
      content: "Ik was bang dat 'automatisering' afstandelijk zou klinken, maar het tegendeel is waar. Doordat de standaard mailtjes en planning nu vanzelf gaan, heb ik juist méér tijd voor persoonlijk contact met mijn klanten. Een verademing.",
      date: "Jan 2, 2026",
      likes: null,
      retweets: null,
    },
    {
      username: "David O'Connell",
      handle: null,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      content: "We approached Novus for a simple software integration, but they ended up optimizing our entire lead intake workflow. It's rare to find developers who actually understand the commercial side of a business",
      date: "Dec 28, 2025",
      likes: null,
      retweets: null,
    },
    {
      username: "Jeroen Bakhuizen",
      handle: "@jeroen_vdb",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeroen",
      content: "Eindelijk praten onze systemen met elkaar. Novus heeft onze projectmanagement-tool gekoppeld aan de facturatie, wat ons wekelijks uren handmatig werk scheelt. Geen fouten meer bij het overzetten van data, gewoon rust.",
      date: "Jan 15, 2026",
      likes: 38,
      retweets: 7,
    },
    {
      username: "Marcus Thorne",
      handle: "@m_thorne_ai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      content: "Finally, a partner that doesn't overcomplicate things. The implementation was smooth, the dashboard is clean, and the automated reporting saves me a massive headache every Friday afternoon.",
      date: "Jan 5, 2026",
      likes: 84,
      retweets: 14,
    },
  ];

  const testimonials: Testimonial[] = [
    { ...ghostTemplate, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost1", ghostIndex: -3 },
    { ...ghostTemplate, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost2", ghostIndex: -2 },
    { ...ghostTemplate, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost3", ghostIndex: -1 },
    ...realTestimonials,
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        if (activeIndex !== null || hoveredIndex !== null) {
          setActiveIndex(null);
          setHoveredIndex(null);
        }
      }
    };

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeIndex, hoveredIndex]);

  const getCardStyle = (realIndex: number, isGhost: boolean) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const focusedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    const xOffset = realIndex * (isMobile ? 40 : 60);
    const yOffset = realIndex * (isMobile ? 30 : 45);

    let ghostOpacity = 1;
    let ghostScale = 1;
    if (isGhost) {
      if (realIndex < 0) {
        const distance = Math.abs(realIndex);
        ghostOpacity = Math.max(0.15, 0.5 - (distance * 0.15));
        ghostScale = Math.max(0.85, 1 - (distance * 0.05));
      } else {
        ghostOpacity = 0.35;
        ghostScale = 0.95;
      }
    }

    let transform = `translate(${xOffset}px, ${yOffset}px) skewY(-6deg)`;
    if (isGhost) {
      transform = `translate(${xOffset}px, ${yOffset}px) scale(${ghostScale}) skewY(-6deg)`;
    }

    if (focusedIndex !== null) {
      if (realIndex === focusedIndex) {
        const liftAmount = isMobile ? 30 : 40;
        if (isGhost) {
          transform = `translate(${xOffset}px, ${yOffset - liftAmount}px) scale(${ghostScale}) skewY(-6deg)`;
        } else {
          transform = `translate(${xOffset}px, ${yOffset - liftAmount}px) skewY(-6deg)`;
        }
      } else if (realIndex > focusedIndex) {
        const pushAmount = isMobile ? 70 : 100;
        const newX = xOffset + pushAmount;
        const newY = yOffset + pushAmount;
        if (isGhost) {
          transform = `translate(${newX}px, ${newY}px) scale(${ghostScale}) skewY(-6deg)`;
        } else {
          transform = `translate(${newX}px, ${newY}px) skewY(-6deg)`;
        }
      }
    }

    return {
      transform,
      zIndex: realIndex,
      opacity: isGhost ? ghostOpacity : 1,
    };
  };

  return (
    <>
      <style jsx>{`
        .testimonials-container {
          display: grid;
          grid-template-areas: 'stack';
          place-items: start;
          position: relative;
          min-height: 600px;
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          padding: 2rem;
          padding-left: 1rem;
          opacity: 1;
          animation: fadeIn 700ms ease;
        }

        @media (max-width: 640px) {
          .testimonials-container {
            padding-left: 0.5rem;
            padding-right: 2rem;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .testimonial-card {
          grid-area: stack;
          width: 380px;
          max-width: 90vw;
          min-height: 160px;
          transform: skewY(-6deg);
          border-radius: 16px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
          transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          color: #ffffff;
        }

        .testimonial-card.ghost {
          cursor: pointer;
        }

        :global(body.light-mode) .testimonial-card.ghost {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(0, 0, 0, 0.4);
        }

        :global(body.light-mode) .testimonial-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          color: #000000;
        }

        .testimonial-card.hovered {
          border-color: rgba(187, 255, 204, 0.8);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        :global(body.light-mode) .testimonial-card.hovered {
          border-color: rgba(187, 255, 204, 0.7);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .testimonial-card.active {
          border: 2px solid rgba(187, 255, 204, 0.6);
        }

        .testimonial-header {
          display: flex;
          align-items: start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #86efac, #fde047, #86efac);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-user {
          flex: 1;
          min-width: 0;
        }

        .testimonial-username {
          font-weight: 700;
          font-size: 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #ffffff;
        }

        :global(body.light-mode) .testimonial-username {
          color: #000000;
        }

        .testimonial-handle {
          opacity: 0.7;
          font-size: 0.875rem;
          color: #ffffff;
        }

        :global(body.light-mode) .testimonial-handle {
          color: #000000;
          opacity: 0.6;
        }

        .testimonial-verified {
          width: 16px;
          height: 16px;
          color: #1d9bf0;
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
        }

        .testimonial-content {
          font-size: 0.9375rem;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 400ms ease;
          color: #ffffff;
        }

        :global(body.light-mode) .testimonial-content {
          color: #000000;
        }

        .testimonial-card:hover .testimonial-content {
          -webkit-line-clamp: unset;
          display: block;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0.8;
          font-size: 0.875rem;
          margin-top: auto;
          color: #ffffff;
        }

        :global(body.light-mode) .testimonial-footer {
          color: #000000;
          opacity: 0.6;
        }

        .testimonial-stats {
          display: flex;
          gap: 1rem;
          color: #ffffff;
        }

        :global(body.light-mode) .testimonial-stats {
          color: #000000;
        }

        .testimonial-stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .twitter-logo {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          opacity: 1;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .testimonial-card {
            width: 260px;
            min-height: 140px;
            padding: 0.75rem;
          }

          .testimonial-avatar {
            width: 36px;
            height: 36px;
          }

          .testimonial-username {
            font-size: 0.75rem;
          }

          .testimonial-handle {
            font-size: 0.625rem;
          }

          .testimonial-content {
            font-size: 0.75rem;
            -webkit-line-clamp: 3;
          }

          .testimonial-footer {
            font-size: 0.625rem;
          }
        }
      `}</style>

      <div className="testimonials-container" ref={containerRef}>
        {testimonials.map((testimonial, arrayIndex) => {
          const realIndex = arrayIndex - 3;
          const isGhost = testimonial.isGhost === true;
          const hasTwitter = testimonial.handle !== null && !isGhost;
          const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
          const isHovered = hoveredIndex === realIndex;
          const isActive = activeIndex === realIndex;

          return (
            <div
              key={arrayIndex}
              className={`testimonial-card ${isGhost ? 'ghost' : ''} ${isHovered ? 'hovered' : ''} ${isActive ? 'active' : ''}`}
              style={getCardStyle(realIndex, isGhost)}
              onMouseEnter={() => setHoveredIndex(realIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                if (!isGhost && isTouchDevice) {
                  if (!(e.target as HTMLElement).closest('.twitter-logo')) {
                    if (activeIndex !== realIndex) {
                      e.preventDefault();
                      setActiveIndex(realIndex);
                    }
                  }
                }
              }}
            >
              {!isGhost && (
                <>
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src={testimonial.avatar} alt={testimonial.username} />
                    </div>
                    <div className="testimonial-user">
                      <div className="testimonial-username">
                        {testimonial.username}
                        {hasTwitter && (
                          <svg className="testimonial-verified" viewBox="0 0 22 22" fill="currentColor">
                            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/>
                          </svg>
                        )}
                      </div>
                      {hasTwitter && <div className="testimonial-handle">{testimonial.handle}</div>}
                    </div>
                    {hasTwitter && (
                      <svg 
                        className="twitter-logo" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://x.com', '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                  </div>
                  <p className="testimonial-content">{testimonial.content}</p>
                  <div className="testimonial-footer">
                    <span>{testimonial.date}</span>
                    {hasTwitter && (
                      <div className="testimonial-stats">
                        <div className="testimonial-stat">
                          <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                          </svg>
                          <span>{testimonial.likes}</span>
                        </div>
                        <div className="testimonial-stat">
                          <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                          </svg>
                          <span>{testimonial.retweets}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
