import TickerLine from "./components/TickerLine";
import BurnEvent from "./components/BurnEvent";
import Footer from "./components/Footer";
import Diving from "./components/Diving";
import FeaturesTitle from "./components/features/FeaturesTitle";
import ExploreTitle from "./components/features/ExploreTitle";
import JellyTitle from "./components/features/JellyTitle";
import FeaturingList from "./components/features/FeaturingList";
import GetReady from "./components/features/GetReady";
import DefiRevolution from "./components/features/DefiRevolution";
import DefiGraffiti from "./components/DefiGraffiti";
import WelcomeDefiGraffiti from "./components/WelcomeDefiGraffiti";
import React, {useRef, useState, useEffect} from 'react';
import JellyfishBottom from "./components/jellyfish/JellyfishBottom";
import JellyfishVideo from "./components/jellyfish/JellyfishVideo";
import HeaderWelcome from "./components/header/HeaderWelcome";
import HeaderDive from "./components/header/HeaderDive";
import { Scrollbar } from "smooth-scrollbar-react";
import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

function App() {
    const scrollbar = useRef(BaseScrollbar);

    const appRef = useRef(null);
    const welcomeRef = useRef(null);
    const diveRef = useRef(null);
    const jellyTitleRef = useRef(null);
    const featuresTitleRef = useRef(null);
    const exploreTitleRef = useRef(null);
    const featuringListRef = useRef(null);
    const getReadyRef = useRef(null);
    const defiRevolutionRef = useRef(null);
    const defiGraffitiRef = useRef(null);

    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
    const [isSecondHeaderVisible, setIsSecondHeaderVisible] = useState(false);
    const [isGetReady, setIsGetReady] = useState(false);
    const [isFeaturesTitle, setIsFeaturesTitle] = useState(false);
    const [isExploreTitle, setIsExploreTitle] = useState(false);
    const [isJellyTitle, setIsJellyTitle] = useState(false);
    const [isFeaturing, setIsFeaturing] = useState(false);
    const [isDefiRevolution, setIsDefiRevolution] = useState(false);
    const [isDefiGraffiti, setIsDefiGraffiti] = useState(false);
    const [top, setTop] = useState(0);
    const [limit, setLimit] = useState(0);
    const [backgroundPosition, setBackgroundPosition] = useState(100);

    function onSmoothScroll(e) {
        setTop((prevTop) => {

            const newTop = e.offset.y;
            if (newTop !== prevTop) {
            }
            return newTop;
        });
        setLimit(e.limit.y);
    }

    useEffect(() => {
        if (isFeaturesTitle) {
            const newBackgroundPosition = 100 - (top / limit * 100);
            setBackgroundPosition(newBackgroundPosition);
        }
    }, [top, isFeaturesTitle, limit]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === 'headerWelcome' && entry.isIntersecting) {
                        setIsWelcomeVisible(true);
                        setIsSecondHeaderVisible(false);
                    } else if (entry.target.id === 'headerDive' && entry.isIntersecting) {
                        setIsSecondHeaderVisible(true);
                        setIsWelcomeVisible(false);
                    } else if (entry.target.id === 'featuresTitle' && entry.isIntersecting) {
                        setBackgroundPosition(0);
                        setIsFeaturesTitle(true);
                        if (isJellyTitle) {
                            setIsSecondHeaderVisible(true);
                        }
                    } else if (entry.target.id === 'jellyTitle' && entry.isIntersecting) {
                        setIsJellyTitle(true);
                        setIsSecondHeaderVisible(false);
                    } else if (entry.target.id === 'exploreTitle' && entry.isIntersecting) {
                        setIsExploreTitle(true);
                    } else if (entry.target.id === 'defiRevolution' && entry.isIntersecting) {
                        setIsDefiRevolution(true);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        if (welcomeRef.current) observer.observe(welcomeRef.current);
        if (diveRef.current) observer.observe(diveRef.current);
        if (jellyTitleRef.current) observer.observe(jellyTitleRef.current);
        if (featuresTitleRef.current) observer.observe(featuresTitleRef.current);
        if (exploreTitleRef.current) observer.observe(exploreTitleRef.current);
        if (featuringListRef.current) observer.observe(featuringListRef.current);
        if (getReadyRef.current) observer.observe(getReadyRef.current);
        if (defiRevolutionRef.current) observer.observe(defiRevolutionRef.current);
        if (defiGraffitiRef.current) observer.observe(defiGraffitiRef.current);

        return () => {
            if (welcomeRef.current) observer.unobserve(welcomeRef.current);
            if (diveRef.current) observer.unobserve(diveRef.current);
            if (jellyTitleRef.current) observer.unobserve(jellyTitleRef.current);
            if (featuresTitleRef.current) observer.unobserve(featuresTitleRef.current);
            if (exploreTitleRef.current) observer.unobserve(exploreTitleRef.current);
            if (featuringListRef.current) observer.unobserve(featuringListRef.current);
            if (getReadyRef.current) observer.unobserve(getReadyRef.current);
            if (defiRevolutionRef.current) observer.unobserve(defiRevolutionRef.current);
            if (defiGraffitiRef.current) observer.unobserve(defiGraffitiRef.current);
        };
    }, []);

    return (
        <div
            className="app"
            ref={appRef}
            style={{ maxHeight: '100vh', display: "flex" }}
        >
            {/*<div className="animated-background" style={{ transform: `translateY(${backgroundPosition}%)`, width: limit / 2 }}></div>*/}
            <Scrollbar
                className="app__scrollbar"
                ref={scrollbar}
                onScroll={onSmoothScroll}
                plugins={{
                    overscroll: {
                        effect: "glow",
                    }
                }}
            >
                <Diving/>
                <JellyfishVideo
                    isFirstIdle={isWelcomeVisible}
                    isThirdIdle={isSecondHeaderVisible}
                    top={top}
                />
                <div
                    ref={welcomeRef}
                    id="headerWelcome"
                >
                    <HeaderWelcome />
                </div>
                <div
                    ref={diveRef}
                    id="headerDive"
                >
                    <HeaderDive appRef={appRef}/>
                </div>
                <WelcomeDefiGraffiti />
                <div
                    ref={featuresTitleRef}
                    id="featuresTitle"
                >
                    <FeaturesTitle
                        appRef={appRef}
                        isVisible={isFeaturesTitle}
                    />
                </div>
                <div
                    ref={exploreTitleRef}
                    id="exploreTitle"
                >
                    <ExploreTitle
                        appRef={appRef}
                        isVisible={isExploreTitle}
                    />
                </div>
                <div
                    ref={jellyTitleRef}
                    id="jellyTitle"
                >
                    <JellyTitle
                        appRef={appRef}
                        isVisible={isJellyTitle}
                    />
                </div>
                <div
                    ref={featuringListRef}
                    id="featuring"
                >
                    <FeaturingList/>
                </div>
                <div ref={defiRevolutionRef} id="defiRevolution">
                    <DefiRevolution appRef={appRef} isVisible={isDefiRevolution}/>
                </div>
                <div ref={defiGraffitiRef} id="defi-graffiti">
                    <DefiGraffiti appRef={appRef}/>
                </div>
                {/*<JellyfishBottom*/}
                {/*    isBottom={true}*/}
                {/*    isFeaturing={isFeaturing}*/}
                {/*    isGetReady={isGetReady}*/}
                {/*    isRevolution={isDefiRevolution}*/}
                {/*    isGraffiti={isDefiGraffiti}*/}
                {/*/>*/}
                <BurnEvent/>
                <Footer/>
                <TickerLine/>
            </Scrollbar>
        </div>
    );
}

export default App;
