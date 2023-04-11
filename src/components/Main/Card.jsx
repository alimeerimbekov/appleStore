import React from 'react';

const Card = ({product, products, setProducts, setPopupBuy}) => {

    const {image, title, id, price} = product;
    const delCardHandler = id => setProducts(products.filter((item) => item.id !== id));
    const buyHardHandler = (title, image, price) => {
        setPopupBuy({
            name: title,
            imageUrl: image,
            price: price,
            buy: true,
        })

        setTimeout(() => {
            setPopupBuy({
                name: '',
                imageUrl: '',
                price: '',
                buy: false
            })
        }, 2000)
    };


    return (
        <div className="content__card">
            <img className='content__card-img' src={image} alt=""/>
            <h3 className="content__card-title">{title}</h3>
            <p className="content__card-price">{title === 'Apple Card' ? price : `$${price}.00`}</p>
            <div className="content__card-btns">
                <button type='button' className='content__card-btn'
                        onClick={() => buyHardHandler(title, image, price)}>{title === 'Apple Card' ? 'Apply' : 'Buy'}</button>
                <button type='button' className='content__card-btn' onClick={() => delCardHandler(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;