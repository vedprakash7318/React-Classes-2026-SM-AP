import React from "react";
import './Css/Header.css'
import {Link,NavLink} from 'react-router-dom'

const Header =()=>{
    return(
        <>
            <ul className="menu">
                <li><NavLink to='/' className={({isActive})=> `item ${isActive? "active" :""}`}>Home</NavLink></li>
                <li><NavLink className={({isActive})=> `item ${isActive? "active" :""}`} to='/service'>Service</NavLink> </li>
                <li><NavLink className={({isActive})=> `item ${isActive? "active" :""}`} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=> `item ${isActive? "active" :""}`} to="/contact">Contact</NavLink></li>
            </ul>
        </>
    )
}

export default Header