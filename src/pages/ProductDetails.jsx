
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext'; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then(({ data }) => setProduct(data));
  }, [id]);
 
  const handleAddToCart = () => {
    addToCart(product);
    alert('Item added to cart!');
    navigate('/products'); // 🚀 Redirect after adding
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={`http://localhost:5000/uploads/${product.image}`}
 alt={product.title} className="w-full h-80 object-cover rounded" />
        <div>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">KSH {product.price}</p>
          <button onClick={handleAddToCart} className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
