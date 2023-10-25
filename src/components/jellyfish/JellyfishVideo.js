import first_idle from "../../assets/video/1_idle_1.webm";
import third_idle from "../../assets/video/3_idle_2.webm";
import first_transition from "../../assets/video/2_transition_1.webm";
import {useEffect, useRef, useState} from "react";

function JellyfishVideo({isFirstIdle, isThirdIdle, top}) {
    const firstTransitionVideoRef = useRef();

    useEffect(() => {
        console.log("isFirstIdle:", isFirstIdle);
        console.log("isThirdIdle:", isThirdIdle);
    }, [isFirstIdle, isThirdIdle]);

    const classes = ['jellyfish__background-video'];

    const [classNames, setClassNames] = useState([]);
    const [isShowTransition, setIsShowTransition] = useState(false);
    const [hasTransitionEnded, setHasTransitionEnded] = useState(false);

    useEffect(() => {
        if (isThirdIdle && !isShowTransition && !hasTransitionEnded) {
            setIsShowTransition(true);
        }
        if (isFirstIdle) {
            setHasTransitionEnded(false);
        }
    }, [isThirdIdle, isShowTransition, hasTransitionEnded]);

    useEffect(() => {
        if (isShowTransition && firstTransitionVideoRef.current) {
            firstTransitionVideoRef.current.play();

            const handleVideoEnd = () => {
                firstTransitionVideoRef.current.pause();
                firstTransitionVideoRef.current.currentTime = 0; // вернуться к началу видео
                setIsShowTransition(false);
                setHasTransitionEnded(true);
            };

            firstTransitionVideoRef.current.addEventListener('ended', handleVideoEnd);

            return () => {
                if (firstTransitionVideoRef.current) {
                    firstTransitionVideoRef.current.removeEventListener('ended', handleVideoEnd);
                }
            };
        }
    }, [isShowTransition]);

    useEffect(() => {
        if (isFirstIdle) {
            setClassNames([...classes, 'jellyfish__background-video--right'])
        } else {
            setClassNames([...classes, 'jellyfish__background-video--left']);
        }
    }, [isFirstIdle]);


    return (
        <div className="jellyfish__video-container" style={{top: `${top}px`, display: `${(isFirstIdle || isThirdIdle) ? 'block' : 'none' }`}}>
            <video
                className={`${classNames.join(' ')} ${isFirstIdle ? 'visible' : 'hidden'}`}
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={first_idle} type="video/webm"/>
            </video>

            <video
                ref={firstTransitionVideoRef}
                className={`${classNames.join(' ')} ${isThirdIdle && isShowTransition ? 'visible' : 'hidden'}`}
                preload="auto"
                muted
                playsInline
            >
                <source src={first_transition} type="video/webm"/>
            </video>

            <video
                className={`${classNames.join(' ')} ${isThirdIdle && !isShowTransition ? 'visible' : 'hidden'}`}
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={third_idle} type="video/webm"/>
            </video>
        </div>
    );
}

export default JellyfishVideo;
