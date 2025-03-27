import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         {/* Clickable "AS" Logo */}
         <NavLink to="/" className="text-2xl font-bold text-white hover:text-gray-400 transition duration-300">
          AS
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-400 transition duration-300"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-400 transition duration-300"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-400 transition duration-300"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/hobbies" 
              className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-400 transition duration-300"}
            >
              Hobbies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
