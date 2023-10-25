import arrow from "../assets/arrow_right.svg";
import arrowDown from "../assets/arrow_down.svg";

function BurnEvent() {
  return (
    <div className="burn-event">
      <div className="burn-event__event app__wrapper">
        <img src={arrow} className="burn-event__arrow-icon" alt="arrow"/>
        <img src={arrowDown} className="burn-event__arrow-icon-down" alt="arrow"/>
        <span className="burn-event__title">join the burn event now</span>
      </div>
    </div>
  );
}

export default BurnEvent;
