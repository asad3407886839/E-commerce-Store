import React from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="https://www.elo.shopping/images/elo-logo.svg" alt="Logo" className="h-8" />
      </div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaUser className="text-gray-600" size={24} />
        <FaHeart className="text-gray-600" size={24} />
        <FaShoppingCart className="text-gray-600" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
