import React, {useEffect, useRef, useState} from "react";

function DefiRevolution({appRef, isVisible}) {
  console.log(isVisible)
  return (
    <div className="features-title">
      <div className="features-title__content features-title__content--revolution">
        <div className="features-title__wrapper app__wrapper">
          <div className="header_titles">
            <div
                className="header__title"
            >
              <span className={isVisible ? 'visible' : ''}>for the defi</span><br />
              <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.2s' }}>revolution</span><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefiRevolution;
