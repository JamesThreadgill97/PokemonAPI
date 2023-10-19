import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
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

  // Use the `scrollToTop` function from `react-scroll` to smoothly scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} style={styles.backToTopBtn}>
          Back to top
        </div>
      )}
    </>
  );
}

const styles = {
  backToTopBtn: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
    zIndex: 1000
  }
};

export default BackToTop;
