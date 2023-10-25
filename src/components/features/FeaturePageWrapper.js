import React, {useState, useEffect, useRef} from 'react';

function FeaturePageWrapper({appRef, heightValue}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const checkVisibility = () => {
    if (targetRef.current && appRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const appRect = appRef.current.getBoundingClientRect();
      const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
      if (isElementVisible && !isVisible) {
        window.requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }
    }
  };

  useEffect(() => {
    const moveRandomly = () => {
      const randomX = (Math.random() - 0.5) * 50;
      const randomY = (Math.random() - 0.5) * 50;
      setPosition({ x: randomX, y: randomY });
    }

    const intervalId = setInterval(moveRandomly, 1000);

    if (appRef.current) {
      appRef.current.addEventListener('scroll', checkVisibility);
    }

    return () => {
      clearInterval(intervalId);

      if (appRef.current) {
        appRef.current.removeEventListener('scroll', checkVisibility);
      }
    }
  }, []);

  const containerStyle = {
    height: `${heightValue}vh`
  };

  return (
    <div className="feature-page-wrapper" style={containerStyle}>
    </div>
  );
}

export default FeaturePageWrapper;
