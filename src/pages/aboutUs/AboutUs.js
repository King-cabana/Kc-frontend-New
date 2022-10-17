import React from 'react'
import Footer from '../../components/footer/Footer'
import { TCBody, TCHead, WhatsApp } from '../../globalStyles'
import { ASContent, ASContentSection, ASInner, ASInnerImg, 
        ASImage, HeroSection, TCContainer } from './AboutUsStyled'
import whatsappIcon from '../../images/whatsapp-symbol-logo-svgrepo-com.svg'
import TestimonialCard from '../../components/cards/TestimonialCard'
import Point from '../../images/point.svg'
import bulb from '../../images/LightBulb.jpg'
import businessMan from '../../images/Business.jpg'
import Navbar from '../../components/navbar/Navbar'



const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <HeroSection>
        <p>People || Memories || Value 
        <br/>Connecting People. Capturing Value. 
        <br/>Creating Memories</p>
      </HeroSection>
      <ASContentSection>
        <ASContent>
        <div>
          <p style={{fontSize:'24px'}}>Our story</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae imperdiet amet sed at aliquam blandit mi, ipsum. 
            Quis pulvinar vel integer aliquet. Faucibus neque, 
            ridiculus diam vulputate faucibus dui sollicitudin arcu. 
          </p>
            </div>
        </ASContent>
        <ASContent>
        <div>

          <ASInner>
          <ASInnerImg>
            <img src={Point} alt='' height={'30px'} width={'30px'} />
          </ASInnerImg>
            <div>
              <p>Connecting People</p>
              <p style={{fontSize:'14px'}}>We believe in a universal bond of sharing that connects all humanity. 
                A society where everyone has a sense of belonging.</p>
            </div>
          </ASInner>
          <ASInner>
          <ASInnerImg>
          <img src={Point} alt='' height={'30px'} width={'30px'} />
          </ASInnerImg>
            <div>
              <p>Capturing Value</p>
              <p style={{fontSize:'14px'}}>Be it contributing content, volunteering ideas, or selling products and services, 
                the best customers co-lead companies to the end that value is created and sustained.</p>
            </div>
          </ASInner>
          <ASInner>
          <ASInnerImg>
            <img src={Point} alt='' height={'30px'} width={'30px'} />
            </ASInnerImg>
            <div>
              <p>Fulfilling Memories</p>
              <p style={{fontSize:'14px'}}>Today’s customers want more than products, features or benefits. They want meaning. 
                They want creative control over their life stories as they mark milestones that 
                acknowledge the past, reflect the present and shape future outcomes.</p>
            </div>
            </ASInner>
          </div>

        </ASContent>
      </ASContentSection>

      
       <ASContentSection>
        <ASContent>
          <div>
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
            </div>
        </ASContent>
        <ASImage img={bulb}/>
      </ASContentSection>

      <ASContentSection>
      <ASImage img={businessMan}/>
        <ASContent>
          <div>
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
            </div>
        </ASContent>
      </ASContentSection>
      
      {/* <TCBody> */}
      {/*  <ASHead>What people say about us</ASHead>  */}
      <TCContainer>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/><TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </TCContainer>
      {/* </TCBody> */}
      <WhatsApp>
            <img src={whatsappIcon} alt=""/>
      </WhatsApp>
      <Footer/>
    </>
  )
}

export default AboutUs