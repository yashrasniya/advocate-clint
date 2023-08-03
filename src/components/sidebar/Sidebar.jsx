import { Link, useLocation, useNavigate} from 'react-router-dom'
import './sidebar.css'
import {AiOutlineLogout} from "react-icons/ai"
import {BsAlarm, BsCircle} from "react-icons/bs"
import {BsWallet2} from "react-icons/bs"
import {BsStars} from "react-icons/bs"
import {FaHandHoldingHeart} from "react-icons/fa"
import {GiWallet} from "react-icons/gi"
import {BsHeadphones} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {BsQuestion} from "react-icons/bs"
import {FaArrowRight} from "react-icons/fa"

const Sidebar = () => {

  const navigate = useNavigate()
  const {pathname} = useLocation()


 const setClass = (name) =>{
  if(name === pathname){
    return "list-item-bg"
  }else{
    return "list-item"
  }
  }

  const handleClick = () =>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className='Sidebar'>
      <ul className='list-items'>
        <Link to="/requests"><li  className={setClass('/requests')}> <BsAlarm />Appointment</li></Link>

        <Link to="/wallet"><li className={setClass('/wallet')}><BsWallet2 /> My Wallet</li></Link>

        <Link to="/reviews"><li className={setClass('/reviews')}><BsStars />Your Reviews</li></Link>

        <Link to="/services"><li className={setClass('/services')}><FaHandHoldingHeart /> My Services</li></Link>

        <Link to="/payment"><li className={setClass('/payment')}><GiWallet /> Payments</li></Link>

        <Link to="/firm"><li className={setClass('/firm')}><BsHeadphones /> Help & Support</li></Link>

        <Link to="/editprofile"><li className={setClass('/editprofile')}><BsPerson /> Edit Profile</li></Link>

        <Link to="/about"><li className={setClass('/about')}><BsCircle /> About Us</li></Link>
        
        <button onClick={handleClick}><AiOutlineLogout /> Log Out</button>
      </ul>
    </div>
  )
}

export default Sidebar
