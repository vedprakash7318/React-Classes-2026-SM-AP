import React from 'react'
import './CSS/Header.css'
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import {NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <>
        <div className="header-top-outer">
          <span>Support</span>
          <span>Offer</span>
          <span>Become a Vendor</span>
          <span>Corporate Tie-ups</span>
          <span>+91 6307275065</span>
        </div>
        <div className="header-main-outer">
          <div className="logo">
            <img src="/images/logo.webp" alt="logo" />
          </div>
          <div className="search-outer">
              <input type="search" placeholder='Search Flower,Cake,Gifts etc' className='header-seach-input'/>
              <div className="search-icon"><FaSearch/></div>
          </div>
          <div className="header-btns">
            <div className="header-login-btn">
              <IoPerson size={22}/>
              <span>Login/Signup</span>
            </div>
            <div className="header-cart-btn">
              <IoCartSharp size={22}/>
              <span className='header-cart-count'>0</span>
              <span>Items</span>
            </div>
          </div>
        </div>
        <div className="header-bottom-menu">
          <ul>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/'><FaHome size={18}/></NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/shop'>Shop</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/flowers'>Flowers</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/gallery'>Gallery</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/about'>About</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to='/contact'>Contact</NavLink>
          </ul>
        </div>





    </>
  )
}

export default Header