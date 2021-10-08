import { FunctionalComponent, h } from 'preact';
import style from './style.scss'
import {useEffect, useState} from "preact/hooks";

const Discount: FunctionalComponent = () => {
    const [walletAddress, setWalletAddress] = useState<string>('')

    const inputHandler = (e: any): void => {
        setWalletAddress(e.target.value)
    }

    const pasteClipboard = (): void => {
        navigator.clipboard.readText().then(r => setWalletAddress(r))
    };

    return (
        <div className={style.discount}>
            <h1>Get your <br /> <span>discount up to 10%</span></h1>
            <div className={style['discount__input']}>
                <input value={walletAddress} onInput={(event): void => inputHandler(event)} placeholder='Enter your wallet address' />
                {!walletAddress ? <button className={style['discount__input_desktop']} onClick={(): void => pasteClipboard()}>Paste</button> : null}
                {!walletAddress ? <img src='../../assets/img/nftgift/icon-copy.svg' className={style['discount__input_mobile']} onClick={(): void => pasteClipboard()} /> : null}
            </div>

            <a
                rel="noreferrer"
                target="_blank"
                className={`${style['about__buttons-contact']} ${style.btn} ${style['btn-orange-cl-solid']} ${style['btn.progress']} ${style['btn-rounded']}`}>
                Get discount
            </a>
        </div>
    )
};

export default Discount;