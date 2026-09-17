import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MyCounter from './Pages/MyCounter'
import MyForm from './Pages/MyForm'
import Products from './Pages/Products'
import MySeach from './Pages/MySeach'
import MyRef from './Pages/MyRef'
import MyMemo from './Pages/MyMemo'
import MyCallBack from './Pages/MyCallBack'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MyCounter/>} />
        <Route path='/form' element={<MyForm/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/search' element={<MySeach/>} />
        <Route path='/r' element={<MyRef/>} />
        <Route path='/m' element={<MyMemo/>} />
        <Route path='/c' element={<MyCallBack/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App