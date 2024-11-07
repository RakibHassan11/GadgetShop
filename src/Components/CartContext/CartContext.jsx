// src/Components/CartContext/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.product_id === product.product_id)) {
      setCartItems((prevItems) => [...prevItems, product]);
      setTotalPrice((prevTotal) => prevTotal + product.price);
    }
  };

  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.product_id === id);
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
      setTotalPrice((prevTotal) => prevTotal - itemToRemove.price);
    }
  };

  const sortCartByPrice = () => {
    setCartItems((prevItems) =>
      [...prevItems].sort((a, b) => b.price - a.price) // Sort in descending order
    );
  };

  const handlePurchase = () => {
    // Show the congratulatory modal and reset cart
    setIsModalOpen(true);
    setCartItems([]);
    setTotalPrice(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        sortCartByPrice,
        handlePurchase,
        isModalOpen,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
