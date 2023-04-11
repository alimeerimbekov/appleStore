import React from 'react';
import './popupBuy.css'

const PopupBuy = ({popupBuy}) => {

const {buy, name, price, imageUrl} = popupBuy

    return (
        <div className='overlay-buy' style={{display: buy ? 'flex' : 'none'}}>
            <div className='popup-buy'>
                <h2 className='popup-buy__title'>Спасибо за покупку!</h2>
                <img src={imageUrl} alt={name} className="popup-buy__img"/>
                <h3 className="popup-buy__name">{name}</h3>
                <p className="popup-buy__price">Цена за товар : {name === 'Apple Card' ? '' : '$'}{price}</p>
            </div>
        </div>
    );
};

export default PopupBuy;