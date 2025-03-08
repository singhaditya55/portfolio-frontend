import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white fixed w-full top-0">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;  // ✅ Ensure default export
