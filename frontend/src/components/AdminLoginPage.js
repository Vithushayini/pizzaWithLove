
import React, { useState } from 'react';
import axios from 'axios';


const AdminLogin = ({ setIsLoggedIn }) => {
    const initialStateErrors = {
        username:null,
        password:null
    };

    const [errors,setErrors]=useState(initialStateErrors);

    const [error,setError]=useState(null);

    const [loading,setLoading]=useState(false);

    const [inputs,setInputs]=useState({
        username:"",
        password:""
    })


    const handleInput= (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        let errors =initialStateErrors; 
        let err=null;
        
        if(inputs.username == ""){
            errors.username="username required";
        }
        if (inputs.password == "") {
            errors.password="password required";
        }

        if(inputs.username && inputs.password){
            setLoading(true)

            console.log('Sending API request with inputs:', inputs);
            try{
                const response= await axios.post('http://localhost:8000/api/v1/login',{
                    username:inputs.username,
                    password:inputs.password
                });
                localStorage.setItem('token',response.data.token);
                setIsLoggedIn(true);
        
            }catch(error){
                err="invalid username or password";
                console.log(error);
                
            }finally{
                setLoading(false);
            }
            
        }

        setError(err);
        setErrors({...errors});
        
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" style={{ backgroundImage: "url('/images/pizzaHome.jpg')",backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={inputs.username}
          onChange={handleInput}
          className="w-full p-2 border rounded mb-0"
          name="username"
        />
            {errors.username ? (
            <span className="text-red-500 text-sm mb-14">
                {errors.username}
            </span>
            ) : null}
        <input
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInput}
          className="w-full p-2 border rounded mt-5 mb-0"
          name="password"
        />
            {errors.password ? (
            <span className="text-red-500 text-sm mt-1">
                {errors.password}
            </span>
            ) : null}

            {loading ? (
                <div className="flex justify-center items-center h-screen ">
                    <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
                </div>
            ) : null}

            <span className="text-red-500 text-sm">
                {error ? (
                    <p>{error}</p>
                ) : null}
            </span>

        <button className="w-full bg-red-500 text-white p-2 rounded mt-5">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
