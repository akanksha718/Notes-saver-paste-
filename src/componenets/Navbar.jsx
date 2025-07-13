import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/pastes" className="nav-link">Pastes</NavLink>
    
    </div>
  )
}

export default Navbar
