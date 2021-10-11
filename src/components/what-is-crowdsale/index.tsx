import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const WhatIsCrowdSale: FunctionalComponent = () => {

    return (
        <div className={style.crowdsale}>
            <h2 className={style['crowdsale__title']}>What is <span>Crowdsale</span></h2>
            <h3 className={style['crowdsale__desc']}>Оne of the best ways for startups to raise initial capital for their crypto-based business opportunity.
                It has all the benefits of blockchain technology embedded into it. The funds are used to provide
                financial support for a cryptocurrency project through crowdfunding. </h3>

            <div className={style['crowdsale__img']}>
                <img src='../../assets/img/what-is-crowdsale-img.png' alt='crowdsale img' />
                <h3>Rock'n'Block helps to Increase fundraising opportunities for your project with crowdsale
                    development. We help in every single step of crowdsale pack, managing, whitepaper creation, and
                    managing & developing the backend. Rock'n'Block also develops new tokes using different Blockchain
                    communities with launch platforms and smart contracts.</h3>
            </div>

            <div className={style['crowdsale__cards']}>
                <div>
                    <img src='../../assets/img/icons/shield.svg' alt='shield icon' />
                    <h2>borderless</h2>
                </div>
                <div>
                    <img src='../../assets/img/icons/fist.svg' alt='fist icon' />
                    <h2>trustless</h2>
                </div>
                <div>
                    <img src='../../assets/img/icons/speedometer.svg' alt='speedometer icon' />
                    <h2>quick</h2>
                </div>
            </div>
        </div>
    )
}

export default WhatIsCrowdSale;