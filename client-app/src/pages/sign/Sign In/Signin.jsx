import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import './signin.css'
import logo from '../../../assets/Login.png'
import { Link } from 'react-router-dom'


function Signin() {
    const [HidePass, setHidePass] = useState(true)
    const [mssgError , SetmssgError] = useState()
    const [Error , SetError] = useState(false)
    const [Validemail , setValidEm] = useState(true)
    const [Validpassword,SetValidPass] = useState(true)
    const [email , setEmail] = useState()
    const [password,setPassword] = useState()

    useEffect(()=>{
            if(Error){
                const hideMessage = () => {
                    SetError(false);
                  };
                setTimeout(hideMessage, 3000);
            }
    },[Error])

    const HandleEmail = (event)=>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmail(event.target.value)
        setValidEm(emailRegex.test(email))
    }
    const HandlePassword = (event)=>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
        setPassword(event.target.value)
        SetValidPass(passwordRegex.test(password))
    }
    const handleClick = ()=>{
        if(Validemail && Validpassword){
            axios.post('http://localhost:8080/api/auth/signin',{
                "email" : email ,
                "password" : password
            })
            .then(response => {
                console.log(response.data);
                const token = response.data.token
                localStorage.setItem('accessToken', token);
                window.location.href = '/chat';
            })
            .catch(error => {
                SetError(true)
                SetmssgError("Invalid credentials")
            });
        }
        else{
            SetError(true)
            SetmssgError("Input Format Invalid")
        }
    }
  return (
    <div className='contain'>
        <div className="image">
            <img src={logo} alt="" />
        </div>
        <div className="signin-content">
            <div className="signin-content_switch-to-signup">
                <div className='Text'>
                    I don't have an account 
                    <span><Link to="/signup">Sign Up</Link></span>
                </div>
            </div>
            <div className="signin-content-Form">
                <div class="alert alert-danger" 
                Style={Error ? "padding:5px 3rem;display : flex" : "padding:5px 3rem;display : none"}
                 role="alert">
                    {mssgError}
                </div>
                <div class="form">
                    <div className="Email-input" >
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='enter your email' value={email} onChange={HandleEmail} />
                        {!Validemail && <p style={{ color: 'red', fontSize: '11px' , margin:'0'}}>Invalid email format</p>}
                    </div>
                    <div className="Password-input">
                        <label htmlFor="">Password</label>
                        <input type={HidePass ? "password" : "text"} placeholder='password' value={password} onChange={HandlePassword}  />
                            <div className="hide_Password">
                                {HidePass ? <BiSolidHide onClick={() => setHidePass(false)}/> : <BiShow onClick={() => setHidePass(true)}/>}
                            </div>
                        {!Validpassword && <p style={{ color: 'red', fontSize: '11px' ,margin:'0'}}>Invalid password format</p>}
                    </div>
                    <div className="forget-pass">
                        <p>Forgot Password ?</p>
                    </div>
                    <div className="remember-me">
                        <input type='checkbox'></input>
                        <p>remember me</p>
                    </div>
                    <div className="button">
                        <button type='submit' onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin