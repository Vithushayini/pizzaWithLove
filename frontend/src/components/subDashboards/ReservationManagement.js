import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/reservation',{
          withCredentials: true,  // Enable sending cookies with the request
        });
        
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2 className="text-2xl w-1/2 text-white font-bold mb-4 px-5 text-center">Reservation List</h2>
      <div className=" ml-10 mr-10 grid grid-cols-1 gap-4">
        {reservations.map((reservation) => (
          <div key={reservation._id} className="bg-white w-1/2 p-4 rounded shadow-md text-center">
            <h4 className="text-lg font-bold">Reservation by {reservation.name}</h4>
            <p>Contact: {reservation.contactInfo}</p>
            <p>Reservation Date: {reservation.date}</p>
            <p>Time: {reservation.reservationTime}</p>
            <p>People Count: {reservation.peopleCount}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Confirm Reservation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationManagement;
