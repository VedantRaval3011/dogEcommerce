// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, PawPrint } from 'lucide-react';

const Navbar = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <PawPrint className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PetShop</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
                About
              </Link>
            </div>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-indigo-600"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;