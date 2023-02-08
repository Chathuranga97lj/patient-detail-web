import React from 'react'
import './navbar.css'
import { BsSearch } from 'react-icons/bs';




function Navbar(){
  return (
    
    <nav className='nav'>
        <div className='set_1'>
        <a>Home</a>
        <a>Doctor</a>
        <a>Channels</a>
        </div>


        <input id="search" type={"text"} placeholder={BsSearch}></input>
        

        <div className='set_2'>
        <p>Ariya Labs PVT(LTD)</p>
        </div>
    </nav>
  )
}

export default Navbar