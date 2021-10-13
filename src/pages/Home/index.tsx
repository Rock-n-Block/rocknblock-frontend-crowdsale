import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useState} from 'preact/hooks';

import {
    ContactUs,
    UpButton,
    TelegramWidget, WhatIsCrowdSale, HowToStart, DevServices, WhyWeUnique, WhyChooseUs, About, OtherSites
} from "../../components";

const HomePage: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const logIt = useCallback(() => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [])

    useEffect(() => {

        const watchScroll = (): void => {
            window.addEventListener("scroll", logIt);
        }
        watchScroll();
        return (): void => {
            window.removeEventListener("scroll", logIt);
        };
    });

    return (
        <div>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <About />
            <WhatIsCrowdSale />
            <HowToStart />
            <DevServices />
            <WhyChooseUs />
            <WhyWeUnique />
            <OtherSites />
            <ContactUs title={'Launch Your Own  With Rock\'n\'Block!'} />
        </div>
    )
}

export default HomePage;
