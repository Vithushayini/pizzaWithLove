import React from 'react';

const Reservation = () => {
  return (
    <div className=" min-h-screen">
      {/* Reservation Section */}
      <section className="relative bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url('https://img.freepik.com/free-photo/top-view-delicious-mushroom-pizza-with-cheese-olives-tomatoes-dark-floor-italy-meal-dough-pizza-food_140725-101785.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-white flex items-center">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Make a Reservation</h2>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                  placeholder="Select Date"
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                  placeholder="Select Time"
                />
              </div>
              <input
                type="number"
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                placeholder="Total Guests"
              />
              <textarea
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                placeholder="Write a Message"
                rows="4"
              ></textarea>
              <button className="px-6 py-3 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition duration-300">
                Make a Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Reservation;
