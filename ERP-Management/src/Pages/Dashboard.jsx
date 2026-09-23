import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../Components/DashboardLayout'

const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(!token){
      navigate('/login')
    }
  },[])



  return (
   <>
    <DashboardLayout/>
   
   </>
  )
}

export default Dashboard