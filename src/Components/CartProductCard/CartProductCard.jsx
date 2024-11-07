import React from 'react';
import { FaTrash } from 'react-icons/fa';  // Import the trash icon for delete button

const WishlistItems = ({ items, removeFromWishlist }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item) => (
      <div key={item.product_id} className="p-4 border rounded-lg shadow-md relative">
        <img src={item.product_image} alt={item.product_title} className="w-full h-48 object-cover mb-4 rounded" />
        
        {/* Delete Button */}
        <button
          onClick={() => removeFromWishlist(item.product_id)} 
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          <FaTrash size={20} />
        </button>

        <h3 className="text-lg font-semibold">{item.product_title}</h3>
        <p className="text-gray-700">${item.price}</p>
        <p className="text-gray-500 mt-2">{item.category}</p>
      </div>
    ))}
  </div>
);

export default WishlistItems;
