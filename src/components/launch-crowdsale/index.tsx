import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const LaunchCrowdsale: FunctionalComponent = () => {

    return (
        <div className={style.launch}>
            <h2>So if you want to launch your own Crowdsale? Get complete Initial Coin Offerings (Crowdsale) development
                services and solutions to launch your own Crowdsale business platform successfully!</h2>
            <picture>
                <source type="image/webp" srcSet='../../assets/img/launch-crowdsale.webp' />
                <img src='../../assets/img/launch-crowdsale.png' alt='launch crowdsale img' />
            </picture>
        </div>
    )
}

export default LaunchCrowdsale;