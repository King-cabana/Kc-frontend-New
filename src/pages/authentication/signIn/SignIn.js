import React, {useState} from 'react';
import Logo from "../../../images/Logo.svg"
import google from "../../../images/Google.svg"
import Facebook from "../../../images/Facebook.svg"
import instagram from "../../../images/instagram.svg"
import {HiOutlineMail} from "react-icons/hi" 
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"
import { Form, InputFieldWrapper, LongButton, ModalOverlay, 
  Div, Horizontal, Or, SignInLink } from '../../../globalStyles';
import { SocialIconsHolder } from '../../sponsors/Sponsors.styled';
import { SignInBody, SignInContent, SignInMedia, SignInImage} from './Sign.style';
import { Link } from 'react-router-dom';
import { signInUser } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';






const SignIn = () => {

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";

const dispatch = useDispatch();
const handleLogin = () =>{
  console.log(email, password )
  dispatch(signInUser({email,password }))
}
  

    return(
      
    <ModalOverlay>
    <SignInBody>
      <SignInContent>
      <img src={Logo} alt='King Cabana Logo'/>
      <SignInMedia>
            <SocialIconsHolder>
              <img src={google} alt= "google"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={Facebook} alt= "facebook"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
              <img src={instagram} alt= "instagram"/>
            </SocialIconsHolder>
        </SignInMedia>
        <Div>
            <Horizontal/>
              <Or>Or continue with</Or>
            <Horizontal/>
        </Div> 
      <Form>
      <label>E-mail</label>
      <InputFieldWrapper>
      <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
      </InputFieldWrapper>
      <label>Password</label>
      <InputFieldWrapper>
      <input placeholder='Password' type={InputType} value={password} onChange={(e) => setPassword(e.target.value)}></input>
      {click ? <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4'}}/> : 
      <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '3%', color: '#C4C4C4'}}/>}
      </InputFieldWrapper>
      <div style={{width:'inherit', display:'flex', justifyContent:'right', fontSize:'12px', marginTop:'2%'}}>
          <Link style={{color:'blue'}}to="/forgotPassword"><p >Forgot Password?</p></Link>
      </div>
      <LongButton type='button' onClick={handleLogin}>Sign In</LongButton>
      </Form>
      <SignInLink to="/sponsors">Don't have an account? <span>Sign Up for free</span></SignInLink>
      </SignInContent>
      <SignInImage/>
    </SignInBody>
 </ModalOverlay>

    ) 

}

export default SignIn
