import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './lawers.css'
import axios from 'axios'
import InfoCard from '../InfoCard/Infocard'
import UserInfo from '../UserInfo/UserInfo'
import Card from '../Card/Card'
import { useDispatch} from 'react-redux'
import { userActions } from '../../redux/actions/actions'

const Lawers = () => {
    const[currentuser, setCurrentuser] = useState()
    const [accept, setAccept] = useState(false);
    const [info, setInfo] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
      const loadCurrentUser = async () =>{
        try{
          const response = await axios.get(`https://api.theonlineattorney.in/api/v1/profile/`,{
            headers:{
              "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("loginKey"))}`
            }
          })
          setCurrentuser(response.data)
          dispatch(userActions(response.data))
        }catch(err){
          console.log(err)
        }
      }
      loadCurrentUser()
    },[])

  return (
    <>
    <Navbar />
    <div className='Lawers'>
    <Sidebar />
    <div className='lawers-wrapper'>
      <div className="card-container">
      <div className='p'>
            <p className='welcome-lawer'>welcome back !</p>
            <h1 className='users-name' style={{fontWeight:"500"}}>{currentuser?.gender === "female" ? "Ms." : "Mr."} {`${currentuser?.first_name} ${currentuser?.last_name}`}</h1>
            </div>
              <div className="request-cards">
                <Card setInfo={setInfo} info={info} setAccept={setAccept} accept={accept}/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

              </div>
      </div>
            {/* {
              request.length !==0 && */}
              <div className='card-info'>
              {!info ? <InfoCard /> : <UserInfo accept={accept} setAccept={setAccept}/>}
            </div>
             {/* } */}

      </div>
    </div>
    </>
  )
}

export default Lawers
