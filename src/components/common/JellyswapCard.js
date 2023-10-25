import arrows_white from '../../assets/arrows_white.svg';
import arrows from '../../assets/arrows.svg';
import img1 from '../../assets/img_1.png';
import img2 from '../../assets/img_2.png';
import img3 from '../../assets/img_3.png';

function JellyswapCard({isHovered}) {
    return (
        <div
            className="feature-card feature-card--jellyswap"
        >
            <div className="feature-card__header">
                <img src={isHovered ? arrows : arrows_white} className="feature-card__icon" alt="icon"/>
                <span className={`feature-card__title ${isHovered ? 'feature-card__title--dark' : ''}`}>Jellyswap</span>
            </div>

            <div className={`feature-card__description ${isHovered ? 'feature-card__description--dark' : ''}`}>
                /swap and pool your assets
            </div>

            <img src={img1} className="feature-card__decoration-img-first" alt="icon"/>
            <img src={img2} className="feature-card__decoration-img-second" alt="icon"/>
            <img src={img3} className="feature-card__decoration-img-third" alt="icon"/>
        </div>
    );
}

export default JellyswapCard;
