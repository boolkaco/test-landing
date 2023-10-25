import jellystake from '../../assets/jellystake.svg';
import img4 from '../../assets/img_4.png';

function JellystakeCard() {

    return (
        <div className="feature-card">
            <div className="feature-card__header">
                <img src={jellystake} className="feature-card__icon" alt="icon"/>
                <span className="feature-card__title">Jellystake</span>
            </div>

            <div className="feature-card__description">
                /stake JLY and govern jellyverse
            </div>

            <img src={img4} className="feature-card__decoration-img-fourth" alt="icon"/>
        </div>
    );
}

export default JellystakeCard;
