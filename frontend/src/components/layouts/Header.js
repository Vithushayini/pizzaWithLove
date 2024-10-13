import React from 'react';
import { IoIosHeart } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <header className="bg-red-600 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center">
          <p>Free Delivery on all orders Over $50</p>
        </div>
        <div className="flex items-center space-x-4">
          <p>Rd. Allentown, New Mexico 31134</p>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-gray-300"> <FontAwesomeIcon icon={faSearch} /> </a>
            <a href="#" className="hover:text-gray-300"> <FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="hover:text-gray-300"> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="hover:text-gray-300"> <FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <span className="text-red-600">PIZZA WITH <IoIosHeart className='size-10 '/></span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-red-600">HOME</a>
            <a href="#" className="text-white hover:text-red-600">MENU</a>
            <a href="#" className="text-white hover:text-red-600">SHOP</a>
            <a href="#" className="text-white hover:text-red-600">PAGES</a>
            <a href="#" className="text-white hover:text-red-600">NEWS</a>
            <a href="#" className="text-white hover:text-red-600">CONTACT US</a>
          </nav>

          {/* Search, Cart, and Button */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-red-600">
            <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="#" className="relative text-white hover:text-red-600">
            <FontAwesomeIcon icon={faShoppingCart} />
              <span className="absolute bottom-5 left-2 bg-red-600 text-xs text-white rounded-full px-1">3</span>
            </a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
