import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Reservation = () => {

  const [reservationData, setReservationData]=useState({
    name:'',
    contactInfo:'',
    date:'',
    reservationTime:'',
    peopleCount:'',
    message:''
  })

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e)=>{
    setReservationData({...reservationData,[e.target.name]:e.target.value})
    setSuccessMessage(''); // Clear the success message when user starts typing
    setErrorMessage(''); // Clear error messages when user starts typing
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if (!reservationData.name || !reservationData.contactInfo || !reservationData.date || !reservationData.reservationTime || !reservationData.peopleCount || !reservationData.message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try{
      // setErrorMessage('');
      const response = await axios.post('http://localhost:8000/api/v1/reservation', reservationData);
      setSuccessMessage('Reservation successful!');
      setLoading(false);

      setReservationData({
        name:'',
        contactInfo:'',
        date:'',
        reservationTime:'',
        peopleCount:'',
        message:''
      });

    }catch(error){
      setErrorMessage('There was an error making the reservation. Please try again.');
      setLoading(false);
    }
    
    
    
  }

  return (
    <div className=" min-h-screen">
      {/* Reservation Section */}
      <section className="relative bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url('https://img.freepik.com/free-photo/top-view-delicious-mushroom-pizza-with-cheese-olives-tomatoes-dark-floor-italy-meal-dough-pizza-food_140725-101785.jpg?ga=GA1.1.1830151876.1728808953&semt=ais_hybrid')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-white flex items-center">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Make a Reservation</h2>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input
                  type="date"
                  name="date"
                  value={reservationData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                  placeholder="Select Date"
                />
                <input
                  type="time"
                  name="reservationTime"
                  value={reservationData.reservationTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                  placeholder="Select Time"
                />
              </div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                value={reservationData.name}
                onChange={handleChange}
                placeholder="Your Name"
              
              />
              <input
                type="text"
                name="contactInfo"
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                value={reservationData.contactInfo}
                onChange={handleChange}
                placeholder="Your Contact Info"
                
              />
              <input
                type="number"
                name="peopleCount"
                value={reservationData.peopleCount}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                placeholder="Total Guests"
              />
              <textarea
                name="message"
                value={reservationData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-800 rounded focus:outline-none"
                placeholder="Write a Message"
                rows="4"
              ></textarea>
              <button
               type='submit'
               disabled={loading}
               className="px-6 py-3 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition duration-300">
                {loading ? 'Sending...' : 'Make a Reservation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Reservation;
