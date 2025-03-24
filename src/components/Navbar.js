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
              <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400 transition duration-300">About</a>
            </li>
            <li>
              <a href="/projects" className="text-blue-400 font-semibold">Projects</a> {/* Current Page Highlighted */}
            </li>
            <li>
              <a href="/hobbies" className="hover:text-gray-400 transition duration-300">Hobbies</a>
            </li>
          </ul>
        </div>
    </nav>
   </div>
  );
};

export default Navbar;
