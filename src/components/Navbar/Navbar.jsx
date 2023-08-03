import React from 'react'
import "./navbar.css"
import {FiMail} from "react-icons/fi"
import {BsBell} from "react-icons/bs"
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const userDetails = useSelector((user)=>user.userReducer.payload)
  console.log(process.env.REACT_APP_PF + userDetails?.profile_pic)
  return (
    <div  className='Navbar'>
        <div className='topbar-logo'>
        <img src='/assets/logo2.svg' alt='logo'></img>
      </div>
      <div className='Nav-searchbar'>
        <div className='nav-s'><input type='text' placeholder='search here..' />
        <BsSearch  className='n-BsSearch'/>
        </div>
      </div>
      <div className="topbar-icons">
        <FiMail className='icon' />
        <BsBell className="icon"/>
        <span className='profile-img'>
          <img src={process.env.REACT_APP_PF + userDetails?.profile_pic} alt='profile-img'></img>
        </span>
      </div>
    </div>
  )
}

export default Navbar
