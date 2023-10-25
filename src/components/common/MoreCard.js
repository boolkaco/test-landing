import jellystake from '../../assets/jellystake.svg';
import more from "../../assets/more.svg";

function MoreCard() {
  return (
    <div className="feature-card feature-card--more">
      <div className="feature-card__more">
        more to come
      </div>

      <img src={more} className="feature-card__img--more" alt="icon"/>
    </div>
  );
}

export default MoreCard;
