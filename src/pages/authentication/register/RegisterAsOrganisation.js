import React from 'react'

import Logo from "../../../images/Logo.svg"
import google from "../../../images/Google.svg"
import Facebook from "../../../images/Facebook.svg"
import instagram from "../../../images/instagram.svg"
import linkedin from "../../../images/linkedin.svg"

import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"
import { App, SocialIconsHolder, Media,  Horizontal, Word, Form,Div,FormInput,Input, Picture,P, Or, Create, Button} from "./RegisterAsOrganisation.style.js";
import { useState } from 'react';
import {Link} from "react-router-dom" 





export default function RegisterPage(){

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";


  return(
      <App>
        <Word>
         <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
         <Create>create event as an organisation</Create>
        
        
        
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
             <Or>Or</Or>
           <Horizontal/>
          </Div>
          <Form>
           <p>Company Name</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Company Address</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Phone Number</p>
           <FormInput type="type" id="input" placeholder="Type here..."/>
           <p>Email</p>
           <FormInput type="type" id="input" placeholder="Type here..."/>
           <p>Password</p>
           <Input>
           <input style={{border:'none'}}type={InputType} id="password" placeholder="Type here..."/>
           {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/> : 
           <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>}
           </Input>
           <Button>Sign Up</Button>
           <P><p style={{}}>Already have an account? <Link to="/LogIn">Sign in</Link></p></P>
           
          </Form>
         
        </Word>
        <Picture>
          {/* <img style={{width: '490px', height:'965px', borderRadius:'0 10px 10px 0'}} src={image} alt="man"/> */}
        </Picture> 
        
      </App>
  )

}  
      