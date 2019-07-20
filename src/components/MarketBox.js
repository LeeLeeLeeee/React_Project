import React, { Fragment } from 'react';
import './MarketBox.css';
import MarketBoxItem from './MarketBoxItem'


const MarketBox = ({ menuList, StoreList, onIncrement, onDecrement, onDelete, onOrder }) => {
    let menuListJSX = '';
    let Arrays = [];
    let menuListJson = menuList.toJS();



    if (menuList.size === 0) {
        menuListJSX = '';
    } else {

        for (let obj in menuListJson) {
            Arrays.push(
                <MarketBoxItem
                    idx={obj}
                    count={menuListJson[obj]['count']}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
            );

        }
        menuListJSX = Arrays;

    }
    if (menuListJSX === '') {
        return (
            <Fragment>
                
            <div>
                {menuListJSX}
            </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                
                <input type='Button' style={{ width: '200px', marginTop: '20px', diplay: 'inline-block', marginBottom: '20px' }} value='주문하기' onClick={() => { onOrder(); }} />
                <div>
                    {menuListJSX}
                </div>
            </Fragment>
        )
    }

}



export default MarketBox;