import {Fragment, FunctionalComponent, h} from 'preact';
import Discount from "../../components/discount";
import HowDiscountWorks from "../../components/how-discount-works";

const NftGiftPage: FunctionalComponent = () => {
    return (
        <Fragment>
            <Discount />
            <HowDiscountWorks />
        </Fragment>
    );
};

export default NftGiftPage;