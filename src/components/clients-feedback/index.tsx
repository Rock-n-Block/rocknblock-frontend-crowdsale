import {FunctionalComponent, h} from 'preact';
import style from './style.scss'
import {useMemo, useState} from "preact/hooks";
import {feedbackCard} from "./mock";
import {FeedbackCard} from "../../types";

const ClientsFeedback: FunctionalComponent = () => {
    const [activePage, setActivePage] = useState<number>(0);

    const switchRight = (): void => {
        activePage >= 0 && activePage < feedbackCard.length - 1 ? setActivePage(activePage + 1) : setActivePage(0)
    }

    const switchLeft = (): void => {
        activePage === 0 ? setActivePage(feedbackCard.length - 1) : ''
        activePage > 0 ? setActivePage(activePage - 1) : ''
    }

    const feedbackList = useMemo(
        () => feedbackCard.flat()
    , [])

    return (
        <div className={`${style.container} ${style['clients-feedback']}`}>
            <h2 className={style['clients-feedback__title']}>What our clients tell about us</h2>
            <div className={`${style['clients-feedback__cards']} ${style.desktop}`}>
                <button className={style['switchIcon_left']} onClick={(): void => switchLeft()}>
                    <img src={'../../assets/img/icons/icon-arrow-black-left.svg'} alt="switch left icon" />
                </button>
                {feedbackCard[activePage].map((item: FeedbackCard, index: number) =>
                    <div key={`${index}_feedback_card`} className={style['clients-feedback__cards_item']}>
                        <div>
                            <div className={style['clients-feedback__cards_item_images']}>
                                <img src={item.imgClient} alt={item.altClient} />
                                <img src={item.imgLogo} alt={item.altLogo} />
                            </div>
                            <div className={style['clients-feedback__cards_item_desc']}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    </div>
                )}
                <button className={style['switchIcon_right']} onClick={(): void => switchRight()}>
                    <img src={'../../assets/img/icons/icon-arrow-black-right.svg'} alt="switch right icon" />
                </button>
            </div>

            <div className={`${style['clients-feedback__cards']} ${style.mobile}`}>
                {feedbackList.map((item: FeedbackCard, index: number) =>
                    <div key={`${index}_feedback_card`} className={style['clients-feedback__cards_item']}>
                        <div>
                            <div className={style['clients-feedback__cards_item_images']}>
                                <img src={item.imgClient} alt={item.altClient} />
                                <img src={item.imgLogo} alt={item.altLogo} />
                            </div>
                            <div className={style['clients-feedback__cards_item_desc']}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientsFeedback;