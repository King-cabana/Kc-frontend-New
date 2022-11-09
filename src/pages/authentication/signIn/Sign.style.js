import styled from "styled-components";
import youngman from "../../../images/image1.jpg"

export const SignInBody = styled.div`
    height: 80vh;
    width: 60vw;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;

    @media screen and (max-width: 960px) {
        height: 75vh;
        width: 90vw;
        border-radius: 3px;

    }

`

export const SignInContent = styled.div` 
    height: inherit;
    width: 30vw;
    padding: 5%;
    
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
  
    @media screen and (max-width: 960px){
        width: inherit;

}
`

export const SignInMedia = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 2%;
 height: 5vh;
 margin-top: 8%;
 
 @media only screen and (max-width: 960px){
  display: flex;

 }
`


export const SignInImage = styled.div`
    height: inherit;
    width: 30vw;
    border-radius: 0 10px 10px 0;
    background: url(${youngman}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: center;

    @media screen and (max-width: 960px){
        display: none;
    }
    
    `