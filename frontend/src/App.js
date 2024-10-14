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

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header/>
      <Home/>
      <Menu/>
      <Company/>
      <Menus/>
      <ExpertChefs/>
      <Reservation/>
      <Blog/>
      <AdminLogin setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default App
