import React from 'react';
import { FaTrash } from 'react-icons/fa'; // For delete icon

const CartProductCard = ({ product, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      {/* Product Image */}
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-20 h-20 object-cover mr-4 rounded"
      />
      
      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{product.product_title}</h3>
        <p className="text-gray-600">Price: ${product.price}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(product.product_id)}
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default CartProductCard;
