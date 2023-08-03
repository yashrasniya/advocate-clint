import './notification.css'
import Navbar from "../Navbar/Navbar"
import Sidebar from '../sidebar/Sidebar'
import {AiOutlineBell} from "react-icons/ai"
import Notice from './Notice'
import { useState } from 'react'

const Notification = () => {
    const [read, setRead] = useState(true)
  return (
    <>
    <Navbar />
    <div className='notification-warpper'>
      <Sidebar />
      <div className="notifications">
        <div className="notifications-header">
            <AiOutlineBell className='bell' />
            <b>Notifications</b>
        </div>
        <Notice />
        <Notice />
        <Notice read={read}/>

      </div>
    </div>
    </>
  )
}

export default Notification
