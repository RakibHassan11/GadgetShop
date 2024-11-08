import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const {
    cartItems,
    totalPrice,
    removeFromCart,
    sortCartByPrice,
    handlePurchase,
    isModalOpen,
    closeModal,
  } = useCartContext();
  const navigate = useNavigate();

  const handleClose = () => {
    closeModal();
    navigate('/');  // Redirect to the home page
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <button
        onClick={sortCartByPrice}
        className="btn btn-primary mt-4"
        disabled={cartItems.length === 0}
      >
        Sort by Price (Descending)
      </button>
      <div className="flex flex-wrap mt-4">
        {cartItems.map((item) => (
          <div key={item.product_id} className="flex items-center p-4 border m-2">
            <img src={item.product_image} alt={item.product_title} className="w-32 h-32 object-cover" />
            <div className="ml-4">
              <h3 className="text-xl">{item.product_title}</h3>
              <p className="text-lg">Price: ${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.product_id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl">Total Price: ${totalPrice}</h2>
        <button
          onClick={handlePurchase}
          className="btn btn-success mt-4"
          disabled={cartItems.length === 0 || totalPrice === 0}
        >
          Purchase
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md text-center">
            <h3 className="text-2xl font-bold mb-4">Congratulations on your purchase!</h3>
            <button onClick={handleClose} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
