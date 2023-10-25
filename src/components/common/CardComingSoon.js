function CardComingSoon(props) {
    return (
        <div
            className={`card-coming-soon__coming-up ${props.type === 'jellybond' ? 'card-coming-soon__coming-up--up' : 'card-coming-soon__coming-up--down'}`}
        >
            <div className="card-coming-soon__marquee">
                <span className="card-coming-soon__marquee-content">
                  <span className="line">coming up later</span>
                  <span className="line">coming up later</span>
                  <span className="line">coming up later</span>
                  <span className="line">coming up later</span>
                </span>
            </div>
        </div>
    );
}

export default CardComingSoon;
