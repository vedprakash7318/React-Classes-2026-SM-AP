import React from "react";
import './Css/Header.css'
const Header =()=>{
    return(
        <>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </>
    )
}

export default Header