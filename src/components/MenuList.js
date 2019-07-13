import React from 'react';
import Menu from './Menu'


let number = ['a1','a2','a3','a4','a5','a6','a7','a8','a9'];
let urlx;
const MenuList = ({onCreate,onOrder}) => {
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
            <input type='Button' style={{width:'200px',marginTop:'20px'}} value='주문하기' onClick={()=> {onOrder()}} />
            {menuList}
        </div>
    )
}

export default MenuList;