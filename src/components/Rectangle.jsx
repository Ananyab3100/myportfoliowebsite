import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HandDrawnRectangle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when the rectangle is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the rectangle is visible
    );

    if (rectRef.current) {
      observer.observe(rectRef.current);
    }

    return () => {
      if (rectRef.current) {
        observer.unobserve(rectRef.current);
      }
    };
  }, []);

  // Animation variant for drawing the dashed rectangle
  const rectVariants = {
    hidden: { strokeDashoffset: 400 }, // Initially hides the dashed stroke
    visible: {
      strokeDashoffset: 0, // Fully drawn dashed stroke
      transition: {
        duration: 2, // Duration of animation
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="flex justify-center items-center" ref={rectRef}>
      <div className="relative w-[120px] h-[100px] p-2"> {/* Adjusted size */}
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          className="absolute inset-0 pointer-events-none"
        >
          <motion.rect
            x="5"
            y="5"
            width="110"
            height="90"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8, 4" // Specifies the dashes (8 units stroke, 4 units space)
            variants={rectVariants} // Applying the animation variants
            initial="hidden" // Initial animation state
            animate={isVisible ? 'visible' : 'hidden'} // Trigger animation based on visibility
            style={{
              filter: 'url(#handdrawn-filter)',
            }}
          />
          <defs>
            <filter id="handdrawn-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.03"
                numOctaves="3"
              />
              <feDisplacementMap in="SourceGraphic" scale="2" />
            </filter>
          </defs>
        </svg>
        {/* Content inside the rectangle */}
        <div className="absolute inset-0 p-2 flex justify-center items-center"> {/* Reduced padding */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HandDrawnRectangle;
