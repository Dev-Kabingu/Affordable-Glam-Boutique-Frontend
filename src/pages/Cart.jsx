// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

//   if (cartItems.length === 0) {
//     return (
//       <div className="px-6 py-10">
//         <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 py-10">
//       <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
//       {cartItems.map(item => (
//         <div key={item._id || item.id} className="flex items-center justify-between border-b py-4">
//           <div className="flex items-center space-x-4">
//             <img
//               src={`http://localhost:5000/uploads/${item.image}`} 
//               alt={item.title || item.name}
//               className="w-20 h-20 object-cover rounded"
//             />
//             <div>
//               <h4 className="text-xl">{item.title || item.name}</h4>
//               <div className="flex items-center space-x-2 mt-2">
//                 <button onClick={() => decreaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">-</button>
//                 <span>Qty: {item.quantity || 1}</span>
//                 <button onClick={() => increaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">+</button>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="text-red-600 text-sm mt-2 hover:underline block"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//           <p className="text-xl font-semibold">KSH {(item.price) * (item.quantity || 1)}</p>
//         </div>
//       ))}
//       <div className="text-right mt-6">
//         <p className="text-lg font-semibold">Subtotal: KSH {subtotal}</p>
//         <Link
//   to="/checkout"
//   className="mt-4 inline-block bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700"
// >
//   Proceed to Checkout
// </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, loadingCart } = useCart(); // include loadingCart here

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  if (loadingCart) {
    return (
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        <p>Loading cart...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item._id || item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center space-x-4">
            <img
              src={`http://localhost:5000/uploads/${item.image}`} 
              alt={item.title || item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h4 className="text-xl">{item.title || item.name}</h4>
              <div className="flex items-center space-x-2 mt-2">
                <button onClick={() => decreaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">-</button>
                <span>Qty: {item.quantity || 1}</span>
                <button onClick={() => increaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">+</button>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-600 text-sm mt-2 hover:underline block"
              >
                Remove
              </button>
            </div>
          </div>
          <p className="text-xl font-semibold">KSH {(item.price) * (item.quantity || 1)}</p>
        </div>
      ))}
      <div className="text-right mt-6">
        <p className="text-lg font-semibold">Subtotal: KSH {subtotal}</p>
        <Link
          to="/checkout"
          className="mt-4 inline-block bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
