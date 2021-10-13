import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const WhyChooseUs: FunctionalComponent = () => {

    return (
        <div className={style['why-us']}>
            <div className={style['why-us__block']}>
                <h2>Why Choose Rock'n'Block For Your <span>Crowdsale Development?</span></h2>
                <h3>Rock'n'Block is the perfect place for your Crowdsale Development, our team of developers is expertise in
                    blockchain technology that enables us to provide optimized and stable Crowdsale Development solutions as
                    per your requirements. We also have an expert who can work dedicatedly to provide you with consultation
                    services on each step of your Crowdsale process.</h3>
            </div>
            <div className={style['why-us__img']}>
                <picture>
                    <source type="image/webp" srcSet='../../assets/img/why-choose-bg.webp' />
                    <img className={style['why-us__img_1']} src='../../assets/img/why-choose-bg.png' alt='why us bg' />
                </picture>
                <img className={style['why-us__img_2']} src='../../assets/img/why-choose-img.png' alt='why us bg' />
            </div>
        </div>
    )
}

export default WhyChooseUs;