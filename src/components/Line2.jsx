import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HandDrawnLine2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when the line is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  // Animation variant for drawing the line
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  return (
    <div ref={lineRef}>
      <svg
        width="100%"
        height="8px"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-2"
      >
        <motion.path
          d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial="hidden" // Initial hidden state
          animate={isVisible ? 'visible' : 'hidden'} // Trigger animation based on visibility
          variants={lineVariants} // Animation variants
        />
      </svg>
    </div>
  );
};

export default HandDrawnLine2;
