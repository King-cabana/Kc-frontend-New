import React from 'react'
import {  BgOverlay, Section, ContentHolder, BtnHolder, EventButton } from './HomeStyled'

const Home = () => {
  return (
    <>
      <Section>
        <BgOverlay>
          <ContentHolder>
          <h1>Dreams do come true. <span>Create fulfiling memories today.</span></h1>
          <p>Connecting people | Creating people | Capturing values</p>
          <BtnHolder>
            <EventButton>Create Event</EventButton>
            <EventButton style={{background:'transparent', border:'1.5px solid white'}}>Sponsor Events</EventButton>
          </BtnHolder>
          </ContentHolder>
          
        </BgOverlay>
      </Section>
    </>
  )
}

export default Home