import textLogo from "../../assets/text_logo.svg";
import shell_decoration from "../../assets/shell_decoration.svg";
import React, {useState, useEffect, useRef} from 'react';

function FeaturesTitle({appRef, isVisible}) {
  const headerRef = useRef(null);

  const description = "is a revolutionary financial platform that merges the power of decentralized finance with real-world assets. It provides a seamless and user-friendly experience for exploring and investing in a diverse range of digital and tangible assets.";

  function animatedText(text) {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        className={isVisible ? "word-animation" : ""}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
            {word}
        &nbsp; {}
        </span>
    ));
  }

  return (
    <div className="features-title">
      <div className="features-title__content">
        <div
          className="features-title__wrapper features-title--padding app__wrapper"
        >
          <div
            className="features-title__description"
          >
            <div className="features-title__description-img">
              <img
                  ref={headerRef}
                  alt="logo"
                  src={textLogo}
                  className={`features-title__description-logo`}
              />
            </div>
            &nbsp;
            {animatedText(description)}
          </div>

          <div className="features-title__img-shell-wrapper">
            <img
              src={shell_decoration}
              className="move-object features-title__shell-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesTitle;
