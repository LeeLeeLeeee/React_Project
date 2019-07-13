import React from 'react';


const MarketBoxItem = ({ idx,count,onIncrement,onDecrement }) => {
    const url = './'+idx+'.jpg';
    return (
        <div>
            <img src={url} alt='메뉴' />
            {count}
        </div>

    )
}



export default MarketBoxItem;