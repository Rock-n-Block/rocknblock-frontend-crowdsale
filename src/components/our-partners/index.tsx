import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";
import {achievements, partners} from "./mock";

const OurPartners: FunctionalComponent = () => {
  return (
    <div className={`${style['our-partners']} ${style.container}`} id="partners">
      <BlockHeader style={style} primary="Our partners" />
      <ul className={style['our-partners__partners']}>
        {partners.map(partner => (
          <li className={style['our-partners__partner']} key={partner}>
            <div className={style['img-container']}>
              <img src={`../../assets/img/logo-partners-${partner}.png`} alt={`${partner}`} />
            </div>
          </li>
        ))}
      </ul>
      <div className={style.achievements}>
        {achievements.map((achieve, index) => (
          <a className={style.achieve} key={index} href={achieve.url} rel="noreferrer" target="_blank">
            <img src={achieve.src} alt={`achieve ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default OurPartners;