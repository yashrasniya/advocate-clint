import './chats.css'

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="message-left">
            <img src="/assets/onlineImages/online3.svg" alt="" />
        </div>
        <div className="message-right">
            <p className='currentuser-MSG'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur numquam animi odit?
            </p>
            <p className='msg-time'>{new Date().toLocaleTimeString()}</p>
        </div>
    </div>
  )
}

export default Message
