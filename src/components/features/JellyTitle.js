import graffitiLogo from "../../assets/graffiti_logo.svg";

function JellyTitle({appRef, isVisible}) {
  return (
    <div className="features-title__jelly">
      <div className="features-title__content">
        <div className="features-title__wrapper features-title__wrapper--jelly app__wrapper">
          <div className="header_titles">
            <div className="header__title header__title--flex">
              <span className={isVisible ? 'visible' : ''}>with</span>
              <div className={isVisible ? 'features-title__logo visible' : 'features-title__logo'} style={{ animationDelay: '0.2s' }}>
                <img src={graffitiLogo} className="features-title__logo-icon" alt="img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JellyTitle;
