import React from 'react'
import { AnimationContainer, ModalOverlay } from '../../globalStyles'
import Lottie from "lottie-react";
import animationData from '../../lotties/lf30_editor_qitufq0k.json';  
import { NavButton } from '../../components/navbar/Navbar.styled';
import { EventReportBody } from './EventReportStyled';

const EventReport = () => {
  return (
    <div>
        <ModalOverlay>
            <EventReportBody>
            <AnimationContainer>
                <Lottie 
                    animationData={animationData} 
                    loop={true} 
                />
            </AnimationContainer>
            <p style={{marginTop:'5%',marginBottom:'10%',fontSize:'12px', textAlign:'center'}}>
                Is this a periodic event? Upload report of previously
                held event or continue to create a new event
            </p>
            <div style={{display:'flex', width:'20vw', height:'8vh', gap:'10%', justifyContent:'center', alignItems:'center'}}>
            <NavButton>Upload</NavButton>
            <NavButton>Continue</NavButton>
            </div>
            </EventReportBody>
        </ModalOverlay>

    </div>
  )
}

export default EventReport