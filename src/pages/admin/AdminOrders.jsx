import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [totalDeliveries, setTotalDeliveries] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders/admin/orders');

        
        // Ensure we get an array
        if (Array.isArray(data)) {
          setOrders(data);
          setFilteredOrders(data); // Initially display all orders
          setTotalDeliveries(data.length); // Set total number of deliveries
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter orders based on the search query (name or phone)
  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.phone.includes(searchQuery)
    );
    setFilteredOrders(filtered);
  }, [searchQuery, orders]);

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/admin/orders/${orderId}`);

      
      // Remove the deleted order from state (both orders and filteredOrders)
      const updatedOrders = orders.filter((order) => order._id !== orderId);
      setOrders(updatedOrders);
      
      const updatedFilteredOrders = filteredOrders.filter((order) => order._id !== orderId);
      setFilteredOrders(updatedFilteredOrders);

      // Update total deliveries count
      setTotalDeliveries(updatedOrders.length);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  // Convert deliveries to CSV for export
  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Phone', 'Address', 'Transaction Code', 'Total Amount', 'Status'],
      ...filteredOrders.map((order) => [
        order.name,
        order.phone,
        order.address,
        order.transactionCode,
        order.totalAmount,
        order.status,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'deliveries.csv';
    link.click();
  };

  return (
    <div className="admin-orders-container">
      <h2 className="text-2xl font-bold mb-4">Admin - View Orders</h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name or phone number"
          className="p-2 border rounded"
        />
      </div>

      {/* Total Deliveries */}
      <p className="mb-4 text-lg font-semibold">Total Deliveries: {totalDeliveries}</p>

      {/* Export Button */}
      <button
        onClick={exportToCSV}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Export to CSV
      </button>

      {/* Display Orders */}
      {filteredOrders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Transaction Code</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.phone}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.transactionCode}</td>
                <td className="px-4 py-2">KSH {order.totalAmount}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
