import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Order from './Pages/Order'
import Contacts from './Pages/Contacts'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App