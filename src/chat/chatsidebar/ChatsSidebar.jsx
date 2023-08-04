import './chatsidebar.css'
import {AiOutlineArrowLeft} from "react-icons/ai"

const ChatsSidebar = () => {
  return (
    <div className='ChatsSidebar'>
        <div className="chatside-nav">
            <AiOutlineArrowLeft />
            <div className="msg-nav-serach">
                <input type="text" placeholder='serach...'/>
            </div>
        </div>
        <div className="chatside-bottom">
            <p>Recents</p>
           <ul className='chats-lists'>

           <li>
                <div className="msg-list-left">
                    <img src="/assets/onlineImages/online1.svg" alt="" />
                    <div className="msg-recent-info">
                        <b>Robert-David</b>
                        <span className='msg-recent-info-span'>Typing</span>
                    </div>
                </div>
                <div className="msg-list-right">
                    <span className='msg-list-right-time'>new</span>
                </div>
            </li>

            <li>
                <div className="msg-list-left">
                    <img src="/assets/onlineImages/online3.svg" alt="" />
                    <div className="msg-recent-info">
                        <b>Robert-David</b>
                        <span className='msg-recent-info-span'>welcome</span>
                    </div>
                </div>
                <div className="msg-list-right">
                    <span className='msg-list-right-time'>today</span>
                </div>
            </li>

            <li>
                <div className="msg-list-left">
                    <img src="/assets/onlineImages/person2.svg" alt="" />
                    <div className="msg-recent-info">
                        <b>Robert-David</b>
                        <span className='msg-recent-info-span'>last message</span>
                    </div>
                </div>
                <div className="msg-list-right">
                    <span className='msg-list-right-time'>22/08</span>
                </div>
            </li>

            <li>
                <div className="msg-list-left">
                    <img src="/assets/onlineImages/person3.svg" alt="" />
                    <div className="msg-recent-info">
                        <b>Robert-David</b>
                        <span className='msg-recent-info-span'>sure</span>
                    </div>
                </div>
                <div className="msg-list-right">
                    <span className='msg-list-right-time'>10/06</span>
                </div>
            </li>

           </ul>
        </div>
    </div>
  )
}

export default ChatsSidebar
