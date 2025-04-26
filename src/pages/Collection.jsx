import React, { useState } from "react";
import products from '../data/products';


const Collection = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-white via-indigo-50 to-white">
      <h2 className="text-3xl font-bold mb-10 text-amber-900">Full Collection</h2>
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-amber-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-68 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-amber-900">{product.name}</h3>
              <p className="text-gray-700 mb-4">KES {product.price.toLocaleString()}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
