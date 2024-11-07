// src/Components/Dashboard/Dashboard.jsx
import React, { useState } from 'react';
import CartItems from '../CartItems/CartItems';
import WishlistItems from '../WishlistItems/WishlistItems';
import { useCartContext } from '../CartContext/CartContext';
import { useWishlistContext } from '../WishlistContext/WishlistContext';
import { Link } from 'react-router-dom'; // Import Link to navigate to CartPage and WishlistPage
import { toast } from 'react-toastify'; // Import toast for notifications

const Dashboard = () => {
  const { cartItems, totalPrice, sortCartByPrice, removeFromCart, addToCart } = useCartContext();
  const { wishlistItems, removeFromWishlist, moveItemToCart } = useWishlistContext();
  const [activeTab, setActiveTab] = useState('cart');

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => {
      moveItemToCart(item);
    });
    toast.success('All items moved to cart!');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

      {/* Tabs for Cart and Wishlist */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'cart' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('cart')}
        >
          Cart
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wishlist
        </button>
      </div>

      {/* Conditional Rendering for Tabs */}
      {activeTab === 'cart' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Cart Items</h2>
            <button
              onClick={sortCartByPrice}
              className="px-3 py-1 bg-blue-500 text-white rounded"
              disabled={cartItems.length === 0}
            >
              Sort by Price
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <CartItems items={cartItems} removeFromCart={removeFromCart} />
          )}

          {/* Total Price */}
          {cartItems.length > 0 && (
            <div className="mt-6 text-right text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </div>
          )}

          {/* Checkout Button */}
          {cartItems.length > 0 && (
            <Link
              to="/cart"
              className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded"
            >
              Go to Checkout
            </Link>
          )}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Wishlist Items</h2>
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <WishlistItems items={wishlistItems} removeFromWishlist={removeFromWishlist} />
          )}

        </div>
      )}
    </div>
  );
};

export default Dashboard;
