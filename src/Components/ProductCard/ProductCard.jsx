import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/product/${product.product_id}`);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl p-4">
      <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-cover" />
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating} ⭐</p>
        <button onClick={handleDetails} className="btn btn-primary mt-4">Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
