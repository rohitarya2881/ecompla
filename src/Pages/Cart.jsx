import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CSS/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    // Implement buy now logic
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleIncrease = (item) => {
    updateCartItem(item, item.count + 1);
  };

  const handleDecrease = (item) => {
    if (item.count > 1) {
      updateCartItem(item, item.count - 1);
    }
  };

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-item-collection">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-img">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => handleProductClick(item)}
                style={{ cursor: 'pointer' }}
              />
              </div>
              
              <div className="product-detail">
              <h3 onClick={() => handleProductClick(item)} style={{ cursor: 'pointer' }}>
                  {item.name}
                </h3>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.count}</p>
                <p>Price: {item.new_price}</p>
              </div>
               
                <div className="cart-item-buttons">
                  <div className="buy-remove">
                  <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                  <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
                  </div>
                  
                  <div className="quantity">
                  <button className="quantity-button" onClick={() => handleIncrease(item)}>+</button>
                  <button className="quantity-button" onClick={() => handleDecrease(item)}>-</button>
                  </div>
                  
                </div>
              </div>
            
          ))}
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Cart;
