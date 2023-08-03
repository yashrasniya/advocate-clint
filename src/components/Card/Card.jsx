// import React, { useState } from 'react'
import "./card.css"
import { BsCheck2Circle, BsClock, BsFillInfoCircleFill } from "react-icons/bs"

const Card = ({setInfo, info, setAccept, accept}) => {

    return (
        <>
        <div className="request-card-container">
            <div className='card-wrapper'>
                <div className="card-left">
                    <div className="card-left-top">
                        <b>Appointment Request</b>
                        <span><BsClock/> {new Date().toLocaleDateString() +" " + new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className="card-left-mid">
                        <img src="/assets/lawerImg.svg" alt="" />
                        <div className="lawer-details">
                            <b>priyakhi sikia</b>
                            <span>new Delhi, India</span>
                        </div>
                    </div>
                </div>
                <div className="card-right">
                    <div className="card-right-top">
                        <span className="rate">Charge</span>
                        <b className="price">$100/min</b>
                    </div>
                    <span><BsFillInfoCircleFill className="BsFillInfoCircleFill" onClick={()=>setInfo(!info)} /></span>
                </div>
            </div>
            <div className="navigations">
                {
                    accept ?
                    <span className="BsCheck2Circle"><BsCheck2Circle style={{fontSize:"26px",backgroundColor:"limegreen",borderRadius:"50%",color:"white"}}/> Accepted</span>
                    :
                    <>
                    <button className="accept" onClick={()=>setAccept(!accept)}>ACCEPT</button>
                    <button className="decline">DECLINE</button>
                    </>
                }
            </div>
            </div>
        </>
    )
}

export default Card
