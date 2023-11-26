import React from 'react'
import contactImg from"../../assets/ContactImg.png"
import ContactList from '../../components/contactList/ContactList'

export default function Contact() {
  return (
    <div className="container">
      <ContactList/>
      <img src={contactImg} alt="" />

    </div>
  )
}
