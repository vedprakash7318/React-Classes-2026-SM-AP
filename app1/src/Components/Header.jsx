import React from 'react'
import './CSS/Header.css'
const Header = () => {
  return (
    <>
      <div className="header-outer">
        <img src="logo.png" alt="logo" className='header-logo' />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button>Login</button>
      </div>
    
    </>
  )
}

export default Header