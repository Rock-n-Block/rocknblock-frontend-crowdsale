import {Fragment, FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from '../block-header';
import CaseStudiesContent from '../case-studies__content';
import {useState} from 'preact/hooks';
import {content, dropdown, tabs} from "./mock";
import {CaseStudiesContentI} from "../../types";

const CaseStudies: FunctionalComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<number>(1);
  const [activeImg, setActiveImg] = useState<number>(1);

  const activeDropdown = dropdown[activeTab][activeBtn - 1];

  const handleClick = (index: number): void => {
    setActiveTab(index);
    setActiveBtn(1);
  };

  const setBtn = (index: number): void => {
    setActiveBtn(index);
    setActiveImg(1);
  }

  const switchLeft = (): void => {
    activeImg === 1 ? setActiveImg(activeDropdown.images.length) : setActiveImg(activeImg - 1);
  }

  const switchRight = (): void => {
    activeImg === activeDropdown.images.length ? setActiveImg(1) : setActiveImg(activeImg + 1);
  }

  const dropdownImg = (): JSX.Element => {
    return (
        <Fragment>
          {
            activeTab === 0 ? (
                <div>
                  <div className={style.noscroll}>
                    {activeDropdown.images.map((img: string, i: number) => (
                        <img
                            key={i}
                            className={style.scroll__dev}
                            src={img}
                            alt={`case ${activeDropdown.name} 1`}
                        />
                    ))}
                  </div>
                </div>
            ) : (
                <div>
                  <div className={style.switch}>
                    <button className={style.switchIcon} onClick={(): void => switchLeft()}>
                      <img src={'../../assets/img/icons/icon-switch-left.svg'} alt="switch left icon" />
                    </button>
                    <img
                        className={style.switchImage}
                        src={`../../assets/img/case-${activeDropdown.name}-${activeImg}.png`}
                        alt={`${activeDropdown.name} ${activeImg}`}
                    />
                    <button className={style.switchIcon} onClick={(): void => switchRight()}>
                      <img src={'../../assets/img/icons/icon-switch-right.svg'} alt="switch right icon" />
                    </button>
                  </div>
                </div>
            )
          }
        </Fragment>

    )
  }

  return (
      <div className={`${style['case-studies']} ${style.container}`} id="cases">
        <BlockHeader style={style} primary="Case Studies" />
        <div className={style['case-studies__tabs']}>
          <div className={`${style['tabs__tablinks']} ${style.tablinks}`}>
            {tabs.map((tab: string, index: number) => (
                <button
                    key={index}
                    className={`${style['case-studies__tablinks__link']} ${style['tablinks__link']} ${index === activeTab ? style['link-active'] : null}`}
                    onClick={(): void => handleClick(index)}
                >{tab}</button>
            ))}
          </div>
          <div className={style.scroll}>
            <div id="case-studies__firs-tab" className={style['case-studies__content']}>
              {content[activeTab].map((item: CaseStudiesContentI, index: number) => (
                  <CaseStudiesContent
                      key={`${index}_${item.name}`}
                      style={style}
                      source={item.source}
                      alt={item.alt}
                      name={item.name}
                      number={item.number}
                      activeBtn={activeBtn}
                      setBtn={setBtn}
                  />
              ))}
            </div>
          </div>
        </div>
        <div
            className={`${style['case-studies__dropdown']} ${style.dropdown}`}
            key={activeDropdown.key}
        >
          <h3 className={style['dropdown__title']}>{activeDropdown.title}</h3>
          <div className={style['dropdown__img']}>
            {dropdownImg()}
          </div>
          <div className={activeDropdown.description ? style['case-studies__description'] : undefined}>
            {activeDropdown.description}
          </div>
          <div className={style['dropdown__insights']}>
            <div className={`${style['dropdown__insights-insight']} ${style['insight-features']}`}>
              <h5 className={style['insight__title']}>Features:</h5>
              <ul className={style['gray-list']}>
                {activeDropdown.features.map((feature: string) => (
                    <li className={`${style['features__item']} ${style['gray-list__item']}`} key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className={`${style['dropdown__insights-insight']} ${style['insight-stacks']}`}>
              <h5 className={style['insight__title']}>Stacks:</h5>
              <ul className={style['gray-list']}>
                {activeDropdown.stacks.map((stack: string) => (
                    <li className={`${style['features__item']} ${style['gray-list__item']}`} key={stack}>{stack}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CaseStudies;