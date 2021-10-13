import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';

import {
    ContactUs,
    UpButton,
    TelegramWidget, WhatIsCrowdSale, HowToStart, DevServices, WhyWeUnique, WhyChooseUs, About, OtherSites
} from "../../components";

const HomePage: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    if (typeof window !== 'undefined') {
        window.onscroll = (): void => {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
    }

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
