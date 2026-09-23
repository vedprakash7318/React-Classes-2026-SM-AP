import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MyCard from './Components/MyCard'
import MyTable from './Components/MyTable'
const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<MyTable/>}/>
                <Route path='/c' element={<MyCard/>}/>
            </Routes>
        </Router>


    </>
  )
}

export default App