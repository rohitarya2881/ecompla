import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd, count = 1) => {
    const existingItemIndex = cart.findIndex(item => (item.id === productToAdd.id && item.size===productToAdd.size));

    if (existingItemIndex !== -1) {
      // Product already exists in cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += count; // Increment by the specified count
      setCart(updatedCart);
    } else {
      // Product does not exist in cart, add it with initial count
      setCart([...cart, { ...productToAdd, count }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item.id !== productToRemove.id || item.size!==productToRemove.size));
  };

  const updateCartItem = (productToUpdate, newCount) => {
    const updatedCart = cart.map((item) =>
      item.id === productToUpdate.id ? { ...item, count: newCount } : item
    );
    setCart(updatedCart);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
