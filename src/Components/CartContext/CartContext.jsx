import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.product_id === product.product_id)) {
      setCartItems((prevItems) => {
        const updatedCartItems = [...prevItems, product];
        const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(updatedTotalPrice);
        return updatedCartItems;
      });
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.product_id !== id);
      const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.price, 0);
      setTotalPrice(updatedTotalPrice);
      return updatedItems;
    });
  };

  const sortCartByPrice = () => {
    setCartItems((prevItems) => {
      const sortedItems = [...prevItems].sort((a, b) => b.price - a.price);
      const updatedTotalPrice = sortedItems.reduce((total, item) => total + item.price, 0);
      setTotalPrice(updatedTotalPrice);
      return sortedItems;
    });
  };

  const handlePurchase = () => {
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
