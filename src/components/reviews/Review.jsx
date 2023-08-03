import React from 'react'
import {AiFillStar} from "react-icons/ai"

const Review = ({r}) => {
  return (
    <div className='Review'>
      <div className="review-info">
        <div className="review-info-left">
            <h2 className='review-usernaem'>{r?.user}</h2>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
        <div className="stars">
          {
            new Array(r.rating).fill(r.rating).map((r,i)=><AiFillStar key={i}/>)
          }
        </div>
      </div>
      <div className="user-review">
        <h2>{r?.review_title}</h2>
        <p>{r.review}</p>
        <hr></hr>
      </div>
    </div>
  )
}

export default Review