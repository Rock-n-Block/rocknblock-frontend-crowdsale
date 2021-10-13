import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import {devCards} from "./mock";

const DevServices: FunctionalComponent = () => {

    return (
        <div className={style.dev}>
            <h2 className={style['dev__title']}>Rock'n'Block <span>Development</span> Services</h2>
            <h3 className={style['dev__desc']}>We have a wide range of Crowdsale Development Services.
                It includes, </h3>
            <div className={style['dev__cards']}>
                {devCards.map((item, index: number) =>
                    <div key={`${item.title}__${index}`} className={style['dev__cards_item']}>
                        <div>
                            <img src={item.img} alt={item.alt} />
                        </div>
                        <h2>{item.title}</h2>
                    </div>
                )}
            </div>

            <div className={style['dev__mobile']}>
                <h2>Why Choose Rock'n'Block For Your <span>Crowdsale Development?</span></h2>
                <h3>Rock'n'Block is the perfect place for your Crowdsale Development, our team of developers is expertise in
                    blockchain technology that enables us to provide optimized and stable Crowdsale Development solutions as
                    per your requirements. We also have an expert who can work dedicatedly to provide you with consultation
                    services on each step of your Crowdsale process.</h3>
            </div>
        </div>
    )
}

export default DevServices;