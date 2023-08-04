import './chats.css'
import ChatsSidebar from '../chatsidebar/ChatsSidebar'
import { BsPaperclip } from 'react-icons/bs'
import {PiPaperPlaneRightFill} from "react-icons/pi"
import Message from './Message'
import { AiFillInfoCircle, AiFillPhone, AiFillVideoCamera } from 'react-icons/ai'

const Chats = () => {
  return (
    <div className='Chats'>
      <ChatsSidebar />
      <div className="chats-wrapper">
        <div className="chats-nav">
          <div className="chats-nav-left">
            <img src="/assets/onlineImages/online3.svg" alt=''></img>
            <div className="chats-nav-user-info">
              <b className="user-name-chats">Robert David</b>
              <p className="chats-online-status">online
              <div className="online-dot"></div>
              </p>
            </div>
          </div>
          <div className="chats-nav-mid">
            <span className="countdown">00:00:09</span>
            <span className="stop">stop</span>
          </div>
          <div className="chats-nav-right">
            <AiFillPhone />
            <AiFillVideoCamera />
            <AiFillInfoCircle className='AiFillInfoCircle' />
          </div>
        </div>
        <div className="user-chats-wrapper">
            <div className="user-chats">
            <Message own={true} />
            <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message />
                <Message own={true} />
                <Message own={true} />
                <Message />
                <Message />
                <Message own={true} />
                <Message />

            </div>
            <div className="message-type">
                <BsPaperclip className='clip'/>
                <input type='text' placeholder='type your message here...'></input>
                <PiPaperPlaneRightFill className='msg-send-btn'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chats
