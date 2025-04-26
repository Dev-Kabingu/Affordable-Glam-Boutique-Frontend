import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); // Use File object
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', image); // File here
    formData.append('description', description);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      await axios.post(`${API_URL}/api/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
   <>
   <section className="bg-gradient-to-br from-white via-indigo-50 to-white text-gray-800 font-[Inter]">
   <div className="max-w-2xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-amber-900">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Upload Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-md"
            accept="image/*"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-800 text-white py-2 rounded-md hover:bg-amber-700"
        >
          Add Product
        </button>
      </form>
    </div>
   </section>
   </>
  );
};

export default AddProduct;
