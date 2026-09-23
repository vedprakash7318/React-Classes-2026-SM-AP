import React, { useState } from 'react'
import './CSS/dashboardLayout.css'
const DashboardLayout = () => {
  const [isClose,setIsClose] = useState(false)
  const handleSidebar=()=>{
    setIsClose(!isClose)
  }
  return (
   <>
    <div className="dashboardLayout-container">
      <div className={`sidebar ${isClose? "sidebar-close": ""}`}></div>
      <div className="dashboardLayout-main">
        <div className="dashboardLayout-header">
          <button onClick={handleSidebar}>X</button>
        </div>
        <div className="dashboardLayout-content">
         
        </div>
      </div>
    </div>
   
   
   </>
  )
}

export default DashboardLayout