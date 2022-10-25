import {Nav,NavLogo,LogoLink,NavBellPicHolder,PicHolder,NavBurger,NavLink,Sidebar} from "./NavBarMobile.styled.js"
import Logo2 from "../../../Images/Logo2.svg"
import Hamburger from "../../../Images/Hamburger.svg" 
import {VscBellDot} from "react-icons/vsc"


const NavBarMobile = () => {
  
  function openNav() {
    document.getElementById("Desc").style.width = "320px";
  }

  function closeNav() {
    document.getElementById("Desc").style.width = "0";
  }
  return (
    <>
      <Nav>
        <NavLogo>
          <LogoLink to="/">
            <img src={Logo2} alt='King Cabana Logo'/>
          </LogoLink>
        </NavLogo>
        <NavBellPicHolder>
          <VscBellDot/>
          <PicHolder>

          </PicHolder>
        </NavBellPicHolder>
        <NavBurger onClick={closeNav} click={closeNav}>
          <img src={Hamburger} alt='hamburger'/>
          <span className="open" style={{fontSize:'30px' , cursor:'pointer'}} onClick={openNav} >&#9776;</span>
         <Sidebar>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sponsors">For Sponsors</NavLink></li>
            <li><NavLink to="/organizers">For Organizer</NavLink></li>
            <li><NavLink to="/contactUs">Contact Us</NavLink></li>
            <li><NavLink to="/aboutUs">About Us </NavLink></li>
           
          </Sidebar>
        </NavBurger>
      </Nav>
    </>
  )
}

export default NavBarMobile
