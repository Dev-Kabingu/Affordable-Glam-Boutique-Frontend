// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[90vh]">
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Welcome Back!</h2>
            <p className="text-lg">Sign in to access your dashboard and manage your store efficiently.</p>
            <div className="mt-6">
              <svg className="w-24 h-24 mx-auto opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">Login to Your Account</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <div className="text-right mt-2">
                  <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
