import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
      <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/dashboard" className="hover:text-gray-400">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/products" className="hover:text-gray-400">Manage Products</Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/orders" className="hover:text-gray-400">Manage Orders</Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/users" className="hover:text-gray-400">Manage Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
