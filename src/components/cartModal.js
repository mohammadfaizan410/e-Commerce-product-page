import React from "react";
import "./cartModal.css";
import { IoTrashBinOutline } from "react-icons/io5";


export default function CartModal({cartItems, deleteAction}){
    return (
        <div className="cart-wrapper">
              <div className="top-bar">
                    <h3 className="cart-title">
                        Cart
                    </h3>
                </div>  
                <div className="cart-items-wrapper">
                    {
                        cartItems.map((item) => (
                            <div className="cart-item-wrapper">
                                <div className="cart-item-image-wrapper">
                                    <img src={item.product.images[0]} />
                                </div>
                                <div className="cart-item-details-wrapper">
                                    <div className="cart-item-name">
                                        {item.product.name}
                                    </div>
                                    <div className="cart-item-prices">
                                        <div className="cart-item-price">
                                            {item.product.currency} {item.product.price} x {item.count} {item.product.currency} <strong className="final-price-item">{item.product.price * item.count}</strong>
                                        </div>
                                    </div>
                                </div>
                                    <div className="delete-item" onClick= {
                                        () => {
                                            deleteAction(item);
                                        }
                                    
                                    }>
                                        <IoTrashBinOutline size={20} />
                                    </div>
                            </div>
                        ))
                    }
        </div>
        </div>

    );
};