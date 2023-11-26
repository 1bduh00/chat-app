import React from 'react'
import UserProfile from'../../assets/msgUser.png'
import '../messages/messages.css'

export default function Messages() {
  return (
    <div id="friends-container">
        <div className="header">
            <div className="title container">
                <div className="cName">Messages</div>
                <div className="add"><i class="ri-add-circle-fill"></i></div>
            </div>
            <hr />
            <div className="search-bar">
            <div className="col">
                <label for="input" class="visually-hidden">Input</label>
                <input type="text" className='form-control' id='input' placeholder='Search Here' />
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary mb-2"><i class="ri-search-2-line"></i></button>
            </div>
            </div>
            <hr />
            <div class="msg-content">
                          {/* <!-- Contains the incoming and outgoing messages --> */}
                          <div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <div className="description">
                                    <h3 className='userName'>Rida Lamiini</h3>
                                    <p className='last-msg'>Hello there!</p>
                                </div>
                             </div>
                             <div className="status">23mn</div>
                          </div>
                          <div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <div className="description">
                                    <h3 className='userName'>Rida Lamiini</h3>
                                    <p className='last-msg'>Hello there!</p>
                                </div>
                             </div>
                             <div className="status">23mn</div>
                          </div>
                          <div className="msg">
                            <img className='user-photo' src= {UserProfile} alt="" />
                            <div className="msg-bubble">
                                <div className="description">
                                    <h3 className='userName'>Rida Lamiini</h3>
                                    <p className='last-msg'>Hello there!</p>
                                </div>
                             </div>
                             <div className="status">23mn</div>
                          </div>
                          
                      </div> 
            
        
        </div>
    </div>
  )
}
