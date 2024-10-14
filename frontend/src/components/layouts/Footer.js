
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="about">
          <h3 className="text-xl font-bold mb-4">About Restaurant</h3>
          <p>
            Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare.
            Objectively repurpose stand-alone synergy via user-centric architectures.
          </p>
        </div>

        <div className="our-menu">
          <h3 className="text-xl font-bold mb-4">Our Menu</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-yellow-500 hover:underline">Chicken Burger</a></li>
            <li className="mb-2"><a href="#" className="text-yellow-500 hover:underline">Brief Pizza</a></li>
            <li className="mb-2"><a href="#" className="text-yellow-500 hover:underline">Fresh Vegetable</a></li>
            <li className="mb-2"><a href="#" className="text-yellow-500 hover:underline">Sea Foods</a></li>
            <li className="mb-2"><a href="#" className="text-yellow-500 hover:underline">Indian Kabab</a></li>
          </ul>
        </div>

        <div className="recent-posts">
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">10 Reasons To Do A Digital Detox Challenge</a> <span className="text-gray-400">21 June, 2023</span></li>
            <li className="mb-2"><a href="#" className="hover:underline">New Restaurant Town Our Pie Award Contract</a> <span className="text-gray-400">22 June, 2023</span></li>
          </ul>
        </div>

        <div className="contact-now">
          <h3 className="text-xl font-bold mb-4">Contact Now</h3>
          <p>1403 Washington Ave, New Orleans, LA 70130, United States</p>
          <p>+(1) 123 456 7890</p>
          <p>+(1) 098 765 4321</p>
          <p className="text-gray-400">info@pizzawithlove.com</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mt-8">
        <h3 className="text-lg font-bold mb-4">Subscribe Our Newsletter</h3>
        <input type="email" placeholder="Email Address" className="p-2 rounded-md text-black" />
        <button className="bg-yellow-500 text-black font-bold p-2 rounded-md ml-2">
          Subscribe
        </button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">Copyright © 2023 Themeholy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
