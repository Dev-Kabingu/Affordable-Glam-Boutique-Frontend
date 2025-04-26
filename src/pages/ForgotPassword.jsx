import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    // Simulated logic for password reset
    alert(`A password reset link has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[80vh]">

        {/* Left Side */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Forgot Your Password?</h2>
            <p className="text-lg">No worries! We'll help you reset it.</p>
            <svg className="w-24 h-24 mx-auto opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Reset Password</h2>

            <form className="space-y-5" onSubmit={handleReset}>
              <div>
                <label className="block text-gray-600 mb-1 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your registered email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-500">
              Remember your password?{' '}
              <Link to="/login" className="text-blue-600 font-medium hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
