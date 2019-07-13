import React from 'react';
import './MarketBox.css';
import MarketBoxItem from './MarketBoxItem'


const MarketBox = ({ onIncrement, onDecrement, menuList,onDelete }) => {
    let menuListJSX = '';
    let Arrays = [];
    console.log(menuList)
    let menuListJson = menuList.toJS();

    if (menuList.size === 0) {
        menuListJSX = 'Nothing';
    } else {
        for (let obj in menuListJson) {
            Arrays.push(
                <MarketBoxItem
                        idx = {obj}
                        count = {menuListJson[obj]['count']}
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}
                        onDelete = {onDelete}
                    />
                );
        }
        menuListJSX = Arrays;

    }


    
    return (
        <div>
            {menuListJSX}
        </div>
    )
}



export default MarketBox;