// src/components/FadeInWrapper.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FadeInWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust this value based on when you want the animation to trigger
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={wrapperRef}
      variants={animationVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
