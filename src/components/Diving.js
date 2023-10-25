import React, {useState, useEffect} from 'react';

function Diving() {
  const [completeAnimation, setCompleteAnimation] = useState(false);
  const [blocksAnimation, setBlocksAnimation] = useState(false);
  const [count, setCount] = useState(0);
  const duration = 2000;  // 2 секунды
  const endTime = Date.now() + duration;

  const animateNumber = () => {
    const now = Date.now();
    const elapsed = now - (endTime - duration);
    const percentage = Math.min(elapsed / duration, 1);

    setCount(Math.floor(percentage * 100));

    if (percentage >= 0.9) {
      setBlocksAnimation(true)

      setTimeout(() => {
        setCompleteAnimation(true);
      }, 700);
    }
    if (percentage <= 1) {
      requestAnimationFrame(animateNumber);
    }
  };

  useEffect(() => {
    animateNumber();
  }, []);

  return (
    <div
      className={`diving ${completeAnimation ? 'complete' : ''}`}
    >
      <div className="diving__title">
        <span>diving...</span>
        <span>{count}%</span>
      </div>
      <div className="diving__block-decoration-wrapper">
        <div
          className={`diving__block-decoration-wrapper diving__block-decoration ${blocksAnimation ? 'animate' : ''}`}
        />
      </div>
    </div>
  );
}

export default Diving;
