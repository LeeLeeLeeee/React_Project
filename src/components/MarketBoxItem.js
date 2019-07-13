import React from 'react';


let imgstyle = {
    height: '200px'
}
let spanstyle = {
    position: 'absolute',
    left : '0px'
}

const MarketBoxItem = ({ idx,count,onIncrement,onDecrement }) => {
    const url = './'+idx+'.jpg';
    return (
        <div>
            <img src={url} alt='메뉴' style={imgstyle}/>
            <span style={spanstyle}>{count}</span>
            
        </div>

    )
}



export default MarketBoxItem;