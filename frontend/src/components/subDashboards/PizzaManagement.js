
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const PizzaManagement = () => {
  const [pizzas, setPizzas] = useState([]);
  const [newPizza, setNewPizza] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false); // Track if we're editing
  const [currentPizzaId, setCurrentPizzaId] = useState(null); // ID of the pizza being edited
  const [successMessage, setSuccessMessage] = useState(''); // For success messages
  const [errorMessage, setErrorMessage] = useState(''); // For error messages

  // Ref to the bottom of the pizza list
  const pizzaListRef = useRef(null);

  const fetchPizzas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/menu', {
        withCredentials: true, // Enable sending cookies with the request
      });

      setPizzas(response.data);
    } catch (error) {
      console.error('Error fetching pizzas', error);
      setErrorMessage('Error fetching pizzas');
    }
  };

  useEffect(() => {

    fetchPizzas();
  }, []);

  const handleAddPizza = async () => {
    if (isEditing) {
      // Update pizza when editing
      try {
        const response = await axios.put(`http://localhost:8000/api/v1/menu/${currentPizzaId}`, newPizza, {
          withCredentials: true,
        });
        setPizzas(
          pizzas.map((pizza) =>
            pizza._id === currentPizzaId ? response.data : pizza
          )
        );
        setIsEditing(false); // Reset editing state
        setSuccessMessage('Pizza updated successfully!');
        setErrorMessage(''); // Clear error message if successful
        // Scroll to the pizza list after adding a new pizza

        fetchPizzas();
        
        window.scrollTo({
            top: document.getElementById('pizza-list').offsetTop,
            behavior: 'smooth', // Smooth scroll
          });
      } catch (error) {
        console.error('Error updating pizza', error);
        setErrorMessage('Error updating pizza');
        setSuccessMessage(''); // Clear success message if error
      }
    } else {
      // Add a new pizza
      try {
        const response = await axios.post('http://localhost:8000/api/v1/menu', newPizza, {
          withCredentials: true,
        });
        setPizzas([...pizzas, response.data]);
        setSuccessMessage('Pizza added successfully!');
        setErrorMessage(''); // Clear error message if successful
        // Scroll to the bottom of the pizza list after adding
        setTimeout(() => {
            pizzaListRef.current.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      } catch (error) {
        console.error('Error adding pizza', error);
        setErrorMessage('Error adding pizza');
        setSuccessMessage(''); // Clear success message if error
      }
    }

    // Reset the form
    setNewPizza({ name: '', description: '', price: '', imageUrl: '' });
  };

  const handleEditPizza = (pizza) => {
    setNewPizza({
      name: pizza.name,
      description: pizza.description,
      price: pizza.price,
      imageUrl: pizza.imageUrl,
    });
    setIsEditing(true);
    setCurrentPizzaId(pizza._id);
    window.scrollTo({
        top: document.getElementById('top').offsetTop,
        behavior: 'smooth', // Smooth scroll
      });
  };

  const handleDeletePizza = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/menu/${id}`, {
        withCredentials: true,
      });
      setPizzas(pizzas.filter((pizza) => pizza._id !== id));
      setSuccessMessage('Pizza deleted successfully!');
      setErrorMessage('');
      // Scroll to the pizza list after deleting a pizza
      window.scrollTo({
        top: document.getElementById('top').offsetTop,
        behavior: 'smooth', // Smooth scroll
      });
    } catch (error) {
      console.error('Error deleting pizza', error);
      setErrorMessage('Error deleting pizza');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center text-white font-bold mb-4" id='top'>Manage Pizza Menu</h2>

      {/* Display Success Message */}
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-4 ml-20 mr-20">
          {successMessage}
        </div>
      )}

      {/* Display Error Message */}
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <div className="mb-6 ml-20 mr-20 p-4 px-10 justify-center items-center bg-white rounded shadow-md">
        <h3 className="text-xl font-semibold mb-3">{isEditing ? 'Edit Pizza' : 'Add New Pizza'}</h3>
        <input
          type="text"
          placeholder="Pizza Name"
          value={newPizza.name}
          onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Pizza Description"
          value={newPizza.description}
          onChange={(e) => setNewPizza({ ...newPizza, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={newPizza.price}
          onChange={(e) => setNewPizza({ ...newPizza, price: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newPizza.imageUrl}
          onChange={(e) => setNewPizza({ ...newPizza, imageUrl: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleAddPizza} className="bg-green-500 text-white px-4 py-2 rounded">
          {isEditing ? 'Update Pizza' : 'Add Pizza'}
        </button>
      </div>

      <h3 className="text-xl text-white font-semibold mb-4" id='pizza-list'>Pizza List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <div key={pizza._id} className="bg-white p-4 rounded shadow-md">
            <img src={pizza.imageUrl} alt={pizza.name} className="w-full h-32 object-cover mb-2 rounded" />
            <h4 className="text-lg font-bold">{pizza.name}</h4>
            <p>{pizza.description}</p>
            <p className="font-semibold">${pizza.price}</p>
            <button
              onClick={() => handleEditPizza(pizza)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeletePizza(pizza._id)}
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* This is an invisible div used for scrolling to the bottom */}
      <div ref={pizzaListRef} />
    </div>
  );
};

export default PizzaManagement;
