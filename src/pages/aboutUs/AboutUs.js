import React from 'react'
import Footer from '../../components/footer/Footer'
import { WhatsApp } from '../../globalStyles'
import { ASContent, ASContentSection, ASImage, HeroSection, TCContainer } from './AboutUsStyled'
import whatsappIcon from '../../images/whatsapp-symbol-logo-svgrepo-com.svg'
import TestimonialCard from '../../components/cards/TestimonialCard'
import Point from '../../images/point.svg'
import bulb from '../../images/LightBulb.jpg'
import businessMan from '../../images/Business.jpg'


const AboutUs = () => {
  return (
    <>
   
      <HeroSection>
        <p>People || Memories || Value 
        <br/>Connecting People. Capturing Value. 
        <br/>Creating Memories</p>
      </HeroSection>
      <ASContentSection>
        <ASContent>
          <p style={{fontSize:'24px'}}>Our story</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae imperdiet amet sed at aliquam blandit mi, ipsum. 
            Quis pulvinar vel integer aliquet. Faucibus neque, 
            ridiculus diam vulputate faucibus dui sollicitudin arcu. 
            Quis commodo aliquet arcu adipiscing enim justo, facilisis. 
            Proin fermentum massa, aliquet egestas vitae erat. 
            Velit, volutpat rhoncus condimentum mauris habitasse 
            amet vitae gravida integer. Et pellentesque augue a ullamcorper 
            pellentesque eleifend nibh a. 
            Tempus pellentesque amet nec diam eu leo pellentesque velit. 
            Interdum eget tincidunt nunc netus eget mattis sed elit nisl.</p>
        </ASContent>
        <ASContent>
          <div style={{height:'20vh',display:'flex', justifyContent:'space-between'}}>
          <div style={{width:'5vw'}}>
           <img src={Point} alt='' height={'30px'} width={'30px'} />
            </div>
            <div>
              <p>Connecting People</p>
              <p style={{fontSize:'14px'}}>We believe in a universal bond of sharing that connects all humanity. 
                A society where everyone has a sense of belonging.</p>
            </div>
          </div>
          <div style={{height:'20vh',display:'flex', justifyContent:'space-between'}}>
          <div style={{width:'5vw'}}>
          <img src={Point} alt='' height={'30px'} width={'30px'} />
            </div>
            <div>
              <p>Capturing Value</p>
              <p style={{fontSize:'14px'}}>Be it contributing content, volunteering ideas, or selling products and services, 
                the best customers co-lead companies to the end that value is created and sustained.</p>
            </div>
          </div>
          <div style={{height:'20vh',display:'flex', justifyContent:'space-between'}}>
            <div style={{width:'5vw'}}>
            <img src={Point} alt='' height={'30px'} width={'30px'} />
            </div>
            <div>
              <p>Fulfilling Memories</p>
              <p style={{fontSize:'14px'}}>Today’s customers want more than products, features or benefits. They want meaning. 
                They want creative control over their life stories as they mark milestones that 
                acknowledge the past, reflect the present and shape future outcomes.</p>
            </div>
          </div>
        </ASContent>
      </ASContentSection>
      <ASContentSection>
        <ASContent>
        <p style={{fontSize:'24px'}}>Our Mission</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae imperdiet amet sed at aliquam blandit mi, ipsum. 
            Quis pulvinar vel integer aliquet. Faucibus neque, 
            ridiculus diam vulputate faucibus dui sollicitudin arcu. 
            Quis commodo aliquet arcu adipiscing enim justo, facilisis. 
            Proin fermentum massa, aliquet egestas vitae erat. 
            Velit, volutpat rhoncus condimentum mauris habitasse 
            amet vitae gravida integer. Et pellentesque augue a ullamcorper 
            pellentesque eleifend nibh a. 
            Tempus pellentesque amet nec diam eu leo pellentesque velit. 
            Interdum eget tincidunt nunc netus eget mattis sed elit nisl.</p>
        </ASContent>
        <ASImage img={bulb}/>
      </ASContentSection>

      <ASContentSection>
      <ASImage img={businessMan}/>
        <ASContent>
        <p style={{fontSize:'24px'}}>Our Vision</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae imperdiet amet sed at aliquam blandit mi, ipsum. 
            Quis pulvinar vel integer aliquet. Faucibus neque, 
            ridiculus diam vulputate faucibus dui sollicitudin arcu. 
            Quis commodo aliquet arcu adipiscing enim justo, facilisis. 
            Proin fermentum massa, aliquet egestas vitae erat. 
            Velit, volutpat rhoncus condimentum mauris habitasse 
            amet vitae gravida integer. Et pellentesque augue a ullamcorper 
            pellentesque eleifend nibh a. 
            Tempus pellentesque amet nec diam eu leo pellentesque velit. 
            Interdum eget tincidunt nunc netus eget mattis sed elit nisl.</p>
        </ASContent>
      </ASContentSection>
      

      <TCContainer>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/><TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      </TCContainer>
      <WhatsApp>
            <img src={whatsappIcon} alt=""/>
      </WhatsApp>
      <Footer/>
    </>
  )
}

export default AboutUs