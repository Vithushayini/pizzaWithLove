import React,{useState} from 'react'
import Header from './components/layouts/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Company from './components/Company'
import Menus from './components/Menus'
import ExpertChefs from './components/Chefs'
import Reservation from './components/Reservation'
import Blog from './components/Blog'
import AdminLogin from './components/AdminLoginPage'
import Dashboard from './components/Dashboard'

import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Footer from './components/layouts/Footer'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div>

      <BrowserRouter>
          <Routes>

            <Route path="/" element={<>
              <Header setIsLoggedIn={setIsLoggedIn}/>
              <Home/>
              <Menu/>
              <Company/>
              <Menus/>
              <ExpertChefs/>
              <Reservation/>
              <Blog/>
              <Footer/>
            </>} />
        
            <Route path="/login" element={<AdminLogin setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/" />}/>
            <Route path="/menus" element={<Menus/>}/>
            

          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
