import { useState } from 'react'
import './documents.css'
import {AiFillCamera, AiFillCreditCard, AiFillIdcard, AiOutlineUser} from "react-icons/ai"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userActions } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'

const Documents = () => {
  const [file, setFile] = useState(null)
  const [license, setLicense] = useState(null   )
  const [gender, setGender] = useState('')
  const [userInfo, setUserInfo] = useState({
    first_name:"",
    last_name:"",
    email:"",
    number:"",
    birth_date:"",
    city:"",
    state:"",
    zipcode:"",
    gender:`${gender}`,
    adhar_number:"",
    is_agent:1,
  })

  const dispatch = useDispatch();
  const navigate = useNavigate()

const data = new FormData();
userInfo.profile_pic && data.append('profile_pic',userInfo.profile_pic)
userInfo.number && data.append("mobile", userInfo.number);
userInfo.email && data.append("email", userInfo.email);
userInfo.birth_date && data.append("birth_date", userInfo.birth_date);
userInfo.city && data.append("address", userInfo.city);
userInfo.gender && data.append("gender", userInfo.gender);
userInfo.adhar_number && data.append("adhar_number", userInfo.adhar_number);
userInfo.advocate_license && data.append("advocate_license", userInfo.advocate_license);
userInfo.zipcode && data.append("zipcode", userInfo.zipcode);
userInfo.city && data.append('city',userInfo.city)
userInfo.state && data.append("state",userInfo.state)
userInfo.last_name && data.append('last_name',userInfo.last_name)
userInfo.first_name && data.append('first_name',userInfo.first_name)
userInfo.is_agent && data.append('is_agent',userInfo.is_agent)

  const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload= ()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror = (error)=>{
        reject(error)
      }
    })
  }

  const handleImage = async (e) =>{
    if(e){
    setFile(e)
    let Newfile = await convertBase64(e)
    userInfo.profile_pic = Newfile.split(",")[1]
    }else{
      console.log("no file selected")
    }
  }

  const handleLicense = async (e) =>{
    if(e){
    let NewFile = await convertBase64(e)
    userInfo.advocate_license = NewFile.split(",")[1]
    }else{
      console.log("no file selected")
    }
  }

  const handleChange = (e) =>{
    const {value , name} = e.target;
    setUserInfo(()=>{
      return {...userInfo , [name]:value}
    })
  }

  const handleSubmit = async () =>{
    try{
      await fetch(`https://api.theonlineattorney.in/api/v1/profile/`,{
        method:"POST",
        headers:{
          Authorization:`Bearer ${JSON.parse(localStorage.getItem("loginKey"))}`
        },
        body:data
      }).then((response)=>response.json()).then((data)=>{
        console.log(data)
        if(data.status === true){
      dispatch(userActions(data.data))
      navigate('/requests')
        }
      }
      )
    }catch(err){
      console.log(err)
    }
  }

  const handleGender = (e) =>{
    setGender(e.target.value)
    userInfo.gender = e.target.value;
  }

  return (
    <div className='documents'>
      <div className="documents-header">
      <img src="/assets/logo2.svg" alt='logo'></img>
      </div>
      <div className="document-bottom">
        <h1>SUBMIT DOCUMENT</h1>
        <hr></hr>
        <p>we need to verify your information please submit your documents below to sign up</p>
        <div className="personal-details-title">
          <AiOutlineUser className='AiOutlineUser' />
          <b>Personal Details</b>
        </div>
        <div className="documents-img">
          <img src={file && URL.createObjectURL(file)}alt="" />
          <label htmlFor='inp'>
          <AiFillCamera className='doc-AiFillCamera'/>
          <input type='file' id='inp' style={{display:"none"}}  onChange={(e)=>handleImage(e.target.files[0])}></input>
          </label>
        </div>
      </div>
      <div className="documents-inputs">
        <div className="docs-info">
          <b>First Name</b>
          <input type="text" name='first_name' placeholder='first name' onChange={handleChange}/>
        </div>
        <div className="docs-info">
          <b>Last Name</b>
          <input type="text" name='last_name' placeholder='Last Name' onChange={handleChange}/>
        </div> <div className="docs-info">
          <b>Email Id</b>
          <input type="text" name='email' placeholder='Email Id' onChange={handleChange}/>
        </div> <div className="docs-info">
          <b>Number</b>
          <input type="text" name='number' placeholder='Number' onChange={handleChange}/>
        </div> 
        <div className="docs-info">
          <b>Date Of Birth</b>
          <input type="date" name='birth_date' placeholder='Date Of Birth' onChange={handleChange}/>
        </div>
        <div className="docs-info">
          <b>City</b>
          <input type="text" name='city' placeholder='City' onChange={handleChange}/>
        </div>
        <div className="state-zipcode">
        <div className="zip-code-info">
          <b>State</b>
          <input className='state' name='state' type="text" placeholder='State' onChange={handleChange}/>
        </div>
        <div className="zip-code-info">
          <b>Zip</b>
          <input className='zip' name='zipcode' type="text" placeholder='Zip' onChange={handleChange}/>
        </div>
        </div>
        <div className="docs-gender">
          <b>Gender</b>
          <div className="doc-user-gender">
            <input className={gender==="male" ? 'gender-bg' : ""} defaultValue="male" onClick={handleGender}></input>
            <input defaultValue="female" className={gender==="female" ? "gender-bg" : ""} onClick={handleGender}></input>
          </div>
        </div>

        <div className="license">
          <p><AiFillIdcard className='AiFillIdcard'/> <b>Advocate License Verification</b></p>
          <span>upload both side photo of your Advocate license</span>
          <label htmlFor='inp2'>
          <div className='DOCS-BTN-IMG-UPLOAD'>Upload Image</div >
          <input type='file' id='inp2' style={{display:"none"}} onChange={(e)=>handleLicense(e.target.files[0])}></input>
          </label>
        </div>

        <div className="kyc">
        <p><AiFillCreditCard className='AiFillIdcard'/> <b>Advocate License Verification</b></p>
        <input type='text' name='adhar_number' placeholder='enter Adhar Number' onChange={handleChange}/>
        <button className='SIGN-UP' onClick={handleSubmit}>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default Documents
