import graffiti from '../assets/graffiti.svg';
import textLogo from '../assets/text_logo.svg';
import shell_decoration from '../assets/shell_decoration.svg';
import stone_decoration from '../assets/stone_decoration.svg';
import armor_decoration from '../assets/armor_decoration.svg';
import graffitiLogo from '../assets/graffiti_logo.svg'
import FeatureCard from "./common/FeatureCard";

function Graffiti() {
  return (
    <div className="graffiti">
      <div className="graffiti__content">
        <div className="graffiti__wrapper app__wrapper">
          <div className="graffiti__description">
            <img
              src={textLogo}
              className="graffiti__description-logo"
              alt="logo"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            is a revolutionary financial platform that merges the power of decentralized finance with real-world assets.
            It provides a seamless and user-friendly experience for exploring and investing in a diverse range of
            digital and tangible assets.
          </div>

          <img
            src={shell_decoration}
            className="graffiti__description-img"
            alt="img"
          />

          <img
            src={stone_decoration}
            className="graffiti__description-img-second"
            alt="img"
          />

          <img
            src={armor_decoration}
            className="graffiti__description-img-third"
            alt="img"
          />

          <div className="graffiti__phrase">
            <span>explore a see</span>
          </div>

          <div className="graffiti__phrase-second">
            <span>of financial<br/> opportunities</span>
          </div>

          <div className="graffiti__phrase-third">
            <span>with</span>

            <div className="graffiti__logo">
              <img src={graffitiLogo} className="graffiti__logo-icon" alt="img"/>
            </div>
          </div>

          <div className="graffiti__features-wrapper">
            <div className="graffiti__features-title">
              Featuring
            </div>

            <div className="graffiti__features">
              <FeatureCard type="jellyverse"/>
              <FeatureCard type="jellyswap"/>
              <FeatureCard type="jellystake"/>
              <FeatureCard type="jellybond"/>
              <FeatureCard type="jusd"/>
              <FeatureCard type="more"/>
            </div>
          </div>

          <div className="graffiti__end-phrase">
            <span>get ready</span><br/>
            <span>for the defi</span><br/>
            <span>revolution</span><br/>
          </div>
        </div>
      </div>
      {/*<div className="graffiti__end-side"/>*/}
    </div>
  );
}

export default Graffiti;
