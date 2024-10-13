import React from 'react'
import Header from './components/layouts/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import CompanyPage from './components/Company'
import Menus from './components/Menus'
import ExpertChefs from './components/Chefs'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Menu/>
      <CompanyPage/>
      <Menus/>
      <ExpertChefs/>
    </div>
  )
}

export default App
