import { FunctionalComponent, h } from 'preact';
import BlockHeader from '../block-header';

import style from './style.scss';
import {whyUsCards} from "./mock";

const WhyUs: FunctionalComponent = () => {
  return (
    <div className={`${style['why-us']} ${style.container}`}>
      <BlockHeader style={style} primary="Why Us?" />
      <div className={style['why-us__content']}>
        {whyUsCards.map(card => (
          <div className={style['why-us__card']} key={card.number}>
            <p className={style['why-us__card__primary']}>
              <span className={style['why-us__card-numbers']}>{card.number}</span>
              <span className={style['why-us__card-units']}>{card.units}</span>
            </p>
            <p className={style['why-us__card__secondary']}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs;