import styled from "styled-components"
import youngman from "../../images/image1.jpg"




export const RegisterBody = styled.div`
    height: 98vh;
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
        height: 98vh;
        width: 95vw;
        border-radius: 3px;
    }

`

export const RegisterOrgMedia = styled.div`
display: flex;
 justify-content: center;
 align-items: center;
 width: 15vw;
 gap: 2%;
 height: 5vh;
 margin-top: 3%;
 
 @media only screen and (max-width: 960px){
  width:50vw;
  display: flex;

 }
 `

export const RegisterOrgContent = styled.div` 
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

export const RegisterOrgImage = styled.div`
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

export const Media = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-left: 15%;
 width: 16vw;
 
 @media only screen and (max-width: 960px){
   justify-content: space-between;
   width: 45vw;
   margin-top: 5%;
   margin-left: 27%;
 }
  
`

export const Div = styled.div`
 margin-top: 10%;
 display: flex;
 align-items: center;
 width: 20vw;

 @media only screen and (max-width: 960px){
  width: 90vw;
  margin-top: 5%;
 }


`

export const Horizontal= styled.div`
   width: 20vw;
 
  height: 0.2vh;
  background-color: #C4C4C4;
   

   

   @media only screen and (max-width: 960px){
    width: 100vw;
    margin-left: 35%;

   }
`

export const Or = styled.div`
 width: 10vw;


@media only screen and (max-width: 960px){
  padding: 5%;
  margin-left: 25%;
  width: 40vw;

  
}


`
export const Form = styled.div`
  margin-top: 15%;
  /* border: 0.5px solid #000000;border: 0.5px solid #000000; */
  border-radius: 5px;
  padding-top: 5%;
  text-align: left;
  margin: 5%;
  

  p{
    margin-top: 5%;
  }
  


  @media only screen and (max-width: 960px){
    display: block;
    
 p{
      margin-bottom: 4px;
    
    }
    
  }
`
export const P = styled.div`
margin-left: 8%;

@media only screen and (max-width: 960px){
  width: 80vw;
  padding-left: 15%;
}

`

export const FormInput = styled.input`
  border-radius: 5px;
  outline: none;
  border: 0.5px solid #000000 ;
  width:90%;
  height:5vh;
  padding: 3%;
  
  @media screen and (max-width: 960px) {
    width: 110vw;
    height: 8vh;
  }
`
export const Input = styled.div`
    border-radius: 5px;
    display: flex;
    border: 0.5px solid #000000 ;
    height: 5vh;
    outline: none;
    margin-top: 2%;
    width: 90%;
   
    input{
      border: none;
      border-radius: 5px 0 0 5px;
      outline: none;
      padding: 2%;
    }
    
  @media only screen and (max-width: 960px){
    width:110vw;
    height: 8vh;
    padding: 5%;
  }  
`


export const Button = styled.div`
  width: 19vw;
  height: 5vh;
  background-color: #FF2957;
  color: white;
  border: 1px solid #FF2957;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 10%;
  cursor: pointer;
  padding-left: 35%;
  padding-top: 2%;
  
  @media only screen and (max-width: 960px){
    width: 110vw;
    height: 7vh;
    padding-left: 43%;
    padding-top: 3%;
  }
 
`

  