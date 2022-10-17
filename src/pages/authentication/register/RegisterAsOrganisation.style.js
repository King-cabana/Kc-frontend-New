import styled from "styled-components"
import image from "../../../images/image1.jpg"


  



export const App = styled.div`
margin: auto;
align-items: center;
width: 60vw;
height: 100vh;
top: 0;
left: 0;
right : 0;
bottom: 0;
display: flex;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
font-family: 'Poppins', sans-serif;
background: #FFFFFF;
border: 2px solid rgba(32, 14, 50, 0.15);
border-radius: 10px;


@media only screen and (max-width: 960px){
  width: 150vw;
  margin:  auto;
  box-shadow: none;
  border: none;
  
  
  
}
`

export const Word = styled.div`
 height: inherit;
 width: 30vw;
 padding: 5%;
 text-align: center;


 @media only screen and (max-width: 960px){
  margin-top: 10%;
  width:120vw;

  img{
    margin-left: 15%;
  }
}

`
export const Create = styled.div`
  align-items: center;
  margin-top: 2%;
  font-size: 20px;

 @media only screen and (max-width: 960px){
    font-size: 150%;
    margin-left: 15%;
   
 }
  

`


export const SocialIconsHolder = styled.div`
width: 50px;
height: 50px;
padding: 10px;
border-radius: 50%;
border: 1px solid #D9D9D9;
display: flex;
cursor: pointer;


@media only screen and (max-width: 960px){
  justify-content: space-between;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  
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

export const Picture = styled.div`
width: 30vw;
height: inherit;
border-radius: 0 10px 10px 0;
background-color: blue;
background: url(${image});
background-size: 472px 920px;
background-repeat: no-repeat;
background-position: center; 


@media only screen and (max-width: 960px){
  background: none;
  
}
`
