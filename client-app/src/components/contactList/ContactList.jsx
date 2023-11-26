import React from 'react'
import { useState } from 'react'
import UserProfile from "../../assets/userprofile.png"

export default function ContactList() {
    const[isListVisible,setListVisible] = useState(false)
    const toggleListVisibility = ()=>{
        setListVisible(!isListVisible)
    };
  return (
    <div className="contact-container">
        <div className="header">
            <div className="title">Contact</div>
        </div>
        <div className="sgt-freinds">
        <div className="title">
            <span>You might know</span>
            <span onClick={toggleListVisibility}>
                <i class= {isListVisible ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'}></i>
            </span>
        </div>
        {isListVisible && (
        <ul>
          <li>
          <div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <h3 className='userName'>Rida Lamiini</h3>
                             </div>
                             <div className="send-btn">Send Invitation</div>
                          </div>
          </li>
          <li><div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <h3 className='userName'>Rida Lamiini</h3>
                             </div>
                             <div className="send-btn">Send Invitation</div>
                          </div></li>
          <li><div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <h3 className='userName'>Rida Lamiini</h3>
                             </div>
                             <div className="send-btn">Send Invitation</div>
                          </div></li>
        </ul>
      )}
        </div>
    </div>
  )
}
