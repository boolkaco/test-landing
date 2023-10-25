import graffiti from "../assets/graffiti_2.svg";
import React, {useEffect, useRef, useState} from "react";
import defi_graffiti_smudges from "../assets/defi_graffiti_smudges.svg";

function DefiGraffiti({appRef}) {
    const [isVisible, setIsVisible] = useState(false);
    const graffitiRef = useRef(null);

    useEffect(() => {
        if (graffitiRef.current && appRef.current) {
            const observer = new IntersectionObserver(
                entries => {
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                },
                {
                    root: appRef.current,
                    threshold: 0.9
                }
            );

            observer.observe(graffitiRef.current);

            return () => observer.unobserve(graffitiRef.current);
        }
    }, []);

    return (
        <div
            ref={graffitiRef}
            className="defi-graffiti"
        >
            <div className="app__wrapper defi-graffiti__wrapper">
                <div className="defi-graffiti__img-wrapper">
                    <img
                        src={graffiti}
                        className="defi-graffiti__graffiti"
                        alt="graffiti"
                    />
                    <img
                        src={defi_graffiti_smudges}
                        alt="graffiti_smudges"
                        className={`defi-graffiti__graffiti-img-smudges ${isVisible ? 'defi-graffiti__graffiti-img-smudges--visible' : 'defi-graffiti__graffiti-img-smudges--hidden'}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default DefiGraffiti;
