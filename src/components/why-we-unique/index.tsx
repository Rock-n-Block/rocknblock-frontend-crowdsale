import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import {uniqueCards} from "./mock";

const WhyWeUnique: FunctionalComponent = () => {

    return (
        <div className={style['unique']}>
            <h2 className={style['unique__title']}>What Stands us apart From Other <span>Crowdsale Solution</span> Providers?</h2>
            <h3 className={style['unique__desc']}>With Rock'n'Block it is easy to launch a Crowdsale from your innovative ideas</h3>
            <div className={style['unique__cards']}>
                {uniqueCards.map((item, index: number) =>
                    <div key={`${item.title}__${index}`}>
                        <img src={item.img} alt={item.alt} />
                        <h2>{item.title}</h2>
                        <h3>{item.desc}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhyWeUnique;