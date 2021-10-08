import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";
import {whatWeDoBestCards} from "./mock";

const WhatWeDoBest: FunctionalComponent = () => {
  return (
    <div className={`${style['what-we-do-best']} ${style.container}`}>
      <BlockHeader
        style={style}
        primary="What we do Best"
        secondary="We are ready to take on a blockchain project of any complexity, from the stage of idea development to final implementation. Here are the most popular requests we receive regularly:"
      />
      <div className={style.scroll}>
        <div className={style['what-we-do-best__cards']}>
          {whatWeDoBestCards.map((card) => (
            <div className={style['what-we-do-best__card']} key={card.source}>
              <img className={style.icon} src={`../../assets/img/${card.source}.png`} alt={card.alt} />
              <p className={style['what-we-do-best__description']}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default WhatWeDoBest;