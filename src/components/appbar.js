import React from "react";
import "./appbar.css";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";





export default function AppBar({cartOpenActcion, cartItems}){

    const [selectedNav, setSelectedNav] = React.useState("Collections");
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const navItems = [
        "Collections",
        "Men",
        "Women",
        "About",
        "Contact"
    ];

    React.useEffect(() => {
        if(window.innerWidth > 768){
            setMobileNavOpen(false);
        }
    }, [window.innerWidth]);


    return (
        <div className="appbar-wrapper">
             <div className="navigation-burger" onClick={
                    () => {
                        setMobileNavOpen(!mobileNavOpen);
                    }  
             }>
                <CiMenuBurger size={20} />
            </div>

            { mobileNavOpen &&

                <div className="mobile-navigation">
                <div className="mobile-nav-closer" onClick={
                    
                    () => {
                        setMobileNavOpen(false);
                    }
                }>
                    X
                </div>
                <div className="mobile-nav-items">
                    {navItems.map((item) => (
                        <div className="mobile-nav-item">
                            {item}
                        </div>
                    ))}
                    </div>
            </div>
                }
            <div className="navigation-items-left">
            <div className="logo-wrapper">
            </div>
            
            <div className="nav-items">
            {navItems.map((item) => (
                <div
                className={`nav-item ${selectedNav===item && "selected-nav"}`} id={item} onClick={
                    () => {
                        setSelectedNav(item);
                    }
                } >
                {item}
                </div>
            ))}
            </div>
            </div>


            <div className="cart-profile-wrapper">
                <div className="cart-icon-wrapper" onClick={
                    () => {
                        cartOpenActcion();
                    }
                
                }>
                    <div className="cart-count">
                        {cartItems.length}
                    </div>
                    <IoCartOutline size={20} />
                </div>
                <div className="profile-icon-wrapper">
                </div>
            </div>
        </div>
    );
};