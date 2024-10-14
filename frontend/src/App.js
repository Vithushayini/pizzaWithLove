import React from 'react'
import Header from './components/layouts/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import CompanyPage from './components/Company'
import Menus from './components/Menus'
import ExpertChefs from './components/Chefs'
import Reservation from './components/Reservation'
import Blog from './components/Blog'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Menu/>
      <CompanyPage/>
      <Menus/>
      <ExpertChefs/>
      <Reservation/>
      <Blog/>
    </div>
  )
}

export default App
