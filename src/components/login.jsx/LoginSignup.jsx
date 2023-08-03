import { useRef, useState } from "react"
import "./login.css"
import { AiOutlineClose } from "react-icons/ai"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginSignup = ({ login, setLogin }) => {
    const [showOtp, setShowOtp] = useState(false)
    const [loginData, setLoginData] = useState({})
    const mobref = useRef();
    const opt1 = useRef()
    const opt2 = useRef()
    const opt3 = useRef()
    const opt4 = useRef()
    const nameRef = useRef();

    const navigate = useNavigate()


    const handleLoginSignUp = async () => {
        if (mobref.current.value.maxLength === 9 || nameRef.current.value.maxLength >= 2) {
            alert("name or number is not valid !")
        } else {
            loginData.mobile = mobref.current.value
            login ? loginData.used_for = `login` : loginData.used_for = `${process.env.REACT_APP_PURPOSE}`
            loginData.is_agents = "1"
            try {
                const response = await axios.post(`https://api.theonlineattorney.in/api/v1/validate-phoneno/`, loginData)
                if (response.data.status === true) {
                    setShowOtp(true)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleClick = async () => {
        const otpValue = `${opt1.current.value}${opt2.current.value}${opt3.current.value}${opt4.current.value}`

        try {
            const response = await axios.post(`https://api.theonlineattorney.in/api/v1/validate-otp-phoneno/`, { ...loginData, otp_sent: otpValue })
            localStorage.setItem("loginKey", JSON.stringify(response.data.token.access))
            if(response.status === 202){
                login ? navigate('/requests') : navigate('/documents')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className='LoginSignup'>
                <div className="number">
                    <h2>Mobile No</h2>
                    <div className="input-div">
                        <b>+91 IND</b>
                        <input type="text" placeholder='enter mobile number' ref={mobref} />
                    </div>
                </div>
                <div className="name">
                    <h2>Name</h2>
                    <div className="input-div">
                        <input type="text" placeholder='enter mobile number' ref={nameRef} />
                    </div>
                </div>
                <div className="signup">
                    <button onClick={handleLoginSignUp}>{login ? "Log In" : "Sign Up"}</button>
                    <div className="t-c">
                        <input type="checkbox" />
                        <div className="conditions">
                            <p className='condition'>{login ? "dont't have an account ?" : "i agree the terms & conditions"}</p>
                            {login ? <span className="signin" onClick={() => setLogin(false)}>SIGN UP</span> : <p className='condition singin'>Login</p>}
                        </div>
                    </div>
                </div>
            </div>

            {showOtp && <div className="otp-container">
                <div className="otp-image">
                    <img src="/assets/loginLogo.svg" alt="" />
                    <h2 className="otp-info">Consult lawers online instantly with the online atterny</h2>
                </div>
                <div className="otp-contant">
                    <div className="otp-header">
                        <AiOutlineClose className="AiOutlineClose" onClick={() => setShowOtp(false)} />
                        <h1>Enter OTP</h1>
                        <p className="desc">OTP has been sent to your mobile number 916754903765 <a href="">edit</a></p>

                    </div>
                    <div className="bottom">
                        <span>Enter Otp</span>
                        <div className="otp-input-feilds">
                            <input type="tetx" maxLength={1} ref={opt1}></input>
                            <input type="tetx" maxLength={1} ref={opt2}></input>
                            <input type="tetx" maxLength={1} ref={opt3}></input>
                            <input type="tetx" maxLength={1} ref={opt4}></input>
                        </div>
                    </div>
                    <button className="Verify-OTP" onClick={handleClick}>Verify OTP</button>
                </div>
            </div>}
        </>
    )
}

export default LoginSignup
