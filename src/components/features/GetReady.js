import React, {useEffect, useRef, useState} from "react";

function GetReady({appRef}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    if (!hasAnimated && headerRef.current && appRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const appRect = appRef.current.getBoundingClientRect();
      const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
      if (isElementVisible) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    if (appRef.current) {
      appRef.current.addEventListener('scroll', checkVisibility);
      return () => {
        appRef.current.removeEventListener('scroll', checkVisibility);
      };
    }
  }, []);

  return (
    <div className="features-title">
      <div className="features-title__content">
        <div className="features-title__wrapper app__wrapper">
          <div
            ref={headerRef}
            className={`features-title__phrase ${isVisible ? 'welcome__header-visible' : 'welcome__header-hidden'}`}
          >
            <span>get ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetReady;
