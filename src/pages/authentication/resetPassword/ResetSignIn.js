import React, {useState} from 'react'
import { ModalOverlay , Form, InputFieldWrapper, LongButton} from '../../../globalStyles'
import { ResetSignInBody } from './ResetSignInStyled'
import {HiOutlineEye, HiOutlineEyeOff} from "react-icons/hi"

const ResetSignIn = () => {

const [click, setClick] = useState(false)
const [visible, setVisibility] = useState(false)

const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";

  return (
    <ModalOverlay>
      <ResetSignInBody>
        <h3>Reset Password</h3>
        <Form>
          <label>New Password</label>
          <InputFieldWrapper>
          <input name='password' type={InputType} placeholder='New password'></input>
          {
            click ? <HiOutlineEye  onClick={handleClick} style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/> :
            <HiOutlineEyeOff onClick={handleClick} style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
          }
          </InputFieldWrapper>
          <label>Confirm New Password</label>
          <InputFieldWrapper>
          <input name='confirmpassword' type={InputType} placeholder='Confirm new password'></input>
          {
            click ? <HiOutlineEye  onClick={handleClick} style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/> :
            <HiOutlineEyeOff  onClick={handleClick} style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
          }
          </InputFieldWrapper>
          <LongButton>Reset Password</LongButton>
      </Form>
      </ResetSignInBody>
    </ModalOverlay>
  )
}

export default ResetSignIn