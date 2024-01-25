// Cart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, handlePayment }) => {
  const [cartItems, setCartItems] = useState(cart);
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const calculateTotal = () => {
    return cartItems?.length ? cartItems.reduce((total, item) => total + item.price, 0) : 0;
  };

  // removed from cart code 
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleProceedToPay = () => {
    setPaymentSuccessful(true);

    setCartItems([]);

    window.alert('Payment successful!');
  };

  return (
    <div className="cart-container">
      <h1>Cart Page</h1>
      {isPaymentSuccessful && (
        <p className="success-message">Payment successful! Cart has been cleared.</p>
      )}
      {!isPaymentSuccessful && cartItems?.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.imageUrl}
                  alt={`Dog ${index + 1}`}
                  style={{ maxWidth: '100px', marginRight: '10px', maxHeight: '150px' }}
                />
                {item.price}$
                <button onClick={() => removeFromCart(index)} className='removedbutton'>Remove from Cart</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={handleProceedToPay} className='paybutton'>Proceed to Pay</button>
        </>
      ) : (
        <p>No items in the cart.</p>
      )}

      <Link to="/">
        <button className="removedbutton">Back to Home</button>
      </Link>
    </div>
  );
};

export default Cart;
