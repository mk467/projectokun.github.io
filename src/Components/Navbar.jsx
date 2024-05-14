import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Logo'>
            <img className='logoImage' src="src\assets\imgs\iimg.jpg" width="100%" height="100%" onMouseDown={console.log("clicked it")}/>
        </div>
        <div className="navlinks">
            <Link className='navlink' to="/">Home</Link>
            <Link className='navlink' to="/Contact">Contact</Link>
            <Link className='navlink' to="/Product">Product</Link>
            <Link className='navlink' to="/About">About</Link>
            <Link className='navlink' to="/Support">Support</Link>
        </div>
        <div className="SignUp">
            <Link className='Sign' to="/SignUp">Sign Up</Link>
        </div>
    </div>
  )
}
