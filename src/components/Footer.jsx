import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Explore Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">EXPLORE</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">INFORMATION</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchange</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">CONTACT INFO</h2>
            <p>Telephone: 03288768783</p>
            <p>03006894233</p>
            <p>Email: <a href="mailto:zuhaib.zul@gmail.com" className="hover:text-white">zuhaib.zul@gmail.com</a></p>
            <p>Address: Colony no 3 near multani darbar junaid furniture khanewal</p>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">SIGN UP FOR NEWSLETTER</h2>
            <p className="mb-4">Signup for our newsletter for exclusive discounts and offers.</p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 rounded mb-4 text-black"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center border-t border-gray-700 pt-4">
          <p>Copyright © 2025 Junaid Furniture</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
