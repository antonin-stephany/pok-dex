import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollButton.css';

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 2 * window.innerHeight);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button className={`scroll-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ScrollButton;
