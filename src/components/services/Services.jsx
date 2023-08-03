import './services.css'
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import {useEffect, useState } from 'react'
import Service from './Service'
import axios from 'axios'

const Services = () => {
    const[show, setShow] = useState(false)
    const[services, setServices] = useState([])

    useEffect(()=>{
      const getServices = async() =>{
        try{
          const response = await axios.get(`https://api.theonlineattorney.in/api/v1/service/`,{
            headers:{
              "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("loginKey"))}`
            }
          })
          setServices(response.data)
          // console.log("https://api.theonlineattorney.in/" + response.data[2].service_icon.split('/')[1])
          console.log(response.data)
        }catch(err){
          console.log(err)
        }
      }
      getServices()
    },[])


  return (
    <>
    <Navbar />
    <div className='Services'>  
    <Sidebar />
    <div className="services-container">
    <div className={show ? "services-wrapper cent" :"services-wrapper"}>
      <div className="services-header">
        <div className="services-header-top">
          <div className="div">
          <h1>YOUR SERVICES</h1>
          <hr></hr>
          </div>
    {!show &&<button onClick={()=>setShow(!show)}>Edit</button>}
        </div>

        <div className="services-header-bottom">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium excepturi ab atque quisquam nemo dolores tempore recusandae blanditiis ipsum aliquam!</p>
        </div>
      </div>
      <div className="services-mid">
        {
          services.map((s)=><Service s={s} key={s.id}/>)
        }
      </div>
      <div className="services-bottom">
          <div className="div">
          <h1>YOUR ADDITIONAL SERVICES</h1>
          <hr></hr>
          </div>
    {!show &&<button onClick={()=>setShow(!show)}>Edit</button>}
        </div>

        <div className="services-mid">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>

    </div>
    {
    show && 
    <div className="new-services">
      <div className="added-services">
      <p>Add Services</p>
      <ul>
        <li><img src='/assets/check5.jpg' alt=''/>
         Sexual Offences</li>
        <li><img src='/assets/check5.jpg' alt=''/> Bail</li>
        <li><img src='/assets/check5.jpg' alt=''/> Internet Crimes</li>
        <li><img src='/assets/check5.jpg' alt=''/> Domestic VOilence</li>
      </ul>
      </div>
      <div className="add-more">
        <p>Add More Services</p>
        <ul>
        <li><img src='/assets/check4.png' alt=''/> Firearm & Weapon</li>
        <li><img src='/assets/check4.png' alt=''/> Assault & Threads</li>
        <li><img src='/assets/check4.png' alt=''/> Property, Fraud & Theaft</li>
        <li><img src='/assets/check4.png' alt=''/> Appeals</li>
        <li><img src='/assets/check4.png' alt=''/> Drug Offence</li>
        <li><img src='/assets/check4.png' alt=''/> Youth Charges</li>
      </ul>
      </div>
    <button onClick={()=>setShow(!show)}>Done</button>
    </div> //make it position sticky
    }
    </div>
    </div>
    </>
  )
}

export default Services
