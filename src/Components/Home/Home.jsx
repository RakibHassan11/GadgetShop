import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Banner from '../Banner/Banner';
import data from '../../data.json';

const Home = () => {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null); // Ref for the IntersectionObserver

  useEffect(() => {
    // Filter and set initial products based on the selected category
    const filteredProducts = category === 'all' 
      ? data 
      : data.filter((product) => product.category === category);
    
    setProducts(filteredProducts.slice(0, 6)); // Initial load of 6 products
    setHasMore(filteredProducts.length > 6); // Check if more products are available
  }, [category]);

  const loadMoreProducts = () => {
    // Simulate fetching the next set of products
    const filteredProducts = category === 'all'
      ? data
      : data.filter((product) => product.category === category);
      
    const nextProducts = filteredProducts.slice(products.length, products.length + 6);
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, ...nextProducts];
      // Check if there are more products to load
      setHasMore(updatedProducts.length < filteredProducts.length);
      return updatedProducts;
    });
  };

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts(); // Load more products when the last element is visible
      }
    }, { threshold: 1.0 });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, products.length]);

  return (
    <>
      <Banner />
      <section className="my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Explore Cutting-Edge Gadgets</h2>
        
        <div className="flex space-x-4 mb-6">
          {['all', 'laptops', 'phones', 'smart watches'].map((cat) => (
            <button
              key={cat}
              className={`btn ${category === cat ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Render product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={`${product.category}-${product.product_id}`} product={product} />
          ))}
        </div>

        {/* Reference element for the IntersectionObserver */}
        {hasMore && (
          <div ref={observerRef} className="h-4 mt-4"></div>
        )}
      </section>
    </>
  );
};

export default Home;
