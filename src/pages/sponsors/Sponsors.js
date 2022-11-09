import React from 'react'

import Logo from "../../images/Logo.svg"
import google from "../../images/Google.svg"
import Facebook from "../../images/Facebook.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi"
import {SocialIconsHolder} from "./Sponsors.styled";
import { useState } from 'react';
import { Form, InputFieldWrapper, LongButton, 
        ModalOverlay, SignInLink, Div, 
        Horizontal, Or } from '../../globalStyles'
import {RegisterBody, RegisterOrgMedia, RegisterOrgContent, RegisterOrgImage} from "./Sponsors.styled"





export default function RegisterPage(){

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";


  return(

    <ModalOverlay>
    <RegisterBody>
      <RegisterOrgContent>
      <img src={Logo} alt='King Cabana Logo'/>
      <p>Create account as an event organization</p>

        <RegisterOrgMedia>
            <SocialIconsHolder>
              <img src={google} alt= "google"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={Facebook} alt= "facebook"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={instagram} alt= "instagram"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={linkedin} alt= "linkedin"/>
            </SocialIconsHolder>
        </RegisterOrgMedia>
        <Div>
            <Horizontal/>
              <Or>Or continue with</Or>
            <Horizontal/>
        </Div> 

      <Form>
      <label>Organization's Name</label>
      <InputFieldWrapper>
      <input placeholder='Type here...'></input>
      </InputFieldWrapper>
      <label>Phone Number</label>
      <InputFieldWrapper>
      <input placeholder='Type here...'></input>
      </InputFieldWrapper>
      <label>E-mail</label>
      <InputFieldWrapper>
      <input placeholder='Type here...'></input>
      <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
      </InputFieldWrapper>
      <label>Password</label>
      <InputFieldWrapper>
      <input placeholder='Type here...' type={InputType}></input>
      {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4'}}/> : 
      <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4'}}/>}
      </InputFieldWrapper>
      <LongButton>Sign Up</LongButton>
      </Form>
      <SignInLink to="/logIn">Already have an account? <span>Sign In</span></SignInLink>
      </RegisterOrgContent>
      <RegisterOrgImage/>
    </RegisterBody>
 </ModalOverlay>
      
      // <App>
      //   <Word>
      //    <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
      //    <Create>create event as an organisation</Create>
        
      //     <Media>
      //       <SocialIconsHolder>
      //        <img height={30} width={30} src={google} alt= "google"/>
      //       </SocialIconsHolder>
      //       <SocialIconsHolder>
      //        <img height={30} width={30} src={Facebook} alt= "facebook"/>
      //       </SocialIconsHolder>
      //       <SocialIconsHolder>
      //        <img height={30} width={30} src={instagram} alt= "instagram"/>
      //       </SocialIconsHolder>
      //       <SocialIconsHolder>
      //        <img height={30} width={30} src={linkedin} alt= "linkedin"/>
      //       </SocialIconsHolder>
      //     </Media>
      //     <Div>
      //      <Horizontal/>
      //        <Or>Or</Or>
      //      <Horizontal/>
      //     </Div>
      //     <Form>
      //      <p>Company Name</p>
      //      <FormInput type= "type" id="input" placeholder="Type here..."/>
      //      <p>Company Address</p>
      //      <FormInput type= "type" id="input" placeholder="Type here..."/>
      //      <p>Phone Number</p>
      //      <FormInput type="type" id="input" placeholder="Type here..."/>
      //      <p>Email</p>
      //      <FormInput type="type" id="input" placeholder="Type here..."/>
      //      <p>Password</p>
      //      <Input>
      //      <input style={{border:'none'}}type={InputType} id="password" placeholder="Type here..."/>
      //      {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/> : 
      //      <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>}
      //      </Input>
      //      <Button>Sign Up</Button>
      //      <P><p style={{}}>Already have an account? <Link to="/LogIn">Sign in</Link></p></P>
           
      //     </Form>
         
      //   </Word>
      //   <Picture>
      //     {/* <img style={{width: '490px', height:'965px', borderRadius:'0 10px 10px 0'}} src={image} alt="man"/> */}
      //   </Picture> 
        
      // </App>
  )

}  
      