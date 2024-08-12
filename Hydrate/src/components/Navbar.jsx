import React, { useState } from 'react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="gradDynamic mb-4 p-4">
      <div className="flex items-center justify-between">
        <a href="/"><span className="futuristic-heading text-white text-3xl font-extrabold">Hydrate</span></a>
        <ul className="flex space-x-4">
          <li className="relative group">
            <a href="#" className="block px-4 py-2 transition-all duration-300 ease-in-out group-hover:bg-light-blue group-hover:text-yellow">
              Home
            </a>
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-25 blur-md"></div>
          </li>
          <li className="relative group">
            <button onClick={toggleProductsDropdown} className="block px-4 py-2 transition-all duration-300 ease-in-out group-hover:bg-light-blue group-hover:text-yellow">
              Products
            </button>
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-25 blur-md"></div>
            {isProductsOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md">
                <li className="px-4 py-2 hover:bg-gray-100">Water Bottles</li>
                <li className="px-4 py-2 hover:bg-gray-100">Containers</li>
                <li className="px-4 py-2 hover:bg-gray-100">Enhanced Juice Syrups</li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <a href="#" className="block px-4 py-2 transition-all duration-300 ease-in-out group-hover:bg-light-blue group-hover:text-yellow">
              About
            </a>
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-25 blur-md"></div>
          </li>
          <li className="relative group">
            <a href="#" className="block px-4 py-2 transition-all duration-300 ease-in-out group-hover:bg-light-blue group-hover:text-yellow">
              Contact Us
            </a>
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-25 blur-md"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
