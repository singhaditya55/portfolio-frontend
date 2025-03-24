import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AS</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-blue-400 font-semibold">Projects</Link> {/* Current Page Highlighted */}
            </li>
            <li>
              <Link to="/hobbies" className="hover:text-gray-400 transition duration-300">Hobbies</Link>
            </li>
          </ul>
        </div>
    </nav>
   </div>
  );
};

export default Navbar;
