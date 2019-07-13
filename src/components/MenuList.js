import React from 'react';
import Menu from './Menu'
import './MenuList.css';

let number = ['a1','a2','a3','a4','a5','a6','a7','a8','a9'];
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