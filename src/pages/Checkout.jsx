
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Checkout = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems?.length
    ? cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)
    : 0;

  const phoneNumber = '0700123456'; // Your M-Pesa number

  // New: form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    transactionCode: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
  
    try {

      const response = await axios.post('http://localhost:5000/api/orders', {
        ...formData,  
        totalAmount: subtotal,  // Include the total amount in the order data
        status: 'Pending',  // Default order status
      });
  
      console.log('Order placed successfully:', response.data);
  
      // Display success message
      alert('Order placed successfully! We will contact you soon.');
  
      // Reset the form
      setFormData({
        name: '',
        phone: '',
        address: '',
        transactionCode: '',
      });
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };
  
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        {cartItems.map(item => (
          <div key={item._id || item.id} className="flex justify-between mb-2">
            <p>{item.title || item.name} (x{item.quantity || 1})</p>
            <p>KSH {item.price * (item.quantity || 1)}</p>
          </div>
        ))}
        <div className="border-t pt-4 mt-4 flex justify-between font-bold">
          <p>Total:</p>
          <p>KSH {subtotal}</p>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="bg-yellow-100 p-6 rounded shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4">Payment Instructions</h3>
        <p className="mb-2">1. Open your M-Pesa menu.</p>
        <p className="mb-2">2. Select <strong>Send Money</strong>.</p>
        <p className="mb-2">3. Enter Phone Number: <strong>{phoneNumber}</strong>.</p>
        <p className="mb-2">4. Enter Amount: <strong>KSH {subtotal}</strong>.</p>
        <p className="mb-2">5. Confirm and send.</p>
        <p className="mt-4 text-green-700 font-semibold">
          After payment, fill in your details below.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto p-6 ">
        <h3 className="text-2xl font-semibold mb-4">Delivery Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Delivery Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">M-Pesa Transaction Code</label>
            <input
              type="text"
              name="transactionCode"
              value={formData.transactionCode}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Back to home */}
      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Checkout;
