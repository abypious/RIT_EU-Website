// ScrollUpButton.js
import React, { useEffect, useState } from 'react';
import '../Components/Css/ScrollUp.css'; // Import the CSS file

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className="scroll-up-btn" onClick={scrollToTop}>
        <span> &#8679;</span>
      </button>
    )
  );
};

export default ScrollUp;
