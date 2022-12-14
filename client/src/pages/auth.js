import React from "react";
import "../css/auth.css"
import logo from '../assets/sof.svg';
import { useState } from "react";

export default function Auth(){
    const [isSignup, setIsSignup] =useState(false);
    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }


    return(
       
        <div className="main">
        {isSignup ?<div id="first-container">
            <h1>Join the Stack Overflow community</h1>
            <p>Get unstuck — ask a question</p>
            <p>Unlock new privileges like voting and commenting</p>
            <p>Save your favorite tags, filters, and jobs</p>
            
            <p>Earn reputation and badges</p>
            <div>
            <p>Collaborate and share knowledge with a private group for FREE.</p>
            <p>Get Stack Overflow for Teams free for up to 50 users.</p>
            </div>
            </div>:""}
           
            <div id="second-container">
            
             {!isSignup&& <img className="main-logo" src={logo} alt='logo'></img>}
            <div className="second">
                <form className="main-form">
                
                {isSignup ? <label className="search-in" htmlFor="Display name" id="Display name">
                    <input  id="Display name" type="email" name="Display name"></input>
                    </label>:""}
               
                    <label className="search-in" htmlFor="email" id="Email">
                        <input  id="email" type="email" name="email"></input>
                    </label>
                    <label className="pass-in" htmlFor="password">
                        <input type="password" name="password" id="password"></input>
                        <span>{!isSignup ?  <p style={{fontSize:"small", color:"#007ac6" ,cursor:"pointer"}}>forgot password ?</p> :<p className="select" style={{color:"#666767"}}>passwords must contain at least eight <br/>
                            characters, inculding at least 1 letter and 1<br></br> number</p>}</span>

                    <span>{isSignup ?<div style={{display:"flex", gap:"10px"}}><label style={{marginTop:"8px"}}><input type="checkbox" class="checkbox"></input>

                    </label><p style={{color:"#666767",fontSize:"small"}}>Opt-in to receive occasional <br></br> product updates, user research invitations, company<br></br> announcements, and digests.</p></div>:"" }</span>
                    </label>
                    <button type="submit" className="btn btn-primary bttn ">{!isSignup ? "Log in":"Sign up"}</button>
                    {isSignup ?<p  style={{color:"#666767"}} className="terms">By clicking “Sign up”,
                     you agree to our <span style={{color:"#007ac6"}}> terms of <br></br>service, privacy policy</span>
                     and <span style={{color:"#007ac6"}}>cookie policy </span></p>:""}
                </form>
               
            </div>
            <p className="query">{!isSignup ?  "Don't have an account ?":"Already have an account ?"} <button className="handle-switch" onClick={handleSwitch} type="button">{!isSignup ?  "Sign up":"login"}</button></p>
            </div>
            </div>
           
        
    )
}