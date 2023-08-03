import './reviews.css'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import Review from './Review'
import { useSelector } from 'react-redux'

const Reviews = () => {

  const review = useSelector((r)=>r.userReducer.payload.reviews
  )
  console.log(review)
  return (
    <>
    <Navbar />
        <div className='Reviews'>
            <Sidebar />
      <div className="reviews-wrapper">
        <div className="reviews-container">
            <h2 className='total-reviews'>REVIEWS({review.length})</h2>
            {
              (review.length > 0) ?
              review.map((r)=><Review r={r} key={r.id}/>)
              :
              <p style={{color:"grey"}}> " you don't have any reviews yet ! "</p>
            }
        </div>
      </div>
      </div>
    </>
  )
}

export default Reviews
