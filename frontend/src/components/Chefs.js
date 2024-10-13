import React from 'react';

const ExpertChefs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Download App Section */}
      <section className="bg-slate-300 p-8" >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Download food app</h2>
            <p className="text-gray-600 mt-2">Order today</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/google-play.png"
                  alt="Google Play"
                  className="w-6 h-6 mr-2"
                />
                Download from Google Play
              </a>
              <a
                href="#"
                className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/apple-logo-icon-1661x2048-8adk63j7.png"
                  alt="App Store"
                  className="w-6 h-6 mr-2"
                />
                Download from App Store
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div>
            <img
              className="w-full lg:w-auto h-48"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b84a35127750483.61489a00ad703.png"
              alt="Food App"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Expert Chefs Section */}
      <section className="py-12">
        <h3 className="text-center text-3xl font-bold text-gray-800">Meet our expert chefs</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {/* Chef 1 */}
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover rounded-full"
              src="/images/chef1.jpg"
              alt="Chef 1"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-700">Chef Jane</h4>
            <p className="text-gray-500">Master of Italian Cuisine</p>
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover rounded-full"
              src="/images/chef2.jpg"
              alt="Chef 2"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-700">Chef John</h4>
            <p className="text-gray-500">Sushi Specialist</p>
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover rounded-full"
              src="/images/chef3.jpg"
              alt="Chef 3"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-700">Chef Dev</h4>
            <p className="text-gray-500">Pastry Expert</p>
          </div>

          {/* Chef 4 */}
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover rounded-full"
              src="/images/chef4.jpg"
              alt="Chef 4"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-700">Chef Dhruv</h4>
            <p className="text-gray-500">Grill Master</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-8 bg-white">
        <div className="text-center">
          <p className="text-lg text-gray-600">Global 5k+ Happy Sponsors With Us</p>
        </div>
        <div className="mt-6 flex justify-center space-x-8">
          <img
            className="h-12"
            src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493648.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid"
            alt="Sponsor 1"
          />
          <img
            className="h-12"
            src="https://img.freepik.com/premium-vector/logo-restaurant-vector-illustration_1277164-819.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid"
            alt="Sponsor 2"
          />
          <img
            className="h-12"
            src="https://img.freepik.com/free-vector/german-food-label_23-2147502126.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid"
            alt="Sponsor 3"
          />
          <img
            className="h-12"
            src="https://img.freepik.com/free-vector/food-white-background_24908-61023.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid"
            alt="Sponsor 4"
          />
          <img
            className="h-12"
            src="https://img.freepik.com/free-vector/circular-food-frame-with-flat-design_23-2147847843.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid"
            alt="Sponsor 5"
          />
        </div>
      </section>
    </div>
  );
};

export default ExpertChefs;
