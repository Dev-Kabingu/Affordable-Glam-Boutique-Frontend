import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Affordable Glam Boutique"
            className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
          <p className="text-xl md:text-2xl font-bold text-amber-900 tracking-wide">
            Affordable <br /> Glam <span className="text-yellow-500">Boutique</span>
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-amber-700 transition-colors duration-200">Home</Link></li>
          <li><Link to="/products" className="hover:text-amber-700 transition-colors duration-200">Products</Link></li>
          <li><Link to="/cart" className="hover:text-amber-700 transition-colors duration-200">Cart</Link></li>
          <li><Link to="/login" className="hover:text-amber-700 transition-colors duration-200">Login</Link></li>
          <li><Link to="/admin/dashboard" className="hover:text-amber-700 transition-colors duration-200">Admin</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={24} onClick={() => setIsOpen(false)} className="text-amber-900 cursor-pointer" />
          ) : (
            <FiMenu size={24} onClick={() => setIsOpen(true)} className="text-amber-900 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-gray-700 font-medium text-center">
          <li><Link to="/" onClick={() => setIsOpen(false)}  className="hover:text-amber-700 transition-colors duration-200">Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}  className="hover:text-amber-700 transition-colors duration-200">Products</Link></li>
          <li><Link to="/cart" onClick={() => setIsOpen(false)}  className="hover:text-amber-700 transition-colors duration-200">Cart</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}  className="hover:text-amber-700 transition-colors duration-200">Login</Link></li>
          <li><Link to="/admin" onClick={() => setIsOpen(false)}  className="hover:text-amber-700 transition-colors duration-200">Admin</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
