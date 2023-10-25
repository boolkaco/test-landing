import jellyverse from '../../assets/logo.svg';
import jellyswap from '../../assets/arrows_white.svg';
import jellystake from '../../assets/jellystake.svg';

function CardTitle(props) {
    return (
        <div className="card-title__wrapper">
            {props.type === 'JLY' && <img src={jellyverse} className="" alt="icon"/>}
            {props.type === 'Jellyswap' && <img src={jellyswap} className="" alt="icon"/>}
            {props.type === 'Jellystake' && <img src={jellystake} className="" alt="icon"/>}
            <div className="card-title">
                {props.type}
            </div>
        </div>
    );
}

export default CardTitle;
