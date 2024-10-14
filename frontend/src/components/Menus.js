// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Menus = () => {

//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     const fetchPizzas = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/v1/menu', {
//           withCredentials: true, // Enable sending cookies with the request
//         });

//         setPizzas(response.data);
//       } catch (error) {
//         console.error('Error fetching pizzas', error);
      
//       }
//     };

//     fetchPizzas();
//   }, [pizzas]);

//   return (
//     <div className="bg-gray-100">
//       {/* Header Section */}
//       <div className="bg-red-600 text-white  p-6 text-center" style={{ backgroundImage: "url('/images/pizzaHome.jpg')" }}>
//         <h1 className="text-4xl font-bold">Delicious Pizza</h1>
//         <p className="mt-2 text-xl">The Best Pizza in Town</p>
//         <span className="block mt-4 bg-yellow-500 text-black font-bold p-2 inline-block rounded">
//           UP TO 32% DISCOUNT
//         </span>
//       </div>

//       {/* Menu Section */}
//       <section className="py-8">
//         <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Best Foods Menu</h2>

//         {/* Categories */}
//         <div className="flex justify-center space-x-8 mb-6">
//           <div className="text-center">
//             <span className="text-gray-800">🍔</span>
//             <p className="text-red-600">Beef Burger</p>
//           </div>
//           <div className="text-center">
//             <span className="text-gray-800">🍕</span>
//             <p className="text-yellow-500 font-bold">Pizza</p>
//           </div>
//           <div className="text-center">
//             <span className="text-gray-800">🍝</span>
//             <p className="text-red-600">Fresh Pasta</p>
//           </div>
//           <div className="text-center">
//             <span className="text-gray-800">🍣</span>
//             <p className="text-red-600">Hot Sushi</p>
//           </div>
//           <div className="text-center">
//             <span className="text-gray-800">🥤</span>
//             <p className="text-red-600">Drink & Juice</p>
//           </div>
//         </div>

//         {/* Pizza Menu */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
//           {/* Pizza Items */}
//           {pizzas.map((pizza)=>(
//               <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
//               <img
//                 className="w-40 h-40 object-cover rounded-lg"
//                 src={pizza.imageUrl}
//                 alt="Pepperoni Pizza"
//               />
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
//                 <p className="text-gray-600">{pizza.description}</p>
//                 <span className="block mt-4 text-red-600 font-bold">{pizza.price}</span>
//               </div>
//             </div>
//           ))}
        
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Menus;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menus = () => {
  const [pizzas, setPizzas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6; // Number of pizzas to show per page

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/menu', {
          withCredentials: true,
        });
        setPizzas(response.data);
      } catch (error) {
        console.error('Error fetching pizzas', error);
      }
    };

    fetchPizzas();
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(pizzas.length / itemsPerPage);

  // Get the pizzas for the current page
  const currentPizzas = pizzas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          {/* Displaying current pizzas */}
          {currentPizzas.map((pizza) => (
            <div key={pizza._id} className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
              <img
                className="w-40 h-40 object-cover rounded-lg"
                src={pizza.imageUrl}
                alt={pizza.name}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                <p className="text-gray-600">{pizza.description}</p>
                <span className="block mt-4 text-red-600 font-bold">${pizza.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-2 mt-6">
          {/* Previous Page */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-red-500 text-white'}`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${page === currentPage ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              {page}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-red-500 text-white'}`}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menus;

