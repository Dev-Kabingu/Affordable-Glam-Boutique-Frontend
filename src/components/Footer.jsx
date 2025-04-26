const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-amber-500">ShopBrand</h3>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop shop for quality products delivered straight to your door. Affordable. Reliable. Stylish.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-amber-500 transition">Home</a></li>
            <li><a href="/shop" className="hover:text-amber-500 transition">Shop</a></li>
            <li><a href="/login" className="hover:text-amber-500 transition">Login</a></li>
            <li><a href="/register" className="hover:text-amber-500 transition">Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Email: <a href="mailto:support@shopbrand.com" className="hover:text-amber-500 transition">support@shopbrand.com</a></p>
          <p className="text-gray-400 mt-2">Phone: <a href="tel:+254712345678" className="hover:text-amber-500 transition">+254 712 345 678</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
