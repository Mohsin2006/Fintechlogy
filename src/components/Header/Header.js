import React from 'react'
import "./Header.css"
import logo1 from "../../Images/logo1.jpeg"

const Header = () => {
  return (
    <div className='header'>
      <img src={logo1} alt='' style={{width:"35%", height:"130px"}}/>
    </div>
  )
}

export default Header
