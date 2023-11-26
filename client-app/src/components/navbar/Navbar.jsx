import React from 'react'
import UserProfile from '../../assets/userprofile.png'
import './navbar.css'

export default function Navbar() {
  return (
    <ul class="nav flex-column">
        <li className="nav-item logo"><a href="#"><img src={UserProfile} alt="" /></a></li>
        <li class="nav-item">
            <a href="messages" class="nav-link active"><i class="ri-chat-3-line"></i></a>
        </li>
        <li class="nav-item">
            <a href="contact" class="nav-link "><i class="ri-group-line"></i></a>
        </li>
        <li className="nav-item setting"><a href="#"><i class="ri-settings-2-line"></i></a></li>
    </ul>
  )
}
