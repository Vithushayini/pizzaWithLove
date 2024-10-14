import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="relative bg-cover bg-center h-screen py-32" style={{ backgroundImage: "url('/images/pizzaHome.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-5">Welcome to Pizza With Love</h1>
          <p className="text-4xl font-bold tracking-wide">
            GET BEST QUALITY FOOD FROM US
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition"><Link to="/menus" className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition">
            Explore Menu
          </Link></button>
        </div>
      </section>
    </div>
  );
};

export default Home;
