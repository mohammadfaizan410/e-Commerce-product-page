import React from "react";
import './images-modal.css';
import { IoCartOutline } from "react-icons/io5";



export default function ImagesModal({productImages, closeModal}){
    const [selectedImage, setSelectedImage] = React.useState(0);
    return (
        <div className="images-modal-wrapper">
            <div className="gallery-wrapper-modal">
            <div className="close-modal-button" onClick={closeModal}> X </div>
                
                <div className="main-image-with-buttons">
                    <div className="icon-prev-wrapper" onClick={
                        () => {
                            if(selectedImage === 0){
                                setSelectedImage(productImages.length - 1);
                            }else{
                                setSelectedImage(selectedImage - 1);
                            }
                        }
                        
                    }>
                    <div className="icon-prev"></div>
                    </div>
                    <button><div className="main-image-modal">
                        <img src={productImages[selectedImage]} />
                    </div></button>
                    <div className="icon-next-wrapper" onClick={
                        () => {
                            if(selectedImage === productImages.length - 1){
                                setSelectedImage(0);
                            }else{
                                setSelectedImage(selectedImage + 1);
                            }
                        }
                    }>
                    <div className="icon-next" ></div>
                    </div>
                    </div>
                <div className="bottom-images-div-modal">
                    {
                        productImages.map((image, index) => {
                                return (
                                    <button onClick={() => {
                                        setSelectedImage(index);
                                    }}><div className={`bottom-image-modal ${index === selectedImage && "active-bottom-image-modal"}`}>
                                        <img src={image} />
                                    </div></button>
                                )
                        })
                    }
                </div>
            </div>
            <div className="item-details-wrapper"></div>
        </div>
    );
}