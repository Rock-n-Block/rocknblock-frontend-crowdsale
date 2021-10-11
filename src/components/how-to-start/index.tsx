import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const HowToStart: FunctionalComponent = () => {

    return (
        <div className={style.start}>
            <h2>How to Start your Crowdsale funding?</h2>
            <h3>CROWDSALE PACK DEVELOPMENT PROCESS
                Get involved in every phase of the token development cycle</h3>
            <img className={style['start__img']} src='../../assets/img/how-to-start-img.svg' alt='how to start img' />
            <img className={style['start__bg']} src='../../assets/img/red-background.svg' alt='how to start img' />

        </div>
    )
}

export default HowToStart;