import logo from '../../assets/logo.svg';
import jly from '../../assets/jly.png';

function JellyverseCard() {
  return (
    <div className="feature-card">
      <div className="feature-card__header">
        <img src={logo} className="feature-card__icon" alt="icon"/>
        <span className="feature-card__title">JLY</span>
      </div>

      <div className="feature-card__description feature-card__description--jly">
        /the heart of Jellyverse: <br/>
        one token to rule them all
      </div>

      <img src={jly} className="feature-card__img" alt="icon"/>
    </div>
  );
}

export default JellyverseCard;
