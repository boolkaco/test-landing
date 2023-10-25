import JellyverseCard from "./JellyverseCard";
import JellybondCard from "./JellybondCard";
import JellyswapCard from "./JellyswapCard";
import JusdCard from "./JusdCard";
import JellystakeCard from "./JellystakeCard";
import MoreCard from "./MoreCard";
import {useRef, useState} from "react";
import CardTitle from "./CardTitle";
import CardComingSoon from "./CardComingSoon";

function FeatureCard(props) {
  const boxRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const jlyDesc = "At the heart of Jellyverse is the Jelly Token (JLY), a dual-purpose governance and utility token. JLY holders can influence key decisions in the ecosystem, including strategic developments and platform features. They can vote on protocols and decentralized applications (dApps) within the platform. A share of transaction fees across Jellyverse is also returned as rewards to those who stake JLY and participate in governance.";
  const jellyswapDesc = "JellySwap is a decentralized exchange (DEX) offering a range of secure and flexible trading options. Features include WeightedPools, decentralized indices, and optimized algorithms for stablecoin trading. It uniquely offers a multi-token pool option, allowing up to 8 tokens in auto-rebalancing portfolio pools. These features make JellySwap versatile and accommodating for liquidity providers, traders, and developers.";
  const jellystakeDesc = "JellyStake introduces a dual-reward staking system, offering both inflation-based rewards and a share of transaction fees from Jellyverse, adding a real-yield aspect. This model boosts long-term staking sustainability. Governance features are also included: voting power is tied to stake size and lock-up period, allowing users to impact Jellyverse DAO decisions, from strategic choices to protocol integration.";

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const offsetX = rect.left + width / 2;
    const offsetY = rect.top + height / 2;

    const deltaX = (e.clientX - offsetX) / width;
    const deltaY = (e.clientY - offsetY) / height;

    const rotateY = (20 * deltaX) * 2;
    const rotateX = (-20 * deltaY) * 2;

    box.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`;
  }

  const handleMouseOut = () => {
    const box = boxRef.current;
    if (box) {
      box.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    }
  }

  const handleClick = () => {
    const box = boxRef.current;
    if (box && (props.type === "jellyverse" || props.type === "jellyswap" || props.type === "jellystake")) {
      box.style.transition = 'transform 0.5s';
      box.style.transform = 'rotateY(180deg)';
    }
  }
  return (
    <div className="feature-card__wrapper">
      <div
        ref={boxRef}
        style={{
          transition: 'transform 0.1s ease',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
        }}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        className="feature-card__card"
      >
        <div className="feature-card__content">
          <div
              className="feature-card__content-front"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              datatype={props.type}
          >
            {props.type === 'jellyverse' && <JellyverseCard/>}
            {props.type === 'jellyswap' && <JellyswapCard isHovered={isHovered}/>}
            {props.type === 'jellystake' && <JellystakeCard/>}
            {props.type === 'jellybond' && <JellybondCard/>}
            {props.type === 'jusd' && <JusdCard/>}
            {props.type === 'more' && <MoreCard/>}
          </div>
          <div className="feature-card__content-back">
            <div className="feature-card__content-back-title">
              {props.type === 'jellyverse' && <CardTitle type="JLY" />}
              {props.type === 'jellyswap' && <CardTitle type="Jellyswap" />}
              {props.type === 'jellystake' && <CardTitle type="Jellystake" />}
            </div>
            <div className="feature-card__content-back-description">
                {props.type === 'jellyverse' && jlyDesc}
                {props.type === 'jellyswap' && jellyswapDesc}
                {props.type === 'jellystake' && jellystakeDesc}
            </div>
          </div>
        </div>
          {(props.type === 'jellybond' || props.type === 'jusd') && <CardComingSoon type={props.type} />}
      </div>
    </div>
  );
}

export default FeatureCard;