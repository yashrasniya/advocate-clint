import "./editprofile.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import {AiFillCamera} from "react-icons/ai"
import { useState } from "react";


const EditProfile = () => {
    const [gender, setGender] = useState()

  return (
    <>
    <Navbar />
    <div className='editprofile'>
        <Sidebar />
        <div className="editprofile-wrapper">
            <div className="editprofile-container">
                <div className="heading">
                    <h1>Edit Profile</h1>
                </div>
                <div className="profile-img-cont">
                <img src="/assets/profile-img.svg" alt="" />
                <AiFillCamera className="AiFillCamera"/>
                </div>
                <div className="editprofile-bottom">
                    <div className="edit-feild">
                        <b>First Name</b>
                        <input type="text"></input>
                    </div>
                    <div className="edit-feild">
                        <b>Last Name</b>
                        <input></input>
                    </div>
                    <div className="edit-feild">
                        <b>Email</b>
                        <input></input>
                    </div>
                    <div className="edit-feild">
                        <b>City</b>
                        <input></input>
                    </div>
                    <div className="edit-feild">
                        <b>First Name</b>
                        <input></input>
                    </div>
                    <div className="state-zip">
                        <div className="state">
                            <b>State</b>
                            <input></input>
                        </div>
                        <div className="state">
                            <b>Zip</b>
                            <input></input>
                        </div>
                    </div>
                    <div className="edit-feild">
                        <b>Gender</b>
                    <div className="gender">
                        <input className={gender==="MALE" ? "gender-bg" : ""} defaultValue={"MALE"} onClick={(e)=>setGender(e.target.value)}></input>
                        <input className={gender==="FEMALE" ? "gender-bg" : ""} defaultValue={"FEMALE"} onClick={(e)=>setGender(e.target.value)}></input>
                    </div>
                    </div>
                    <div className="edit-feild">
                        <b>Bio</b>
                        <textarea rows={7} cols={7} placeholder="write here"></textarea>
                    </div>
                    <button className="save" onClick={()=>console.log(gender)}>SAVE</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default EditProfile

