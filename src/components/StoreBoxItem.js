import React from 'react';
import './Menu.css'



const StoreBoxItem = ({ Store, orderNum }) => {
    let Arrays=[];
    
    for (let obj in Store) {
        Arrays.push(
            <div> 주문[{orderNum+1}] : {obj} - {Store[obj]['count']}개 </div>
        );

    }
    const StoreJSX = Arrays;

    return (
       <div className="StoreList">
           {StoreJSX}
       </div>
    )
    
}

export default StoreBoxItem;