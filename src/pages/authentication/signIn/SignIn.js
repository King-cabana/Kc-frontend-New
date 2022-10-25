import React, {useState} from 'react';
import Logo from "../../../images/Logo.svg"
import google from "../../../images/Google.svg"
import Facebook from "../../../images/Facebook.svg"
import instagram from "../../../images/instagram.svg"
import linkedin from "../../../images/linkedin.svg"
import {HiOutlineMail} from "react-icons/hi" 
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"
import {App,Image,Media, SocialIconsHolder, Horizontal,Or,Form1,Mail,Password,Forgot,Wont,Button, Div, Picture, Div1, ModalOverlay} from "./Sign.style";
import {Link} from "react-router-dom" 




const SignIn = ({showModal, setShowModal}) => {

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";
  

    return(
      <>
      {showModal ? (
            <App>
            <Div1>
              <Image>
               <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
              </Image> 
              <Media>
                <SocialIconsHolder>
                  <img height={30} width={30} src={google} alt= "google"/>
                </SocialIconsHolder>
                <SocialIconsHolder>
                  <img height={30} width={30} src={Facebook} alt= "facebook"/>
                </SocialIconsHolder>
                <SocialIconsHolder>
                  <img height={30} width={30} src={instagram} alt= "instagram"/>
                </SocialIconsHolder>
                <SocialIconsHolder>
                 <img height={30} width={30} src={linkedin} alt= "linkedin"/>
                </SocialIconsHolder>
              </Media>
              <Div>
                <Horizontal/>
                  <div></div>
                  <Or>Or</Or>
                <Horizontal/>
              </Div> 

              <Form1>
                
                <p>Email</p>
                <Mail>
                 <input name="email" type="email" placeholder="Email..."/>
                 <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'5%', color:'#C4C4C4'}}/>
                </Mail>

                <p>Password</p> 
                <Password>
                 <input name="password" type={InputType} placeholder="Password..."/>
                 {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/> : 
                 <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>}
                </Password>
                <Forgot><a href="forgot password">Remember Me</a></Forgot>

                <Button>Sign in</Button>
                <Wont>Don't have an account? <Link to ="/register">Sign up for free</Link> </Wont>
              </Form1>
            </Div1>
            <Picture>
             {/* <img src={image} alt="man"/> */}
            </Picture>    
          </App> 
      ) : null}
      </> 
    ) 

}

export default SignIn
