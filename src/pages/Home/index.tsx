import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';

import {
    ContactUs,
    UpButton,
    TelegramWidget, WhatIsCrowdSale, HowToStart, DevServices, WhyWeUnique, WhyChooseUs, About
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
            {/*<ContactUs title={'Estimate your project now!'}*/}
            {/*           subtitle={'Get free consultation and build your blockchain project with our highly qualified team!'} />*/}
        </div>
    )
}

export default HomePage;
