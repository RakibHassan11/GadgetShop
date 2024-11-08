import React from 'react';

const WishlistItems = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item) => (
      <div key={item.product_id} className="p-4 border rounded-lg shadow-md">
        <img src={item.product_image} alt={item.product_title} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="text-lg font-semibold">{item.product_title}</h3>
        <p className="text-gray-700">${item.price}</p>
        <p className="text-gray-500 mt-2">{item.category}</p>
      </div>
    ))}
  </div>
);

export default WishlistItems;
