import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((product) => product._id !== productId);
      }
      return prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
