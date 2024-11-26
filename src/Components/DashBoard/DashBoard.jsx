import React, { useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';  
import { useWishlistContext } from '../WishlistContext/WishlistContext'; 
import { FaTrash } from 'react-icons/fa';  
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom'; 

const DashBoard = () => {
  const { cartItems, setCartItems, totalPrice, sortCartByPrice, removeFromCart, handlePurchase, isModalOpen, closeModal } = useCartContext();
  const { wishlistItems, removeFromWishlist } = useWishlistContext();  // Get wishlistItems from WishlistContext
  const [activeTab, setActiveTab] = useState('cart');  // State to switch between tabs
  const navigate = useNavigate(); // Initialize navigate function

  // Checkout function
  const handleCheckout = () => {
    handlePurchase(); // This will trigger cart reset and show modal
    toast.success('Purchase complete!'); // Show a success message when the checkout is completed
  };

  // Close Modal and navigate to home page
  const handleCloseModal = () => {
    closeModal(); // Close the modal
    navigate('/'); // Navigate to the home page (you can change this to any other route)
  };

  return (
    <div className="p-6 mx-auto">
      <div className='bg-purple-600 p-10 rounded-2xl mb-8 text-white'>
        <h1 className="text-5xl font-bold text-center mb-6">Dashboard</h1>
        <p className="mb-8 text-sm text-gray-300 whitespace-nowrap text-center">Find the perfect gadget to elevate your tech experience. From cutting-edge devices <br /> to must-have accessories, we've got you covered.</p>

        {/* Tabs for Cart and Wishlist */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-9 py-2 font-semibold rounded-3xl ${activeTab === 'cart' ? 'bg-white text-pink-500 border' : 'bg-purple-600 text-white border'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-3xl ${activeTab === 'wishlist' ? 'bg-white text-pink-500 border' : 'bg-purple-600 text-white border'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Tabs */}
      {activeTab === 'cart' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Cart Items</h2>
            <div className='space-x-5'>
              <button
                onClick={sortCartByPrice}
                className="hover:bg-purple-700 px-4 hover py-2 font-semibold rounded-3xl bg-purple-500 text-white"
                disabled={cartItems.length === 0}
              >
                Sort by Price
              </button>
              {/* Checkout Button */}
              {cartItems.length > 0 && (
                <button
                  onClick={handleCheckout}
                  className="hover:bg-purple-700 px-6 py-2 font-semibold rounded-3xl bg-purple-500 text-white"
                >
                  Purchase
                </button>
              )}
            </div>
          </div>

          {/* Render cart items */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.product_id} className="flex justify-between items-center p-2 border mb-4">
                  <div className='flex'>
                    <img src={item.product_image} alt={item.product_title} className="rounded-lg w-40 h-30 object-cover mr-4" />
                    <div className='mt-4'>
                    <h1 className='font-bold text-lg'>{item.product_title}</h1>
                    <p><span className='font-bold'>Description:</span>{item.description}</p>
                    <p><span className='font-bold'>Price:</span>${item.price}</p>
                    </div>
                  </div>
                  <div>
                    
                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className="text-red-500 ml-4 p-7 text-2xl"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total Price */}
          {cartItems.length > 0 && (
            <div className="mt-6 text-right text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </div>
          )}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Wishlist Items</h2>
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <div>
              {wishlistItems.map((item) => (
                <div key={item.product_id} className="flex justify-between items-center p-2 border mb-4">
                  <div className='flex'>
                    <img src={item.product_image} alt={item.product_title} className="rounded-lg w-40 h-30 object-cover mr-4" />
                    <div className='mt-4'>
                    <h1 className='font-bold text-lg'>{item.product_title}</h1>
                    <p><span className='font-bold '>Description:</span>{item.description}</p>
                    <p><span className='font-bold'>Price:</span>${item.price}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromWishlist(item.product_id)}
                      className="text-red-500 ml-4 text-2xl p-7"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal for congratulatory message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md max-w-xs text-center">
            <h3 className="text-2xl font-bold mb-4">Purchase Complete!</h3>
            <p>Your purchase has been successfully processed.</p>
            <button
              onClick={handleCloseModal}  // Close modal and navigate to home
              className="mt-4 px-6 py-2 bg-purple-500 rounded-3xl text-white "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
