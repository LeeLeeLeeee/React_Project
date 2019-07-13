import React from 'react';
import './MarketBox.css';
import MarketBoxItem from './MarketBoxItem'


const MarketBox = ({ onIncrement, onDecrement, menuList }) => {
    let menuListJSX 
    if (menuList.size === 0) {
        menuListJSX = 'Nothing';
    } else {
        menuListJSX = menuList.map(
            (menu, i) => (
                <MarketBoxItem
                    idx = {i}
                    count = {menu.toJS().count}
                />
            )
        )      
    }

    return (
        <div>
            {menuListJSX}
        </div>
    )
}



export default MarketBox;