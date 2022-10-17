import React from 'react'
import {ContactBody, LeftSide, ContactLog, Mail,Location,Phone,EmailUsTextHolder,LocationTextHolder,PhoneHolder,RightSide,ContactForm,Name,NameHolder,LastNameHolder,EmailHolder,NumberHolder,Message,LongButton } from './ContactUs.styled'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'

const ContactUs = () => {
  return (
    
    <ContactBody>
      <LeftSide>
        <h1>Get in touch</h1>
        <p2>We'd be thrilled to hear from you. Our staff is always available to ease your journey.</p2>

        <ContactLog>
          <Mail>
            <HiOutlineMail style={{width: '25px', height:'25px'}}/>
            <EmailUsTextHolder>
             <h1>You can email us @</h1>
             <p>info@kingcabana.com</p> 
            </EmailUsTextHolder> 
          </Mail>
          <Location>
            <HiOutlineLocationMarker style={{width: '25px', height: '25px'}}/>
            <LocationTextHolder>
             <h2>Office</h2>
             <p>371, Borno Way, Alagomeji, Lagos</p>
            </LocationTextHolder>
          </Location>
          <Phone>
           <BsTelephone style={{width: '25px', height: '25px'}}/>
           <PhoneHolder>
             <h3>Phone Number</h3>
             <p>(+234) 808 831 118 8</p>
           </PhoneHolder>
          </Phone> 

        </ContactLog>
      </LeftSide>
      <RightSide>
        <h1>Contact Us</h1>
        <ContactForm>
          <Name>
           <NameHolder>
           <p>First Name</p>
           <input name="name" type="id" placeholder="Type here..."/>
           </NameHolder>
           <LastNameHolder>
           <p>Last Name</p>
           <input name="name" type="id" placeholder="Type here..."/>
           </LastNameHolder>
          </Name>
          <EmailHolder>
          <p>E-mail</p>
          <input name="name" type="id" placeholder="Type here..."/>
          </EmailHolder> 
           
          <NumberHolder>
          <p>Phone Number</p>
          <input name="name" type="id" placeholder="Type here..."/>
          </NumberHolder>
           
          <Message>
          <p>Message</p>
          <textarea name="name" type="id" placeholder="Type here..."/>
          </Message>
          <LongButton>Send</LongButton>
        </ContactForm>
      </RightSide>

    </ContactBody>
    

        
      
    
      
    
  )
}

export default ContactUs