import React from 'react'
import { ModalOverlay, Form, LongButton , AnimationContainer } from '../../../globalStyles'
import { ResetSuccessfulBody} from './ResetSuccessfulStyled'
import Lottie from "lottie-react";
import animationData from '../../../lotties/102001-success-icon.json';


const ResetSuccessful = () => {

  return (
    <ModalOverlay>
    <ResetSuccessfulBody>
    <AnimationContainer>
    <Lottie 
        animationData={animationData} 
        loop={true} 
    />
    </AnimationContainer>
    <p>Password reset successful.
    <br/>Sign in to start creating events</p>
    <Form>
    <LongButton  style={{marginTop:'8%'}}>Sign In</LongButton>
    </Form>
    </ResetSuccessfulBody>
    </ModalOverlay>
  )
}

export default ResetSuccessful