import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
