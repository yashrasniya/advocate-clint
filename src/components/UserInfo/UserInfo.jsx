import React, { useState } from 'react'
import "./userinfo.css"
import {FiPhoneCall} from "react-icons/fi"
import {BsChatSquareText} from "react-icons/bs"
import {BsCameraVideo} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import { Link } from 'react-router-dom'


const UserInfo = ({setAccept,accept}) => {


  return (
    <div className='userinfo-wrapper'>
      <div className='userinfo-top'>
        <h1 className='req-date'>10 oct 2022,</h1>
        <h1 className='req-time'>9:30 am</h1>
        <div className='CLIENT-IMG'>
                <img src='/assets/lawerImg.svg' alt='img'></img>
              </div>
      </div>
      <div className='user-PROFILE'>
        <div className='user-PROFILE-wrapper'>
        <div className='USER-CHARGE'><p>charge</p></div>
            <div className='user-NAME-CHARGE'><h1 className='username'>priyankhi saikia</h1>
              <h1 style={{fontWeight:"lighter"}}>100/min</h1>
            </div>
            <div className='USER-CONTACT-INFO'>
              <p className='USER-MOB'>9083240823</p>
              <p className='USER-MAIL' style={{color:"black"}}>priyanka@gmail.com</p>
              <p className='USER-ADRESS'>New Delhi, India</p>
              <p className='USER-GENDER'>Female</p>
            </div>
            <div className='USER-MSG'>
              <div className='USER-MSG-WRAPPER'>
                <p className='USER-MESSAGE' style={{color:"grey",marginBottom:"5px"}}>Message</p>
                <p className='USER-HELLO'>Hello JOHN smith</p>
                <p className='USER-CASE-INFO'>please contact me as soon as possible i need your help in a case . this is report</p>
                <div className='CASE-REPORT'>
                  <b>complete case report</b>
                  <p style={{fontSize:"12px"}}>18 november 2022</p>
                </div>
              </div>
            </div>
          {!accept ? <div className='USER-REQ-OPTIONS'>
              <button className='ACCEPT' onClick={()=>setAccept(!accept)}>ACCEPT</button>
              <button className='DECLINE'>DECLINE</button>
            </div> :
            <div className='U-C-OPTIONS'>
                    <span><FiPhoneCall className='U-C-O' /></span>
                    <span><BsChatSquareText className='U-C-O'/></span>
                    <span><BsCameraVideo className='U-C-O'/></span>
                </div>
}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
