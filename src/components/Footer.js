import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      © {new Date().getFullYear()} Aditya Singh. All rights reserved.
    </footer>
  );
};

export default Footer;
