import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;  // ✅ Ensure default export
