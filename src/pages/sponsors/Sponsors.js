import React from 'react'

import Logo from "../../images/Logo.svg"
import google from "../../images/Google.svg"
import Facebook from "../../images/Facebook.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import {HiOutlineMail} from "react-icons/hi" 
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"
import {App,Image,Media,Create, SocialIconsHolder, Horizontal,Or,Form1,Name,Mail,Password,Forgot,Wont,Button, Div, Picture, Div1} from "./Sponsors.styled";
import { useState } from "react"
import {Link} from "react-router-dom" 

export default function Sponsors(){

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";



// const Sponsors = () => {
       return (
              <App>
                <Div1>
                  <Image>
                   <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
                  </Image> 
                  <Create>create event as an event organiser</Create>
                  <Media>
                    <SocialIconsHolder>
                      <img height={30} width={30} src={google} alt= "google"/>
                    </SocialIconsHolder>
                    <SocialIconsHolder>
                      <img height={30} width={30} src={Facebook} alt= "facebook"/>
                    </SocialIconsHolder>
                    <SocialIconsHolder>
                      <img height={30} width={30} src={instagram} alt= "instagram"/>
                    </SocialIconsHolder>
                    <SocialIconsHolder>
                     <img height={30} width={30} src={linkedin} alt= "linkedin"/>
                    </SocialIconsHolder>
                  </Media>
                  <Div>
                    <Horizontal/>
                      <div></div>
                      <Or>Or continue with</Or>
                    <Horizontal/>
                  </Div> 

                  <Form1>
                    <p>FullName</p>
                    <Name>
                      <input name= "name" type="name" placeholder="Type here..."/>
                    </Name>
                    
                    <p>Email</p>
                    <Mail>
                     <input name="email" type="email" placeholder="Email..."/>
                     <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'5%', color:'#C4C4C4'}}/>
                    </Mail>

                    <p>Password</p> 
                    <Password>
                     <input name="password" type={InputType} placeholder="Password..."/>
                     {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/> : 
                     <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>}
                    </Password>
                    <Forgot><a href="forgot password">Remember Me</a></Forgot>

                    <Button>Sign in</Button>
                    <Wont>Don't have an account? <Link to ="/register">Sign up for free</Link> </Wont>
                  </Form1>
                </Div1>
                 <Picture>
                 {/* <img src={image} alt="man"/> */}
                </Picture>   
              </App> 
  )
}

// export default Sponsors