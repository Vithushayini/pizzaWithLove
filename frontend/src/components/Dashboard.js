import React, { useState } from 'react';
import PizzaManagement from './subDashboards/PizzaManagement';
import ReservationManagement from './subDashboards/ReservationManagement';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pizzas'); // Tracks current tab
  
  return (
    <div className="min-h-screen p-4" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/one-piece-pizza-pepperoni-with-mozzarella-black-surface_215497-334.jpg')",backgroundSize: 'cover',backgroundPosition: 'center', }}>
      <h1 className="text-3xl font-bold text-white text-center mb-6">Admin Dashboard</h1>
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'pizzas' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('pizzas')}
        >
          Manage Pizzas
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'reservations' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('reservations')}
        >
          View Reservations
        </button>
      </div>

      <div>
        {activeTab === 'pizzas' && <PizzaManagement />}
        {activeTab === 'reservations' && <ReservationManagement />}
      </div>
    </div>
  );
}

export default Dashboard;