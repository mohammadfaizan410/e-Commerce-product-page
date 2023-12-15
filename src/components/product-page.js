import React from "react";
import './product-page.css';
import ImagesModal from "./images-modal";
import { IoCartOutline } from "react-icons/io5";


export default function ProductPage({product, cartItems, setCartItems}){
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [imageModalOpen, setImageModalOpen] = React.useState(false);
    const [itemCount, setItemCount] = React.useState(0);
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
          setInnerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  

    return (
        <div className="product-page-wrapper">  
          {imageModalOpen && innerWidth > 768 && (
        <ImagesModal productImages={product.images} closeModal={() => setImageModalOpen(false)} />
      )}
            <div className="gallery-wrapper">
                <button onClick={() => setImageModalOpen(true)}><div className="main-image">
                        <img src={product.images[selectedImage]} />
                    </div>
                    </button>
                    <div className="icon-next-prev-wrapper">
                    <div className="icon-prev-prod" 
                    onClick={() => {
                        if(selectedImage > 0){
                            setSelectedImage(selectedImage - 1);
                        }
                    }}
                    ></div>
                    <div className="icon-next-prod"
                    onClick={() => {
                        if(selectedImage < product.images.length - 1){
                            setSelectedImage(selectedImage + 1);
                        }
                    }}
                    ></div>
                    </div>
                <div className="bottom-images-div">
                    {
                        product.images.map((image, index) => {
                                return (
                                    <button onClick={() => {
                                        setSelectedImage(index);
                                    }}><div className={`bottom-image ${index === selectedImage && "active-bottom-image"}`}>
                                        <img src={image} />
                                    </div></button>
                                )
                        })
                    }
                </div>
            </div>
            <div className="item-details-wrapper">
                <div className="company-title-wrapper"> 
               <div><h3 className="item-company-name">Nike Air Max</h3></div>
               <h1 className="item-title">{product.name}</h1>
                </div>
                <div className="description-wrapper">
                    <p>{product.description}</p>
                </div>
                <div className="price-parent-wrapper-mobile">
                <div className="price-wrapper">
                    <h3 className="price">{product.currency} {product.price * product.discount}</h3>
                    <h3 className="discount">{product.discount * 100}%</h3>
                </div>
                <p className="original-price">{product.price}</p>
                </div>
                <div className="add-to-cart-wrapper">
                    <div className="cart-add-subs-wrapper">
                        <div className="reduce-item" onClick={
                            () => {
                                if(itemCount > 0){
                                    setItemCount(itemCount - 1);
                                }
                            }
                        }>-</div>
                        <div className="item-amount">{
                            itemCount
                        }</div>
                        <div className="increase-item" onClick={
                            () => {
                                setItemCount(itemCount + 1);
                            }
                        
                        }>+</div>
                    </div>
                    <button className="add-to-cart-button" onClick={
                            () => {
                                itemCount > 0 &&
                                setCartItems([...cartItems, {
                                    product: product,
                                    count: itemCount,
                                    index: cartItems.length
                                }]);
                            }
                        
                    }><IoCartOutline size={20} /> Add to cart</button>
                    </div>
            </div>
        </div>
    );
}