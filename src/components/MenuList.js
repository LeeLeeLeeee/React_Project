import React from 'react';
import Menu from './Menu'
import './MenuList.css';

let number = [1,2,3,4,5,6,7,8,9];
let urlx;
const MenuList = ({onCreate}) => {
    const menuList = number.map(
        (val) => {
            urlx ='./'+val+'.jpg';
            return (
                <Menu 
                    url={urlx}
                    onCreate={onCreate}
                    idx={val}
                />
            )
        }
    )
    return (
        <div >
            {menuList}
        </div>
    )
}

export default MenuList;