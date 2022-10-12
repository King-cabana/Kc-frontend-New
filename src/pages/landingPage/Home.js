import React from 'react'
import {  BgOverlay, HeroSection, 
          ContentHolder, BtnHolder, 
          EventButton, ContentSection, 
          ContentSectionHeader, ContentSectionParagraph} from './HomeStyled'
import {CardHolder, ExploreMore, ImageDisplay, 
        ImageDisplayOverlay,
        TCBody, ImageDisplayB, ImageDisplayOverlayB,
        SubscribeButton,Input,
        TCHolder, TCHead, InputHolder, WhatsApp} from '../../globalStyles'
import Card from '../../components/cards/Card'
import TestimonialCard from '../../components/cards/TestimonialCard'   
import {FiChevronsRight} from 'react-icons/fi'
import whatsappIcon from '../../images/whatsapp-symbol-logo-svgrepo-com.svg'
import Footer from '../../components/footer/Footer'

   

const Home = () => {
  return (
    <>
      <HeroSection>
        <BgOverlay>
          <ContentHolder>
          <h1>Dreams do come true. <span>Create fulfiling memories today.</span></h1>
          <p>Connecting People | Creating Memories | Capturing alue</p>
          <BtnHolder>
            <EventButton>Create Event</EventButton>
            <EventButton style={{background:'transparent', border:'1.5px solid white'}}>Sponsor Events</EventButton>
          </BtnHolder>
          </ContentHolder>
        </BgOverlay>  
      </HeroSection>

      <ContentSection>
        <ContentSectionHeader>Event Categories</ContentSectionHeader>
        <ContentSectionParagraph>Trending Events</ContentSectionParagraph>
        <CardHolder>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </CardHolder>
        <ExploreMore>
            <p>Explore More</p> 
            <FiChevronsRight color={'#FFBC15'} style={{width:'fit-content'}} size={30}/>  
        </ExploreMore>
      </ContentSection>

      <ImageDisplay>
        <ImageDisplayOverlay>
              <p>Advertise your events on <br/>our platform</p>
        </ImageDisplayOverlay>
      </ImageDisplay>

      <ContentSection>
        <ContentSectionHeader>Coporate Sponsorship</ContentSectionHeader>
        <ContentSectionParagraph>Special Events</ContentSectionParagraph>
        <CardHolder>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </CardHolder>
        <ExploreMore>
            <p>Explore More</p> 
            <FiChevronsRight color={'#FFBC15'} style={{width:'fit-content'}} size={30}/>  
        </ExploreMore>
      </ContentSection>

      <TCBody>
          <TCHead>Testimonials</TCHead> 
          <TCHolder>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
          </TCHolder>
      </TCBody>

      <ImageDisplayB>
            <ImageDisplayOverlayB>
            <p>Ready to be sponsored? <br/> Enter your email to create your membership</p>
              <InputHolder>
              <Input/>
              <SubscribeButton>Subscribe</SubscribeButton>
              </InputHolder>
            </ImageDisplayOverlayB>
      </ImageDisplayB>
      <WhatsApp>
            <img src={whatsappIcon} alt=""/>
      </WhatsApp>
      <Footer/>
    </>
  )
}

export default Home