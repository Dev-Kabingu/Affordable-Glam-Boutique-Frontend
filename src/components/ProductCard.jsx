import { useNavigate } from 'react-router-dom';

const ProductCard = ({ _id, title, price, image }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <img src={`http://localhost:5000/uploads/${image}`} alt={title} className="w-full h-48 object-cover rounded mb-4" />

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">KSH. {price}</p>
      <button
        onClick={() => navigate(`/product/${_id}`)}
        className="mt-3 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
      >
        View Product
      </button>
    </div>
  );
};

export default ProductCard;
