import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Carewave</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
