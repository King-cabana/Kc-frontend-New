import styled from "styled-components";

export const Nav = styled.div`
/* display: flex; */
width: 20vw;
height: 100vh;
/* background-color: blue; */
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);


@media only screen and (max-width){
   width: 150vw;
   justify-content: space-between;
}

`

export const NavLogo = styled.div`

`
export const LogoLink = styled.div`
 img{
    /* display: none; */
 }

@media only screen and (max-width: 960px){
  img{
    display: flex;
    margin-top: 5%;
    margin-left: 5%;
  }
}
`
export const NavBellPicHolder = styled.div`

@media only screen and (max-width: 960px){
    display: flex;
    width: 70vw;
    margin-left: 35%;
    margin-top: 5%;
}

`
export const PicHolder = styled.div`
 margin-top: 2%;
 margin-right: 5%;
 width: 20px;
 height: 20px;
 border: 1px solid #D9D9D9;
 border-radius: 50%;

 @media only screen and (max-width: 960px){
  display: flex;
 }
`
export const NavBurger = styled.div`

img{
    /* display: none; */
}

@media only screen and (max-width:960px){
 display: block;
    img{
        padding-top: 5px;
        display: block;
        margin: auto;
    }
  

}
`

export const NavLink = styled.div`

`
export const Bar = styled.div`
background: grey;
  height: 100vh;
  overflow: auto;
  width: 40vw;
  margin-top: 25%;

@media only screen and (max-width: 960px){
  background: grey;
  height: 100vh;
  overflow: auto;
  width: 40vw;
  margin-top: 25%;
    
  li,a{
        display: flex;
        text-decoration: none;
        color: black;
        font-weight: 600 ;
        font-size: small;
        cursor: pointer;
        /* text-align: center; */
        
        /* background-color: blue; */
        /* height: 50vh; */

        &:hover {
        
        color: blue;
        width: 20px;
        height: 5vh;
       
        font-weight: 600 ;
        cursor: pointer;

    }
}
}
`