import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4"><Link to="/admin/productlist">Product List</Link></li>
          <li className="mb-4"><Link to="/admin/addproduct">Add Product</Link></li>
          <li className="mb-4"><Link to="/admin/orders">Customer Orders</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
