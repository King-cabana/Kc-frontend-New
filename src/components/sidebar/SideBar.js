import React from 'react'
import {Nav} from "./SideBarStyled"
import Logo2 from "../../images/KCLogo.svg"
import { SocialIconsHolder } from '../../pages/sponsors/Sponsors.styled'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  
  // function openNav() {
  //   document.getElementById("Desc").style.width = "320px";
  // }

  // function closeNav() {
  //   document.getElementById("Desc").style.width = "0";
  // }
  return (
    <>
      <Nav>
        <div style={{
          width:'inherit', height:'10vh', justifyContent:'center',
          alignItems:'center', display:'flex'
        }}>
          <SocialIconsHolder style={{height:'50px', width:'50px', borderRadius:'100%'}}>
            <img src={Logo2} style={{width:'30px', height:'30px'}} alt='King Cabana Logo'/>
          </SocialIconsHolder>
        </div>

        <div style={{
          width:'inherit', height:'70vh', backgroundColor:'green', padding:'5%',
        }}>
          <p>Main Menu</p>
            <ul style={{listStyle:'none', textUnderline:'none'}}>
              <li >
                <Link to="/">Event Management</Link>
              </li>
              <li>
                <Link to="/">Report Management</Link>
              </li> 
            </ul>

        <hr/>

        <p>Account</p>
        <ul style={{listStyle:'none', textUnderline:'none'}}>
              <li >
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/"> Settings</Link>
              </li> 
        </ul>
        </div>
        
      </Nav>
            

        {/* <NavLogo>
          <LogoLink to="/">
            <img src={Logo2} alt='King Cabana Logo'/>
          </LogoLink>
        </NavLogo> */}
        {/* <NavBellPicHolder>
          <VscBellDot/>
          <PicHolder>

          </PicHolder>
        </NavBellPicHolder> */}
        {/* <NavBurger onClick={closeNav} click={closeNav}>
          <img src={Hamburger} alt='hamburger'/>
          <span className="open" style={{fontSize:'30px' , cursor:'pointer'}} onClick={openNav} >&#9776;</span>
         <Bar>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sponsors">For Sponsors</NavLink></li>
            <li><NavLink to="/organizers">For Organizer</NavLink></li>
            <li><NavLink to="/contactUs">Contact Us</NavLink></li>
            <li><NavLink to="/aboutUs">About Us </NavLink></li>
           
          </Bar>
        </NavBurger> */}
    
    </>
  )
}

export default Sidebar
