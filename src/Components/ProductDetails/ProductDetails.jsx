import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import { FaHeart } from 'react-icons/fa';
import { useWishlistContext } from '../WishlistContext/WishlistContext';  // Import the WishlistContext
import { useCartContext } from '../CartContext/CartContext';  // Import the CartContext

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((item) => item.product_id === parseInt(productId));

  const { addToWishlist } = useWishlistContext();  // Get the addToWishlist function from context
  const { addToCart } = useCartContext();  // Get the addToCart function from context

  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart(product);  // Add product to cart when clicked
  };

  return (
    <div className="p-8">
      <img src={product.product_image} alt={product.product_title} className="w-full max-w-md mx-auto" />
      <h1 className="text-3xl font-bold mt-4">{product.product_title}</h1>
      <p className="text-xl mt-2">Price: ${product.price}</p>
      <p className="mt-2">{product.description}</p>

      <button onClick={handleAddToCart} className="btn btn-primary mt-4">
        Add to Cart
      </button>
      <button 
        onClick={() => addToWishlist(product)} 
        className="btn btn-outline btn-circle ml-4"
      >
        <FaHeart className="text-red-500" />
      </button>
    </div>
  );
};

export default ProductDetails;
