import React, {useState} from 'react';
import './main.css'
import Card from "./Card";
import AirPods from "../../assets/main/Airpods.png";
import Iphone from "../../assets/main/Iphone.png";
import AppleTv from "../../assets/main/Appletv.png";
import AppleCard from "../../assets/main/Applecard.png";
import Popup from "./Popup/Popup";
import PopupBuy from "./Popup/PopupBuy/PopupBuy";


const Main = ({product}) => {

    const [products, setProducts] = useState([
            {
        id: 1,
        title: 'AirPods',
        price: 199.00,
        image: AirPods
    }, {
        id: 2,
        title: 'Iphone Xr',
        price: 799.00,
        image: Iphone
    }, {
        id: 3,
        title: 'Apple Tv 4k',
        price: 179.00,
        image: AppleTv
    }, {
        id: 4,
        title: 'Apple Card',
        price: 'Free',
        image: AppleCard
    },{
        id: 5,
        title: 'AirPods',
        price: 199.00,
        image: AirPods
    }, {
        id: 6,
        title: 'Iphone Xr',
        price: 799.00,
        image: Iphone
    }, {
        id: 7,
        title: 'Apple Tv 4k',
        price: 179.00,
        image: AppleTv
    }, {
        id: 8,
        title: 'Apple Card',
        price: 'Free',
        image: AppleCard
    },])
    const [all, setAll] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupBuy, setPopupBuy] = useState({
        name: '',
        imageUrl: '',
        price: '',
        buy: false
    })

    return (
        <main>
            <div className="container">
                <section className='content'>
                    <div className='content__header'>
                        <h2 className='content__title'>Check also</h2>
                        <p className='content__all' onClick={() => setAll('all')}>See All >></p>
                    </div>
                    <div className='content__btns'>
                        <button type='button' className="content__btn" onClick={() => setPopupOpen(true)}>Add Card
                        </button>
                    </div>
                    <div className="content__row">
                        {
                            products.filter((item, idx) => {
                                if(all.length === 0){
                                    return idx < 4
                                } else {
                                    return item
                                }
                            }).map((product) => (
                                <Card setPopupBuy={setPopupBuy} key={product.id} setProducts={setProducts} products={products} product={product}/>
                            ))
                        }

                    </div>

                    {
                        all.length !== 0 ? <p style={{textAlign: 'center', marginTop: 20 + 'px',}} onClick={() => setAll('')}>Скрыть</p> : ''
                    }


                </section>
            </div>

            <Popup products={products} setProducts={setProducts} popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>

            <PopupBuy popupBuy={popupBuy}/>
        </main>
    );
};

export default Main;