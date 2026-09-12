import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'
const App = () => {
  return (
    <>
        <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/shop' element={<Shop/>}/>
              <Route path='/gallery' element={<Gallery/>}/>

          </Routes>
        </Router>
    </>
  )
}

export default App