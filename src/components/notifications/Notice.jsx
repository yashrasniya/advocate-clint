import './notification.css'
import {ImClock, ImCross} from "react-icons/im"

const Notice = ({read}) => {
  return (
    <div className='notifi'>
      <div className="notifi-top">
        <div className="top-left">
            <ImCross className='cross' />
            <span className={read ? "subject read" : "subject"}>Joined new Advocate</span>
        </div>
        <div className="top-right">
            <ImClock />
            <sapn>{new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString()}</sapn>
        </div>
      </div>
      <div className="notifi-bottom">
        <b>New Registeration</b>
        <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deserunt sequi quaerat, consequatur blanditiis expedita assumenda voluptatem praesentium quam consectetur.</p>
      </div>
    </div>
  )
}

export default Notice
