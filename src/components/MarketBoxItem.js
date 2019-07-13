import React from 'react';
import './Menu.css'


const boxFrame = {
    width: '50%',
    height: '400px',
    display: 'inline-block'
}
const boxImage = {
    height: '75%',
    width: '100%'
}
const boxBottom = {
    width: '49%',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 'bold'
}
const countBox = {
    width: '100%',
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold'

}




const MarketBoxItem = ({ idx, count, onIncrement, onDecrement,onDelete }) => {
    const url = './' + idx + '.jpg';
    return (
        <div style={boxFrame}>
            <div style={boxImage}>
                <img src={url} alt='메뉴' />
            </div>
            <input type='Button' style={boxBottom} value='+' onClick={() => onIncrement(idx)} />
            <input type='Button' style={boxBottom} value='-' onClick={() => onDecrement(idx)} />
            <input type='Button' style={{...boxBottom,width:'70%'}} value='삭제' onClick={() => onDelete(idx)} />
            <div style={countBox}>
                {count}
            </div>

        </div>

    )
}



export default MarketBoxItem;