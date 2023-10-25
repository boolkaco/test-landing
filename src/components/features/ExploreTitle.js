import React, {useState, useEffect, useRef} from 'react';
import stone_decoration from "../../assets/stone_decoration.svg";

function ExploreTitle({appRef, isVisible}) {
  const headerTitleRef = useRef(null);
  const [headerTitleSize, setHeaderTitleSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const randomX = (Math.random() - 0.5) * 50;
      const randomY = (Math.random() - 0.5) * 50;
      setPosition({ x: randomX, y: randomY });
    }

    const intervalId = setInterval(moveRandomly, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (headerTitleRef.current) {
      const { offsetWidth, offsetHeight } = headerTitleRef.current;
      setHeaderTitleSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [isVisible, headerTitleRef.current]);

  return (
    <div className="features-title">
      <div className="features-title__content features-title__content--padding">
        <div className="features-title__wrapper app__wrapper">
          <div className="header_titles">
            <div
                ref={headerTitleRef}
                className="header__title"
            >
              <span className={isVisible ? 'visible' : ''}>explore</span><br />
              <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.2s' }}>a see</span><br />
              <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.4s' }}>of financial</span><br />
              <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.6s' }}>opportunities</span><br />
            </div>
          </div>

          <div className="features-title__img-stone-wrapper">
            <img
              src={stone_decoration}
              className="move-object graffiti__stone-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTitle;
