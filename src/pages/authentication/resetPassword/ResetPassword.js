import React from 'react'
import {ResetBody} from './ResetPasswordStyled'
import { ModalOverlay, LongButton, SignInLink, Form, 
          InputFieldWrapper, AnimationContainer } from '../../../globalStyles'
import Lottie from "lottie-react";
import animationData from '../../../lotties/76040-change-passwords.json';          
       
const ResetPassword = () => {
  return (
    <ModalOverlay>
    <ResetBody>
      <h3>Reset Password</h3>
    <AnimationContainer>
        <Lottie 
        animationData={animationData} 
        loop={true} 
    />
    </AnimationContainer>
      <p>Enter your e-mail address, we'll send you a link
        to reset your password
      </p>
      <Form>
          <label>Enter your e-mail</label>
          <InputFieldWrapper>
          <input placeholder='Enter your e-mail'></input>
          </InputFieldWrapper>
          <LongButton>Submit</LongButton>
      </Form>
          <hr></hr>
          <SignInLink to="/logIn">Remember password? <span>Sign In</span></SignInLink>
    </ResetBody>
    </ModalOverlay>
  )
}

export default ResetPassword