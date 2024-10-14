import React from 'react';

const Menus = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-red-600 text-white  p-6 text-center" style={{ backgroundImage: "url('/images/pizzaHome.jpg')" }}>
        <h1 className="text-4xl font-bold">Delicious Pizza</h1>
        <p className="mt-2 text-xl">The Best Pizza in Town</p>
        <span className="block mt-4 bg-yellow-500 text-black font-bold p-2 inline-block rounded">
          UP TO 32% DISCOUNT
        </span>
      </div>

      {/* Menu Section */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Best Foods Menu</h2>

        {/* Categories */}
        <div className="flex justify-center space-x-8 mb-6">
          <div className="text-center">
            <span className="text-gray-800">🍔</span>
            <p className="text-red-600">Beef Burger</p>
          </div>
          <div className="text-center">
            <span className="text-gray-800">🍕</span>
            <p className="text-yellow-500 font-bold">Pizza</p>
          </div>
          <div className="text-center">
            <span className="text-gray-800">🍝</span>
            <p className="text-red-600">Fresh Pasta</p>
          </div>
          <div className="text-center">
            <span className="text-gray-800">🍣</span>
            <p className="text-red-600">Hot Sushi</p>
          </div>
          <div className="text-center">
            <span className="text-gray-800">🥤</span>
            <p className="text-red-600">Drink & Juice</p>
          </div>
        </div>

        {/* Pizza Menu */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {/* Pizza Items */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima13.jpg"
              alt="Pepperoni Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Pepperoni Pizza</h3>
              <p className="text-gray-600">Classic pizza with pepperoni, mozzarella, and tomato sauce.</p>
              <span className="block mt-4 text-red-600 font-bold">$12.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima2.jpg"
              alt="Margherita Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Margherita Pizza</h3>
              <p className="text-gray-600">Traditional pizza with fresh tomatoes, mozzarella, and basil.</p>
              <span className="block mt-4 text-red-600 font-bold">$10.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima3.jpg"
              alt="BBQ Chicken Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">BBQ Chicken Pizza</h3>
              <p className="text-gray-600">Topped with BBQ sauce, grilled chicken, and onions.</p>
              <span className="block mt-4 text-red-600 font-bold">$13.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima4.jpg"
              alt="Vegetarian Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Vegetarian Pizza</h3>
              <p className="text-gray-600">Loaded with bell peppers, onions, mushrooms, and olives.</p>
              <span className="block mt-4 text-red-600 font-bold">$11.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima5.jpg"
              alt="Hawaiian Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Hawaiian Pizza</h3>
              <p className="text-gray-600">Ham, pineapple, and mozzarella cheese with tomato sauce.</p>
              <span className="block mt-4 text-red-600 font-bold">$14.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima7.jpg"
              alt="Meat Lover's Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Meat Lover's Pizza</h3>
              <p className="text-gray-600">Loaded with pepperoni, sausage, ham, and bacon.</p>
              <span className="block mt-4 text-red-600 font-bold">$15.99</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima8.jpg"
              alt="Four Cheese Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Four Cheese Pizza</h3>
              <p className="text-gray-600">Mozzarella, cheddar, parmesan, and gorgonzola cheese blend.</p>
              <span className="block mt-4 text-red-600 font-bold">$13.49</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <img
              className="w-40 h-40 object-cover rounded-lg"
              src="/images/ima11.jpg"
              alt="Buffalo Chicken Pizza"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Buffalo Chicken Pizza</h3>
              <p className="text-gray-600">Spicy buffalo sauce, grilled chicken, and mozzarella.</p>
              <span className="block mt-4 text-red-600 font-bold">$14.49</span>
            </div>
          </div>



          {/* <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">Supreme Pizza</h3>
            <p className="text-gray-600">Pepperoni, sausage, bell peppers, onions, mushrooms, and olives.</p>
            <span className="block mt-4 text-red-600 font-bold">$16.49</span>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Menus;
