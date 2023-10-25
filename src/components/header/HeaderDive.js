import React, { useRef, useState, useEffect } from 'react';

function HeaderDive({ appRef }) {
    const headerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.6 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <div className="header__container app__wrapper" ref={headerRef}>
            <div className="header_titles">
                <div className="header__title header__title--margin-top">
                    <span className={isVisible ? 'visible' : ''}>let's dive</span><br />
                    <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.2s' }}>into</span><br />
                    <span className={isVisible ? 'visible' : ''} style={{ animationDelay: '0.4s' }}>the jellyverse</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderDive;
