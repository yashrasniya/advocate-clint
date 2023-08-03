import React from 'react'
import "./infocard.css"

const InfoCard = () => {
  return (
    <div className='infocard-wrapper'>
    <div className='infoCard'>
     <div>
     <img src='/assets/carddemo.svg' alt='card-demo'></img>
      <div className='infocard-title'>
      <p>View the card to see more in details</p>
      <span>Aceept and start your new case</span>
      </div>
     </div>
      </div>
      </div>
  )
}

export default InfoCard
