import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
<div>
            <img src={m} alt="" />


            <ul>
                <NavLink>
                    <li> HOME</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li> ALL DOCTORS </li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>ABOUT </li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li> CONTACT</li>
                    <hr />
                </NavLink>
            </ul>
            <div>
                <button>Create account</button>
            </div>
        </div>
  )
}

export default Navbar
