import React from 'react'
import { ModalOverlay, AnimationContainer, LongButton } from '../../../globalStyles'
import Lottie from "lottie-react";
import animationData from '../../../lotties/114209-sign-in-success.json'; 
import {ModalBody} from './ContinueModalStyled'

const ContinueModal = () => {
  return (
    <ModalOverlay>
        <ModalBody>
         <AnimationContainer>
           <Lottie 
            animationData={animationData} 
            loop={true} 
          />
         </AnimationContainer>
         <p>Continue As</p>
         <div style={{display:'flex', flexDirection:'column'}}>
         <LongButton>Sponsor</LongButton>
         <LongButton>Organizer</LongButton>
         </div>
        </ModalBody>
    </ModalOverlay>
  )
}

export default ContinueModal