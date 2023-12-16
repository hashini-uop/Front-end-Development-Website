import React, { useState } from 'react'
import logo from '../../assests/Images/White Logo.png'
import './navbar.css'
import toggle from '../../assests/Images/1000_F_225221877_9x7repcZzz4ryhvZ4Z5DmlnnCTdTUImT.jpg'

const Menu = () => {
  <>
  <p><a href="#services">Services</a></p>
  <p><a href="#aboutus">About US</a></p>
  <p><a href="#contactus">Contact Us</a></p>
  <p><a href="#careers">Careers</a></p>
  </>
}




export default function Navbar() {
  const[toggleMenu, setToggleMenu] = useState('false')
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <p><a href="#services">Services</a></p>
          <p><a href="#aboutus">About US</a></p>
          <p><a href="#contactus">Contact Us</a></p>
          <p><a href="#careers">Careers</a></p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <img src={toggle}  width = '20px' height='20px' onClick={() => setToggleMenu(false)}/>
          : <img src={toggle}  width = '20px' height='20px' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container_links'>
              <Menu />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
