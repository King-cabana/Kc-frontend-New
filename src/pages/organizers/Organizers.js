import React from 'react'
import { useDispatch } from 'react-redux'
import { apiFetch } from '../../redux/authSlice'

import Logo from "../../images/Logo.svg"

import google from "../../images/Google.svg"
import Facebook from "../../images/Facebook.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import { HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi"
import { HiOutlineEye } from "react-icons/hi"
import {
  Media, SocialIconsHolder, Horizontal, Or, Div,
  OrganizerBody, OrganizerContent, OrganizerImage
} from "./OrganizersStyled";
import { useState } from "react"
import { Form, InputFieldWrapper, LongButton, ModalOverlay, SignInLink } from '../../globalStyles'


const Organizer = () => {

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    setClick(!click)
    setVisibility(!visible)
  }

  const InputType = visible ? "text" : "password";

  const dispatch = useDispatch()
  const registerHandle = () => {
    console.log(
      firstName,
      lastName,
      phoneNumber,
      email,
      password
    )
    console.warn(apiFetch.name)
    //  dispatch(registerUser({firstName, lastName, phoneNumber, email, password})) 
    dispatch(apiFetch({
      apiName: 'signUpUser',
      body: { firstName, lastName, phoneNumber, email, password },
      method: 'post',
      url: 'eventuser/create'
      
    }))
    

  }


  return (

    <ModalOverlay>
      <OrganizerBody>
        <OrganizerContent>
          <img src={Logo} alt='King Cabana Logo' />
          <p>Create account as an event organizer</p>

          <Media>
            <SocialIconsHolder>
              <img src={google} alt="google" />
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={Facebook} alt="facebook" />
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={instagram} alt="instagram" />
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={linkedin} alt="linkedin" />
            </SocialIconsHolder>
          </Media>
          <Div>
            <Horizontal />
            <Or>Or continue with</Or>
            <Horizontal />
          </Div>

          <Form >
            <label>First Name</label>
            <InputFieldWrapper>
              <input placeholder='Type here...' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </InputFieldWrapper>
            <label>Last Name</label>
            <InputFieldWrapper>
              <input placeholder='Type here...' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </InputFieldWrapper>
            <label>Phone Number</label>
            <InputFieldWrapper>
              <input placeholder='Type here...' value={phoneNumber} onChange={(e) => setPhone(e.target.value)}></input>
            </InputFieldWrapper>
            <label>E-mail</label>
            <InputFieldWrapper>
              <input placeholder='Type here...' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <HiOutlineMail style={{ margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4' }} />
            </InputFieldWrapper>
            <label>Password</label>
            <InputFieldWrapper>
              <input placeholder='Type here...' type={InputType} value={password} onChange={(e) => setPassword(e.target.value)}></input>
              {click ? <HiOutlineEyeOff onClick={handleClick} style={{ margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4' }} /> :
                <HiOutlineEye onClick={handleClick} style={{ margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4' }} />}
            </InputFieldWrapper>
            <LongButton type='button' onClick={registerHandle}>Sign Up</LongButton>
          </Form>
          <SignInLink to="/logIn">Already have an account? <span>Sign In</span></SignInLink>
        </OrganizerContent>
        <OrganizerImage />
      </OrganizerBody>
    </ModalOverlay>

  )
}

export default Organizer