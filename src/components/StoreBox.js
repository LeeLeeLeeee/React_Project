import React from 'react';
import './MarketBox.css';
import StoreBoxItem from './StoreBoxItem'

const StoreBox = ({ StoreList }) => {
    let StoreListJSX = '';
    if (StoreList.size > 0) {
        StoreListJSX = StoreList.map(
            (Store, i) => (
                <StoreBoxItem
                    orderNum={i}
                    Store={Store.toJS()}
                />
            )
        )
    }
    if (StoreListJSX === '') {
        return (
            <div>
                Nothing
            </div>
        )
    } else {
        return (
            <div>
                {StoreListJSX}
            </div>
        )
    }

}

export default StoreBox;