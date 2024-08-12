import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black mt-3 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex space-x-6">
          <li className="transition-all duration-300 ease-in-out hover:bg-blue-500 rounded-md p-2">
            <a href="#">Home</a>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:bg-blue-500 rounded-md p-2">
            <a href="#">Products</a>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:bg-blue-500 rounded-md p-2">
            <a href="#">About</a>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:bg-blue-500 rounded-md p-2">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="mt-4">
          <p className="text-center">&copy; 2024 Hydrate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
