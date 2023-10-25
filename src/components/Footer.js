import IconLink from "./common/IconLink";
import JellyverseLogo from "./icons/JellyverseIcon";
import coinMarketCap from "../assets/coin_market_cap.svg";
import lama from "../assets/lama.svg";
import circle from "../assets/circle.svg";
import done from "../assets/done.svg";

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer app__wrapper">
        <div className="footer__social-links">
          <IconLink icon="telegram" />
          <IconLink icon="telegram" isVolume />
          <IconLink icon="discord" />
          <IconLink icon="x" />
          <IconLink icon="facebook" />
          <IconLink icon="linkedin" />
          <IconLink icon="reddit" />
        </div>

        <div className="footer__content">
          <div className="footer__column-container">
            <div className="footer__content-column">
              <JellyverseLogo />

              <div className="footer__footer-link footer__jellyverse-link">
                jellyverse.org
              </div>

              <div className="footer__jelly-links-group">
                <div className="footer__footer-link">
                  Listed on
                </div>

                <div className="footer__footer-link">
                  <img src={coinMarketCap} className="footer__coin-market-cap-icon" alt="coin"/>
                </div>

                <div className="footer__footer-link">
                  <img src={lama} className="footer__lama-icon" alt="lama"/>
                  <span className="footer__lama-link">DeFi Llama</span>
                </div>
              </div>

              <div className="footer__general-links-group">
                <div className="footer__footer-link">
                  Terms of Service
                </div>
                <div className="footer__footer-link">
                  Risks
                </div>
                <div className="footer__footer-link">
                  Cookies Policy
                </div>
                <div className="footer__footer-link">
                  Privacy Policy
                </div>
                <div className="footer__footer-link">
                  Docs
                </div>
                <div className="footer__footer-link">
                  GitHub
                </div>
              </div>
            </div>
            <div className="footer__content-column footer__content-column-field">
              <span className="footer__content-column-title">
                See you later, alligator :)
              </span>
              <div className="footer__content-column-contact-field">
                <input placeholder="reachout@jellyverse.com" type="text" className="footer__input"/>
                <button className="footer__submit">
                  <span className="footer__submit-text">Done</span>
                  <img src={done} className="footer__submit-icon" alt="done"/>
                </button>
              </div>
            </div>
          </div>
          <div className="footer__column-end-container">
            <div className="footer__column-end-container-text">Feedback or comments? Get in touch with us at <span className="footer__support-email">reachout@jellyverse.com</span></div>
            <div className="footer__column-end-container-text footer__column-audited-by">
              Audited by
              <img src={circle} className="footer__circle" alt="circle"/>
              <img src={circle} className="footer__circle" alt="circle"/>
              <img src={circle} className="footer__circle" alt="circle"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;