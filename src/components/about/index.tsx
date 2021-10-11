import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const About: FunctionalComponent = () => {

    return (
        <div className={style.about}>
            <h1>Crowdsale  Development</h1>
            <h2>We Help You To Raise Funds For Your Venture By Legally Tokenizing Your Real World Assets Through crowdsale contract
                Crowdsale pack (token+crowdsale contract) - To Attract Accredited Investors Around The World.</h2>
            <a
                className={`${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}
            >
                Launch your own Crowdsale
                <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
            </a>

            <div className={style['about__bg']}>
                <img src='../../assets/img/about-bg.png' alt='about background' />
            </div>
        </div>
    )
}

export default About;