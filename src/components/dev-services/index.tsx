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
        </div>
    )
}

export default DevServices;