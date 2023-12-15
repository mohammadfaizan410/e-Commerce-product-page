import './App.css';
import AppBar from './components/appbar';
import ProductPage from './components/product-page';
import React from 'react';
import CartModal from './components/cartModal';

function App() {

  const products = [
    {
      name: "Nike Worthy",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl n",
      price: 150,
      currency: "USD",
      images: [
        "https://worthly.com/wp-content/uploads/2014/11/139517568.jpg",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-10.53.33-PM.png",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-11.10.10-PM.png",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-11.19.21-PM.png"
      ],
      discount: 0.2,
    },
    {
      name: "Nike Air Max 270 React",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl n",
      price: 200,
      currency: "USD",
      images: [
        "https://worthly.com/wp-content/uploads/2014/11/139517568.jpg",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-10.53.33-PM.png",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-11.10.10-PM.png",
        "https://worthly.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-18-at-11.19.21-PM.png"
      ],
      discount: 0.5,
    },
  ];


  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  function addToCart(newCartItems){
    setCartItems(newCartItems);
    console.log(cartItems)
  }
  function toggleCart(){
    setCartOpen(!cartOpen);
  }

  function deleteAction(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }


  return (
    <div className="App">
     
      <div className='main-content-wrapper'>
      {
        cartOpen &&
      <CartModal cartItems={cartItems} deleteAction={
        deleteAction
      } />
      }
        <AppBar cartItems={cartItems} cartOpenActcion={toggleCart}/>
        <ProductPage product={products[0]} cartItems={cartItems} setCartItems={
          addToCart
        } />
      </div>

    </div>
  );
}

export default App;
