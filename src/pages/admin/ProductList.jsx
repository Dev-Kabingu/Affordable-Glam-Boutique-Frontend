import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products'); 
        console.log('Fetched products:', res.data);
        setProducts(res.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
            fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts((prev) => prev.filter((product) => product._id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Image</th>
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.map(({ _id, title, price, image }) => (
            <tr key={_id} className="border-b">
              <td className="p-4">
                <img
                  src={`http://localhost:5000/uploads/${image}`}
                  alt={title}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-4">{title}</td>
              <td className="p-4">${price}</td>
              <td className="p-4">
                <Link
                  to={`/admin/editproduct/${_id}`} className="text-blue-600 mr-4 hover:underline">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default ProductList;
