import React, { useState }from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/username.png'
import email_icon from '../Assets/email.png'
import university_icon from '../Assets/university.png'
import school_icon from '../Assets/school.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    return (
        <div className='container'>
            <div className="header">
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" placeholder='UserName' />
                </div>}

                {action==="Login"?<div></div>:<div className='input'>
                <img src={university_icon} alt="" />
                <input type="text" placeholder='University' />
                </div>}

                {action==="Login"?<div></div>:<div className='input'>
                <img src={school_icon} alt="" />
                <input type="text" placeholder='School' />
                </div>}

                {action==="Login"?<div></div>:<div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Confirm Password' />
                </div>}
                
            
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            
            
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
            
        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? 
            <span>Click Here</span>
        </div>}
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>  
        </div>
    )
}
