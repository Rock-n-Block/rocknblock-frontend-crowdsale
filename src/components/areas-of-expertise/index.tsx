import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";
import {cards} from "./mock";
import {Cards} from "../../types";

const AreasOfExpertise: FunctionalComponent = () => {
  return (
    <div id="services" className={`${style['areas-of-expertise']} ${style.container}`}>
      <div className={style['background-img']}>
        <img src="../../assets/img/background-areas.png" alt="background-img" />
      </div>
      <BlockHeader style={style} primary="Areas of Expertise" />
      <div className={style['areas-of-expertise__cards']}>
        <div className={style['areas-of-expertise__cards__scroll']}>
          {cards.map((card: Cards) => (
            <div className={style['areas-of-expertise__card']} key={card.source}>
              <div className={style['icon-container']}>
                <img
                  className={style.icon}
                  src={`../../assets/img/icons/icon-area-${card.source}-mask.svg`}
                  alt={card.source}
                />
              </div>
              <h3 className={style['areas-of-expertise__card-name']}>{card.title}</h3>
              <p className={style['areas-of-expertise__card-description']}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AreasOfExpertise;