import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-white text-2xl font-bold">Movie Tracker</h2>
            <p className="text-sm">Your one-stop destination for tracking movies you love.</p>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-500 transition-colors duration-200">
              About Us
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-500 transition-colors duration-200">
              Contact
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-500 transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
          <p>© {new Date().getFullYear()} Movie Tracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
