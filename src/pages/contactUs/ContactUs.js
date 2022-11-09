import React from 'react'
import {ContactBody, LeftSide, RightSide, 
        ContactLog, Mail, EmailUsTextHolder,
        ContactForm,Name,NameHolder,LastNameHolder,
        NumberHolder,Message,LongButton } from './ContactUs.styled'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <ContactBody>
      <LeftSide>
        <p style={{fontSize:'18px'}}>Get in touch</p>
        <p style={{fontSize:'14px'}}>We'd be thrilled to hear from you. <br/>
        Our staffs are always available to ease your journey.</p>

        <ContactLog>
          <Mail>
            <HiOutlineMail style={{width: '25px', height:'25px'}}/>
            <EmailUsTextHolder>
             <p style={{fontSize:'16px'}}>You can email us @</p>
             <p>info@kingcabana.com</p> 
            </EmailUsTextHolder> 
          </Mail>
          <Mail>
            <HiOutlineLocationMarker style={{width: '25px', height: '25px'}}/>
            <EmailUsTextHolder>
             <p style={{fontSize:'16px'}}>Office</p>
             <p>371, Borno Way, Alagomeji, Lagos</p>
            </EmailUsTextHolder>
          </Mail>
          <Mail>
           <BsTelephone style={{width: '25px', height: '25px'}}/>
           <EmailUsTextHolder>
             <p style={{fontSize:'16px'}}>Phone Number</p>
             <p>(+234) 808 831 118 8</p>
           </EmailUsTextHolder>
          </Mail> 

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
          <NumberHolder>
          <p>E-mail</p>
          <input name="name" type="id" placeholder="Type here..."/>
          </NumberHolder> 
           
          <NumberHolder>
          <p>Phone Number</p>
          <input name="name" type="id" placeholder="Type here..."/>
          </NumberHolder>
           
          <Message>
          <p>Message</p>
          <textarea name="name" type="id" placeholder="Type here..."/>
          </Message>
          <LongButton>SEND</LongButton>
        </ContactForm>
      </RightSide>

    </ContactBody>
    <Footer/>
    </>
    
  )
}

export default ContactUs