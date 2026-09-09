import React from 'react'
import './CSS/DashboardLayout.css'
import { IoCloseSharp } from "react-icons/io5";
import { RiAccountCircleFill, RiLogoutBoxLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const DashboardLayout = ({children}) => {
  const handleLogout=()=>{
    alert("Hello Logout")
  }
  return (
    <>
      <div className="dashboardLayout-outer">

      <div className="dashboardLayout-sidebar">
          <div className="sidebar-top">
          <div className="sidebar-logo">
            <h1>Dashboard</h1>
          </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li><NavLink to='/dashboard' className={({isActive})=>`navLink ${isActive}?"active" : ""`}>Dashboard</NavLink></li>
              <li><NavLink to='/products' className={({isActive})=>`navLink ${isActive}?"active" : ""`}>Products</NavLink></li>
              <li><NavLink to='/orders' className={({isActive})=>`navLink ${isActive}?"active" : ""`}>Orders</NavLink></li>
              <li><NavLink to='/users' className={({isActive})=>`navLink ${isActive}?"active" : ""`}>Users</NavLink></li>
              <li><NavLink to='/contacts' className={({isActive})=>`navLink ${isActive}?"active" : ""`}>Contacts</NavLink></li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <button onClick={handleLogout}><RiLogoutBoxLine />Logout</button>
          </div>
      </div>

      <div className="dashboardLayout-main">
        <div className="dashboardLayout-header">
            <div className="header-first">
              <div className="sidebar-close-btn">
                <IoCloseSharp/>
              </div>
              <h1>Welcome Back Admin!</h1>
            </div>
            <div className="dashboardLayoutAdmin">
              <RiAccountCircleFill/>
              <span>Admin</span>
              <IoIosArrowDown/>
            </div>
        </div>
        <div className="dashboardLayout-content">
          {children}
        </div>  
      </div>

      </div>
    
    </>
  )
}

export default DashboardLayout