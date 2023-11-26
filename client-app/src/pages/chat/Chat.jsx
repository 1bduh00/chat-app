import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'
import Contact from '../contact/Contact'
import '../chat/chat.css'
// import Messages from '../messages/Messages'


export default function Chat() {
 
  return (
    <>
         <div className="container">
            <Navbar/>
            <Outlet/>
        </div>

        {/* <Routes>
            <Route path='/Messages' element={<Messages/>}>cc</Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes> */}
    </>
    
  )
}
