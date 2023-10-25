import jellystake from '../../assets/jellystake.svg';
import jellybond from "../../assets/jellybond_img.svg";

function JellybondCard() {
  return (
    <div className="feature-card">
      <div className="feature-card__header">
        <img src={jellystake} className="feature-card__icon" alt="icon"/>
        <span className="feature-card__title">JellyBond</span>
      </div>

      <div className="feature-card__description">
        /bond assets for additional yield
      </div>

      <img src={jellybond} className="feature-card__img feature-card__img--jellybond" alt="icon"/>
    </div>
  );
}

export default JellybondCard;
