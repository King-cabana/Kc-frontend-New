import React from 'react'
import { ModalOverlay, LongButton, SignInLink , Form, InputFieldWrapper } from '../../../globalStyles'
import Logo from "../../../images/kingCabanaLogo.svg"
import { ForgetPasswordBody, ForgetPasswordContent, ForgetPasswordImage } from './ForgotPasswordStyled'
import {HiOutlineMail} from "react-icons/hi"


const forgetPassword = () => {
  return (
    <ModalOverlay>
        <ForgetPasswordBody>
          <ForgetPasswordContent>
          <img src={Logo} alt='King Cabana Logo'/>
          <h3>Forgot Password</h3>
          <p>Enter your email, then a code would
              be sent to your account. </p>
          <Form>
          <label>E-mail</label>
          <InputFieldWrapper>
          <input placeholder='type here...'></input>
          <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
          </InputFieldWrapper>
          <LongButton >Continue</LongButton>
          </Form>
          <SignInLink to="/logIn">Remember password? <span>Sign In</span></SignInLink>
          </ForgetPasswordContent>
          <ForgetPasswordImage/>
        </ForgetPasswordBody>
     </ModalOverlay>
  )
}

export default forgetPassword