import React from 'react';
import './MarketBox.css';
import MarketBoxItem from './MarketBoxItem'


const MarketBox = ({ onIncrement, onDecrement, menuList }) => {
    let menuListJSX = '';
    let Arrays = [];
    let menuListJson = menuList.toJS();
    for (let obj in menuListJson) {
        Arrays.push(
            <MarketBoxItem
                    idx = {obj}
                    count = {menuListJson[obj]['count']}
                />
            );
    }
    menuListJSX = Arrays;
    console.log(menuListJSX);
    if (menuList.size === 0) {
        menuListJSX = 'Nothing';
    } else {
        // menuListJSX = menuList.map(
        //     (menu, i) => (
        //         'b'
        //     )
        // )

    }


    //console.log(menuListJSX._root);
    /*
<MarketBoxItem
                    idx = {i}
                    count = {menu.toJS().count}
                />
                */
    return (
        <div>
            {menuListJSX}
        </div>
    )
}



export default MarketBox;