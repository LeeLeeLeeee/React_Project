import React, { Fragment } from 'react';
import './Menu.css'

const storebox = {
    width : '100%',
    height : '300px',
    display : 'inline-block',
    border : '1px solid black',
    boxSizing:'border-box',
    margin:'5px',
    padding : '10px',
    verticalAlign : 'top',
    position:'relative'
}


const StoreBoxItem = ({ Store, orderNum }) => {
    let Arrays=[];
    for (let obj in Store) {
        if(obj !== 'order_time') {
            Arrays.push(
                <b> 주문[{orderNum+1}] : {obj} - {Store[obj]['count']}개<br /> </b>
            );
        } else {
            Arrays.push(
                <div style={{bottom:'1px',position:'absolute'}}>
                    <small> 주문시간 : {Store[obj]}<br /> </small>
                </div>
            );
        }
    }
    
    const StoreJSX = Arrays;

    return (
        <div style={storebox}> 
            
            <h3>주문서 - {orderNum+1}</h3>
           {StoreJSX}
           
        </div>
        
       
    )
    
}

export default StoreBoxItem;