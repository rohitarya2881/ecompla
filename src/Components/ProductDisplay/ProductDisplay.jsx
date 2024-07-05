import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, size }, count); // Pass count to addToCart
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {Array(5).fill(0).map((_, index) => (
            <img key={index} src={product.image} alt="" />
          ))}
        </div>
        <div className="product-display-img">
          <img src={product.image} alt="" className='productdisplay-main-img' />
        </div>
      </div>
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdispaly-right-star">
        {Array(product.rating).fill(0).map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
          <p>{product.rating}</p>
        </div>
        <div className="product-price">
          <div className="new-price">{product.new_price}</div>
          <div className="old-price">{product.old_price}</div>
        </div>
        <div className="select-size">
          <p>Select size <span>Size Chart</span><i className="fa-solid fa-arrow-right"></i></p>
          <ul>
            {product.size.map((s) => (
              <li
                key={s}
                className={`available ${size === s ? 'selected' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-count">
          <div className="decrease" onClick={handleDecrease}>-</div>
          <div className="totalcount">{count}</div>
          <div className="increase" onClick={handleIncrease}>+</div>
        </div>
        <div className="buy-cart-button">
          <div className="buy">Buy Now</div>
          <div className="add-cart" onClick={size !== '' ? handleAddToCart : () => alert("Please enter size")}>
  Add to Cart
</div>
        </div>
      </div> 
    </div>
  );
};

export default ProductDisplay;
