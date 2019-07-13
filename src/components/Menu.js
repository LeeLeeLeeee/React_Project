import React from 'react';
import './Menu.css';



const Menu = ({onCreate,url,idx}) => {
    return (
        <div className="Menus">
            <img src={url} alt='없당' onClick={()=>onCreate(idx)}></img>
        </div>
    )
}

export default Menu;