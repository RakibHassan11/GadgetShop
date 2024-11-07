import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useWishlistContext } from '../WishlistContext/WishlistContext'; // Import the WishlistContext
import { useCartContext } from '../CartContext/CartContext'; // Import the CartContext
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((item) => item.product_id === parseInt(productId));

  const { addToWishlist, wishlistItems } = useWishlistContext(); // Get the addToWishlist function and wishlistItems from context
  const { addToCart, cartItems } = useCartContext(); // Get the addToCart function and cartItems from context

  if (!product) return <p>Product not found!</p>;

  // Check if the product is already in the cart or wishlist
  const isProductInCart = cartItems.some(item => item.product_id === product.product_id);
  const isProductInWishlist = wishlistItems.some(item => item.product_id === product.product_id);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      addToCart(product); // Add product to cart when clicked
      toast.success(`${product.product_title} has been added to your cart!`); // Show success toast message
    }
  };

  const handleAddToWishlist = () => {
    if (!isProductInWishlist) {
      addToWishlist(product); // Add product to wishlist when clicked
      toast.success(`${product.product_title} has been added to your wishlist!`); // Show success toast message
    }
  };

  return (
    <>
      {/* Toast Container to display toast messages */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="p-8 flex flex-col bg-purple-500 rounded-xl h-[300px]">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Product Details</h1>
        <p className="mb-8 text-sm text-gray-300 whitespace-nowrap text-center">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>

      <div className="relative -mt-36 left-0 right-0 z-20 mx-auto w-10/12 md:w-8/12 border border-white bg-gray-100 rounded-lg p-6 bg-opacity-50">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-full max-w-md mx-auto rounded-xl"
        />
        <h1 className="text-3xl font-bold mt-4">{product.product_title}</h1>
        <p className="text-xl mt-2 text-gray-600">Price: ${product.price}</p>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold">Rating:</p>
        <p className="mt-2">{product.rating} ⭐</p>

        <p className="mt-2 font-bold">Specification:</p>
        {/* Render specification as a list */}
        {product.specification && Array.isArray(product.specification) ? (
          <ul className="mt-1 list-disc pl-5">
            {product.specification.map((spec, index) => (
              <li key={index} className="text-sm">{spec}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No specifications available.</p>
        )}

        <button
          onClick={handleAddToCart}
          className="btn bg-purple-600 text-white mt-4 rounded-3xl"
          disabled={isProductInCart} // Disable if the product is already in the cart
        >
          <FaCartPlus /> Add to Cart
        </button>

        <button
          onClick={handleAddToWishlist}
          className="btn btn-outline btn-circle ml-4"
          disabled={isProductInWishlist} // Disable if the product is already in the wishlist
        >
          <FaHeart className="text-red-500" />
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
