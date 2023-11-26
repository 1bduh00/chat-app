import React from 'react'
import MessagesContent from "../../components/messages/Messages"
import UserProfile from "../../assets/userprofile.png"
import "../chat/messagesBlock.css"

export default function MessagesBlock() {
  return (
    <div class="container main">
      <MessagesContent></MessagesContent>
    {/* <!--v header section starts      --> */}
      <div className="chat-app">

    
        <div class="msg-header">
            <div className="profile-info">
              <img src={UserProfile} alt="" />
              <div class="user-details">
                  <h2>John Doe</h2>
                  <p>Last seen: 10 minutes ago</p>
              </div>
            </div>
         </div> 
{/* <!-- Message header section ends --> */}

{/* <!-- Chat inbox section starts --> */}
         
        <div class="chat-page">

            <div class="msg-inbox">
                <div class="chats">
                     <div class="msg-page">
                          {/* <!-- Contains the incoming and outgoing messages --> */}
                          <div className="incoming-msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <p>Hello there!</p>
                                <span className="msg-time">12:30 PM</span>
                             </div>
                          </div>
                          <div className="outgoing-msg">
                            <div className="msg-bubble">
                                <p>Hi! How can I help you?</p>
                                <span className="msg-time">12:35 PM</span>
                             </div>
                             <img className='user-photo' src= {UserProfile} alt="" />
                          </div>
                          <div className="incoming-msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <p>Hello there!</p>
                                <span className="msg-time">12:30 PM</span>
                             </div>
                          </div>
                          <div className="outgoing-msg">
                            <div className="msg-bubble">
                                <p>Hi! How can I help you?</p>
                                <span className="msg-time">12:35 PM</span>
                             </div>
                             <img className='user-photo' src= {UserProfile} alt="" />
                          </div>
                      </div> 
                </div>
                
{/* <!--  Message bottom section starts --> */}
        <form >
            <div className="col">
              <label for="input" class="visually-hidden">Input</label>
              <input type="text" className='form-control' id='input' placeholder='Write Message Here' />
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary mb-3">Send</button>
            </div>
        </form>
                
{/* <!-- Message bottom section ends. --> */}
            </div>
        </div>
      </div>
    </div>
  )
}
