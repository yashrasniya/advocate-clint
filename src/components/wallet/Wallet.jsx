import './wallet.css'
import Navbar from "../Navbar/Navbar"
import Sidebar from '../sidebar/Sidebar'
import { AiOutlineWallet } from "react-icons/ai"

const Wallet = () => {
  return (
    <div className='wallet-wrapper'>
        <Navbar />
        <div className="wallet-container">
            <Sidebar />
            <div className="wallet">
                <div className="wallet-element">
                    <div className="ballence">
                        <AiOutlineWallet className='AiOutlineWallet' />
                        <div className="money">
                            <p style={{color:"#c79128",fontSize:"19px"}}>Wallet Balance</p>
                            <h1 style={{fontSize:"44px"}}>$100</h1>
                        </div>
                    </div>
                    <hr className='wallet-hr'></hr>
                    <div className="wallet-bottom">
                        <div className="wallet-left">
                            <img src='/assets/wallet.svg' alt=''></img>
                        </div>
                        <div className="wallet-right">
                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ullam nostrum unde optio eius quos deleniti corrupti sapiente non, reiciendis ut. Itaque quisquam totam, ab dolores maxime molestiae cupiditate rem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magni.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ullam nostrum unde optio eius quos deleniti corrupti sapiente non, reiciendis ut. Itaque quisquam totam, ab dolores maxime molestiae cupiditate rem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore reprehenderit numquam pariatur optio illo, dicta rem aspernatur cupiditate at tempore ullam commodi praesentium fuga, eius porro ex odio natus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet
