import styled from "styled-components"
import image from "../../../images/image1.jpg"


export const ModalOverlay = styled.div`

    width: 100vw;
    height: 100vh;
    background: rgba(49,49,49,0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  @media only screen and (max-width: 960px){
    background-color: none;
    background: none;
  
  }  
`

export const App = styled.div`
  width:60vw;
  height: 80vh;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  background: rgba(49,49,49,0.8);


 @media only screen and (max-width:960px){
    margin-top: 25%;
    width: 90vw;
    /* border: none; */
    /* box-shadow: none; */
    /* margin: auto; */
    
   
   
    
 } 

`

export const Div1 = styled.div`

 width: 30vw;
 height: 80vh;
 border-radius: 10px 0 0 10px;
 background-color: white;

 


 @media only screen and (max-width:960px){
  background-color: white;
  /* margin: auto; */
  
  img{
    margin-top: 5%;
  }
 
 }
`


export const Media = styled.div`
 background-color: white;
 display: flex;
 justify-content: space-between;
 width: 15vw;
 height: 5vh;
 margin-left: 25%;
 background-color: white;
 
 @media only screen and (max-width: 960px){
  margin-top: 25%;
  margin-left: 57%;
  justify-content: space-between;
  width:50vw;
  display: flex;
  align-content: space-between;
 }

`






export const Image = styled.div`
background-color: white;
margin: 5%;
 img{
  
  display: block;
  margin-left: auto;
  margin-right: auto;
 }
 
  
  @media only screen and (max-width: 960px){
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25%;

  } 

`





export const SocialIconsHolder = styled.div`
  
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  


  @media only screen and (max-width: 960px) {
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    flex-direction: column;

    img{
      width: 25px;
      height:25px;
    }
    /* padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%; */

    
  }
`

export const Div = styled.div`
 margin: 5%;
 display: flex;
 align-items: center;
 width: 30vw;
 padding: 2%;
 /* margin-left: 5%; */
/* margin-right: 15%; */

@media only screen and (max-width:960px){
  width: 80vw;

}

`




export const Horizontal = styled.div`
 width: 40vw;
 
 height: 0.2vh;
 background-color: #C4C4C4;
  
 @media only screen and (max-width:960px){
   width: 50vw;
   
 } 

`

export const Or = styled.div`
width: 10vw;
padding-left: 5%;
padding-right: 3%;


@media only screen and (max-width:960px){
  padding: 5%;

}


`



export const Form1 = styled.div`

 width: 31vw;
 /* height: inherit; */
 margin-left: 5%;
 border-radius: 5px;
 z-index: 1;
 justify-content: center;
 /* padding: 5%; */

 div{
    
        
 }

 input{
 width: 25vw;
  /* height: 5vh; */
  /* border-radius: 5px; */
  /* border: 1px solid #d9d9d9; */
  height: inherit;
  width: 25vw;
  border: none;
  outline: transparent;
  padding: 1%;
  

 }

 p{
  margin-top: 2%;
  /* padding-bottom: 0.2%; */

 }

 @media only screen and (max-width: 960px){
  margin-left: 7%;
  /* margin-top: 15%; */

  input{
   width:75vw;
   height: 5vh;
   
  } 

  p{
    padding-top: 5%;
  }

 }


`

export const Mail = styled.div`
    display: flex;
    height: 7vh;
    outline: 1px solid #C4C4C4;
    border-radius: 4px;
    margin-top: 2%;
    width: 25vw;

 @media only screen and (max-width: 960px){
  width: 80vw;
  padding: 5%;
 }
  
  
`

export const Password = styled.div`
    display: flex;
    height: 7vh;
    outline: 1px solid #C4C4C4;
    border-radius: 4px;
    margin-top: 2%;
    width: 25vw;

  @media only screen and (max-width: 960px){
    width:80vw;
    padding: 5%;
  }  

`

export const Forgot =styled.div`

    margin-right: 19%;
    text-align: right;
    margin-top: 2%;


    a{
        color: blue;
        /* text-decoration: none; */
        
    }



@media only screen and (max-width:960px){
    /* margin-right: %; */
    display: flex;
    width: 98vw;
    font-size: 15px;
    
    a{
        color: blue;
        text-decoration: none;
        text-align: right;
        margin-left: 53%;
        margin-top: 2%;
        /* width: 20vw; */
    }
}


`

export const Wont = styled.div`

    margin-top: 2%;
    margin-right: 5%;
    margin-left: 10%;
    color: #C4C4C4;
    

    a{
        color: blue;
    }


@media only screen and (max-width:960px){
    /* text-align: center; */
    margin-top: 5%;
    margin-left: 35%;
    width:85vw;
    font-size: 12px;
    color: #C4C4C4;
    

    a{
        text-decoration: none;
    }
} 



`

export const Button = styled.button`
  width: 26vw;
  height: 5vh;
  background-color: #FF2957;
  color: white;
  border: 1px solid #FF2957;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 5%;
  cursor: pointer;
  
  @media only screen and (max-width: 960px){
    width: 75vw;
    /* margin-right: 30%; */
    margin-left: 13%;
    margin-top: 45%;

  }
`

export const Picture = styled.div`
width: 30vw;
height: inherit;
border-radius: 0 10px 10px 0;
background-color: blue;
background: url(${image});
background-size: 472px 782px;
background-repeat: no-repeat;
background-position: center; 

 @media only screen and (max-width: 960px){

  background: none;
 }

`