import { useState } from 'react'
import LoginSignup from './LoginSignup'
import './login.css'

const Login = () => {
    const [login, setLogin] = useState(false)

    return (
        <div className='login-wrapper'>
            <div className='Login'>
                <div className="login-navbar">
                    <img src="/assets/loginLogo.svg" alt="" />
                    <div className="login-btn" onClick={()=>setLogin(true)}>
                        LOG IN
                    </div>
                </div>
                <LoginSignup login={login} setLogin={setLogin}/>
            </div>
            <div className="login-vission">
                <img src="/assets/bulb.svg" alt="" />
                <h1>OUR VISION</h1>
                <hr />
                <p>Our advocates strives to be a multi skill knowledge based law firm, driven by ethics and human values, delevering excellence and value in the field of legal service</p>
            </div>
            <div className="login-mission">
                <img src="/assets/missionImg.svg" alt="" />
                <h1>OUR MISSION</h1>
                <hr />
                <p>Our mission is to be the most preffered law firm within the indian market, providing:</p>
                <p>Clients with qualitative and innovative professional advice in atime bound and cost effective manner</p>
                <p>Attorneys with a conductive environment for all ground growth and deveopment</p>
            </div>
        </div>
    )
}

export default Login
