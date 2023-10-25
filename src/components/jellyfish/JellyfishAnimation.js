import { useEffect, useState } from "react";

function JellyAnimation({ isWelcomeVisible, isThirdHeaderVisible, isFinanceTitleVisible, isJellyTitleVisible }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFourthAnimationPlaying, setIsFourthAnimationPlaying] = useState(false);

  const imagesContext1 = require.context('../../assets/jellyfish/first_idle', false, /\.(png|jpe?g)$/);
  const images1 = imagesContext1.keys().map(imagesContext1);

  const imagesContext2 = require.context('../../assets/jellyfish/transition', false, /\.(png|jpe?g)$/);
  const images2 = imagesContext2.keys().map(imagesContext2);

  const imagesContext3 = require.context('../../assets/jellyfish/second_idle', false, /\.(png|jpe?g)$/);
  const images3 = imagesContext3.keys().map(imagesContext3);

  const imagesContext4 = require.context('../../assets/jellyfish/second_transition', false, /\.(png|jpe?g)$/);
  const images4 = imagesContext4.keys().map(imagesContext4);

  const imagesContext5 = require.context('../../assets/jellyfish/third_idle', false, /\.(png|jpe?g)$/);
  const images5 = imagesContext5.keys().map(imagesContext5);

  useEffect(() => {
    setCurrentImages(isWelcomeVisible ? images1 : images2);
    if (!isWelcomeVisible) setIsTransitioning(true);
  }, [isWelcomeVisible]);

  useEffect(() => {
    if (isThirdHeaderVisible && !isFourthAnimationPlaying) {
      setIsFourthAnimationPlaying(true);
      setCurrentImages(images4);
    }
  }, [isThirdHeaderVisible]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (isTransitioning && prevIndex + 1 === images2.length) {
          setIsTransitioning(false);
          setCurrentImages(images3);
          return 0;
        }

        if (isFourthAnimationPlaying && prevIndex + 1 === images4.length) {
          setIsFourthAnimationPlaying(false);
          setCurrentImages(images5);
          return 0;
        }

        return (prevIndex + 1) % currentImages.length;
      });
    }, 35);

    return () => clearInterval(intervalId);
  }, [currentImages.length, isTransitioning, isFourthAnimationPlaying]);

  let classNames = ['jellyfish__animation'];
  if (isWelcomeVisible || isThirdHeaderVisible) {
    classNames.push('jellyfish__animation-move-right')
  } else {
    classNames.push('jellyfish__animation-move-left');
  }
  if (isJellyTitleVisible) {
    classNames.push('jellyfish__animation-move-hide')
  } else {
    classNames.push('jellyfish__animation-move-show')
  }

  return <img src={currentImages[currentImageIndex]} className={classNames.join(' ')} alt="animation" />;
}

export default JellyAnimation;
