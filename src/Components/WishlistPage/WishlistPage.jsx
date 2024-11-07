// src/Components/WishlistPage/WishlistPage.jsx
import React from 'react';
import { useWishlistContext } from '../WishlistContext/WishlistContext';
import { FaTrash } from 'react-icons/fa';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlistContext();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Your Wishlist</h1>
      <div className="flex flex-wrap mt-4">
        {wishlistItems.map((item) => (
          <div key={item.product_id} className="flex items-center p-4 border m-2">
            <img src={item.product_image} alt={item.product_title} className="w-32 h-32 object-cover" />
            <div className="ml-4">
              <h3 className="text-xl">{item.product_title}</h3>
              <p className="text-lg">Price: ${item.price}</p>
            </div>
            <button
              onClick={() => removeFromWishlist(item.product_id)}
              className="ml-4 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
