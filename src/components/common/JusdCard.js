import jellystake from '../../assets/jellystake.svg';
import jusd from "../../assets/jusd_img.svg";

function JusdCard() {
  return (
    <div className="feature-card">
      <div className="feature-card__header">
        <img src={jellystake} className="feature-card__icon" alt="icon"/>
        <span className="feature-card__title">jUSD</span>
      </div>

      <div className="feature-card__description">
        /borrow capital to amplify leverage<br/>
        and unlock yield opportunities
      </div>

      <img src={jusd} className="feature-card__img feature-card__img--jellybond" alt="icon"/>
    </div>
  );
}

export default JusdCard;
