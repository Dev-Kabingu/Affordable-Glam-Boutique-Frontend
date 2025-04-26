import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Collection from '../pages/Collection';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';
// import ProtectedRoute from '../pages/admin/ProtectedRoute'
import AdminDashboard from '../pages/admin/AdminDashboard';
// import ManageProducts from '../pages/admin/ManageProducts';
// import AddProduct from '../pages/admin/AddProduct';
import EditProduct from '../pages/admin/EditProduct';
import ForgotPassword from '../pages/ForgotPassword';
import ProductList from '../pages/admin/ProductList';
import AddProduct from '../pages/admin/AddProduct';
import AdminOrders from '../pages/admin/AdminOrders';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path = "/Collection" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route path="/admin/addproduct" element={<AddProduct />} /> 
            <Route path="/admin/editproduct/:id" element = {<EditProduct/>} />
            <Route path="/admin/orders" element={<AdminOrders />} />

            {/* <Route path="/admin/admindashbaord"element={<AdminDashboard />} /> */}
            {/* <Route path="/admin/products" element={<ProtectedRoute adminOnly={true}><ManageProducts /></ProtectedRoute>}/> */}
            {/* <Route path="/admin/add-product" element={<ProtectedRoute adminOnly={true}><AddProduct /></ProtectedRoute>} /> */}
            {/* <Route path="/admin/edit-product/:id"element={<ProtectedRoute adminOnly={true}><EditProduct /></ProtectedRoute>}/> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    );
};

export default AppRoutes;
