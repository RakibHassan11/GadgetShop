import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Banner from '../Banner/Banner';
import data from '../../data.json';

const Home = () => {
  const [category, setCategory] = useState('all');

  // Filter products based on the selected category
  const filteredProducts = category === 'all'
    ? data
    : data.filter((product) => product.category === category);

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

        {/* Render all product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.category}-${product.product_id}`} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
