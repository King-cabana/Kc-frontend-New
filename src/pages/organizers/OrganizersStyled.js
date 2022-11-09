import styled from "styled-components"
import Man from "../../images/krakenimages-a1axIWxQxxM-unsplash.jpg"


export const OrganizerBody = styled.div`
    height: 95vh;
    width: 60vw;
    margin: auto;
    position: absolute;
    overflow-y: visible;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;

    @media screen and (max-width: 960px) {
        height: 95vh;
        width: 95vw;
        border-radius: 3px;
    }

`

export const OrganizerContent = styled.div` 
    height: inherit;
    width: 30vw;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    p{  
        margin-top: 1%;
        font-size: 12px;
        text-align: center; 
    }

    @media screen and (max-width: 960px){
        width: inherit;
  
}
`

export const OrganizerImage = styled.div`
    height: inherit;
    width: 30vw;
    border-radius: 0 10px 10px 0;
    background: url(${Man}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: center;

    @media screen and (max-width: 960px){
        display: none;
    }
    `

export const Media = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 15vw;
 gap: 2%;
 height: 5vh;
 margin-top: 2%;
 
 @media only screen and (max-width: 960px){
  width:50vw;
  display: flex;

 }

`

export const SocialIconsHolder = styled.div`
  
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
      width: 20px;
      height:20px;
    }
    
  

  @media only screen and (max-width: 960px) {
    display: flex;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    flex-direction: column;

    img{
      width: 20px;
      height:20px;
    }
    
  }
`

export const Div = styled.div`
 margin-top: 4%;
 display: flex;
 align-items: center;
 width: 25vw;
 font-size: 12px;
 justify-content: space-between;

@media only screen and (max-width:960px){
  width: 80vw;

}

`

export const Horizontal = styled.div`
 width: 40vw;
 height: 0.2vh;
 background-color: #C4C4C4;
  
 @media only screen and (max-width:960px){
   width: 70vw;
   
 } 

`

export const Or = styled.div`
width: 50vw;
color: #C4C4C4;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width:960px){
  width: 90vw;
  padding: 5%;
 
}

`
