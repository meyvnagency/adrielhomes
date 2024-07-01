import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './../styles/component.scss';

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="top-button">
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default TopButton;
