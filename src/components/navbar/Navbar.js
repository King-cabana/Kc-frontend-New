import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi';
import {IconContext} from 'react-icons/lib'
import {Nav, NavLogo, LogoLink, NavContent, NavItems, NavMobile, NavLink,
        NavButton, NavButtonLink, NavSearchHolder} from './Navbar.styled'
import Logo from '../../images/kingCabanaLogo.svg'
import { Link } from "react-router-dom";



const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click) 

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)


  return (
    <>
    <IconContext.Provider value={{size:'25px'}}>
    <Nav>
      <NavLogo>
      <LogoLink to="/">
      <img src={Logo} alt='King Cabana Logo'/>
      </LogoLink>
      </NavLogo>
      <NavContent>
        <NavMobile onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/> }
        </NavMobile>
        <NavItems onClick={handleClick} click={click}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sponsors">For Sponsors</NavLink></li>
            <li><NavLink to="/organizers">For Organizer</NavLink></li>
            <li><NavLink to="/contactUs">Contact Us</NavLink></li>
            <li><NavLink to="/aboutUs">About Us </NavLink></li>
        </NavItems>
        <NavSearchHolder>
          <BiSearch size={20} cursor='pointer' style={{marginRight:'10%'}}/>
          <div>
              {button ? (
                <NavButtonLink to="/logIn">
                  <NavButton>Log In</NavButton>
                </NavButtonLink>
              ) : (
                <NavButtonLink to="/logIn">
                  <NavButton>Log In</NavButton>
                </NavButtonLink>
              )}
          </div>
          
        
          
      </NavSearchHolder>
      </NavContent>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar