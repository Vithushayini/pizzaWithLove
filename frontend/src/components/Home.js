import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/pizzaHome.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-5">Welcome to Pizza With Love</h1>
          <p className="text-4xl font-bold tracking-wide">
            GET BEST QUALITY FOOD FROM US
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition">
            Explore Menu
          </button>
        </div>
      </section>

      {/* Featured items section */}
      {/* <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Special Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <img src="/burger.jpg" alt="burger" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Burger</h3>
              <p className="text-lg">$9.99</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <img src="/pizza.jpg" alt="pizza" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Pizza</h3>
              <p className="text-lg">$12.99</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <img src="/pasta.jpg" alt="pasta" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Pasta</h3>
              <p className="text-lg">$8.99</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
