import React from 'react';
import "./Checkout.css";

function Checkout() {
    return (
        <div className="ckeckout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout__list">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>

            <div className="ckeckout__title">
                <h2>the subtotal goes here</h2>
            </div>
        </div>
    )
}

export default Checkout

