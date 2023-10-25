import IconLink from "../common/IconLink";
import Toolbar from "../Toolbar";
import React, {useEffect, useState} from "react";

function HeaderWelcome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <div className="header__container app__wrapper">
            <Toolbar/>
            <div className="header__content">
                <div className="welcome__links">
                    <IconLink icon="telegram" />
                    <IconLink icon="telegram" isVolume />
                    <IconLink icon="discord" />
                    <IconLink icon="x" />
                    <IconLink icon="facebook" />
                    <IconLink icon="linkedin" />
                    <IconLink icon="reddit" />
                </div>
                <div className="header_titles">
                    <div className="header__title header__title--margin-top">
                        <span className={isVisible ? 'visible' : ''}>welcome</span><br />
                        <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.2s' }}>to defi 3.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderWelcome;
