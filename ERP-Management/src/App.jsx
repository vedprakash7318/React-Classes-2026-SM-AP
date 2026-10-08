import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import Subjects from './AdminPages/Subjects'
import Teachers from './AdminPages/Teachers'
import Fee from './AdminPages/Fee'
import Registration from './AdminPages/Registration'
import AdminSettings from './AdminPages/AdminSettings'
import AllClasses from './AdminPages/AllClasses'




 


const App = () => {
  return (
    <>
      <Router>
        <Routes>

          
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />


      {/* Admin Routes  start*/}

          <Route path='/subjects' element={<Subjects />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/fee' element={<Fee />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/class' element={<AllClasses />} />
          <Route path='/admin-settings' element={<AdminSettings />} />

      {/* Admin Routes  end*/}


        </Routes>
      </Router>



      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App