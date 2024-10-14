

import React from 'react';

const Company = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        <div className="relative w-full lg:w-1/2 mr-8 ml-4 mb-10 lg:mb-0">
          <img
            src="/images/pasta.jpg"
            alt="Delicious Pasta"
            className="w-full rounded-full"
          />
        </div>

        {/* Right Section (Text and Info) */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-red-500 font-bold text-lg">About Company</h2>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Where quality food meets excellent service
          </h1>
          <p className="text-gray-600">
            It's the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go
            above and beyond.
          </p>
          
          {/* Features Section */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Fast Foods</h3>
              <p className="text-gray-500">Health foods are nutrient-dense foods.</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Healthy Foods</h3>
              <p className="text-gray-500">Health foods are nutrient-dense foods.</p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Founder CEO"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold">Ronald Richards</h4>
              <p className="text-gray-500 text-sm">Founder CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
