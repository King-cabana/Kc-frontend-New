import styled from "styled-components"

export const App = styled.div`
/* margin: auto; */
/* width: max-content; */
height: max-content;
display: flex;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
font-family: 'Poppins', sans-serif;

@media only screen and (max-width: 960px){
 width: max-content;
 box-shadow: none;
 height: max-content;
}
`
export const NavMobile = styled.div`
  display: none;

  @media only screen and (max-width: 960px){
    display: none;
    /* width: 10vw; */
  }
`
export const BellHolder = styled.div`
 @media only screen and (max-width: 960px){
  display: none;
 }
`
export const ArrowHolder = styled.div`
 @media only screen and (max-width: 960px){
  display: none;
 }
` 


export const RightSide = styled.div`
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
width: 30vw;
height: 250vh;

h1{
    font-size: 70%;
    margin-top: 15%;
    margin-left: 5%;
}

@media only screen and (max-width: 960px){
  display: none;
  /* box-shadow: none;
  width: 100vw;
  height: 8vh;
  border: 1px solid rgba(0, 7, 20, 0.1); */
}


`
export const HorizontalTags = styled.div`
  width: 141px;
  height: 0px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  background-color: #000000;
  margin: auto;

  @media only screen and (max-width: 960px){
   display: none;

  }
`

export const LogoHolder = styled.div`
h2{
  font-size: 18px;
  margin-left: 2%;
}
@media only screen and (max-width:960px){
  h1{
    display: none;
  }
   h2{
    display: none;
   }
 }
`
export const HelpTag =styled.div`
  display: flex;
  p{
  padding-left: 5%;
}

@media only screen and (max-width:960px){
  display: none;
 }

`

export const SettingTag = styled.div`
  display: flex;

  p{
  padding-left: 5%;
}

@media only screen and (max-width:960px){
  display: none;
 }

`

export const EventManagement = styled.div`
  display: flex;
  margin-left: 5%;

  :hover{
  background-color: #0068FF;
  color: white;
 }
 
p{
  color:rgba(0, 0, 0, 0.4);
  font-size: 13px;
  width: 10vw;
  
  :hover{
    color: white;
  }
  
}

@media only screen and (max-width:960px){
  display: none;
 }
  
`

export const CreateEvent = styled.div`
   display: flex;
   margin-right: 8%;

   @media only screen and (max-width:960px){
  display: none;
  p{
    display: none;
  }
 }

`
export const EventProposal = styled.div`
  display: flex;
  margin-right: 8%;
  
  @media only screen and (max-width:960px){
  display: none;
 }

`

export const Reportmgt = styled.div`
  display: flex;
  margin-left: 7%;
  p{
    width: 12vw;
    font-size: 14px;
    /* margin-left: 5%; */
  }

  @media only screen and (max-width:960px){
  display: none;
 }
`

export const Image = styled.div`
 width: 74px;
 height: 74px;
 border: 1px solid rgba(0, 0, 0, 0.05);
 border-radius: 50px;
 margin: auto;
 margin-top: 5%;

 img{
  padding-left: 15%;
  padding-top: 15%;
 }

 @media only screen and (max-width: 960px){
  display: none;
 }


`
export const Picture = styled.div`
 display: none;
 

 @media only screen and (max-width: 960px){
  margin-left: 95px;
  margin-top: 5px;
  display: flex;


 }
`


export const LeftSide = styled.div`
width: max-content;

@media only screen and (max-width: 960px){
 
  
}


`

export const CreateEventHolder = styled.div`
width: 85vw;
height: 8vh;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;

p{
    /* margin: auto; */
    padding-top: 1%;
    padding-left: 4%;
}

 @media only screen and (max-width:960px){
  /* display: block; */
  box-shadow: none;
  p{
    display: none;
  }
 }
`
export const PictureHolder = styled.div`
 margin-top: 2%;
 margin-right: 5%;
 width: 20px;
 height: 20px;
 border: 1px solid #D9D9D9;
 border-radius: 50%;

 @media only screen and (max-width:960px){
  display: flex;
 }

`

export const EventHolder = styled.div`
display: flex;
justify-content: space-between;
width: 26vw;


h1{
    width: 40vw;
    margin-left: 13%;
    font-size: 100%;
    font-weight: normal;
    color:rgba(0, 0, 0, 0.4);
}

p{
    width: 40vw;
}

@media only screen and (max-width:960px){
  display: none;
 }

`



export const PhotoHolder = styled.div`
  margin: 5%;

  h1{
    font-size: 100%;
  }

  @media only screen and (max-width:960px){
    /* margin: 10%; */
    width: 100vw;

    h1{
      margin-top: 14%;
    }
  
 }
`

export const Photo = styled.div`
   border: 1px solid #D9D9D9;
   height: 50vh;
   width: 80vw;
   border-style: dashed;
   background: rgba(72, 72, 72, 0.02);
   border-radius: 6px;

   img{
    padding-left: 600px;
    padding-top: 120px;
    size: 100px;
   }

   @media only screen and (max-width:960px){
  /* margin: auto; */
  width: 93vw;
  height: 30vh;
  img{
    align-items: center;
    size: 100px;
    padding-top: 15%;
    padding-left: 35%;
    /* margin-right: 15%; */
  }
 }
`
export const EventFormHolder = styled.div`
  display: flex;
  width: 30vw;

  @media only screen and (max-width:960px){
  display: block;
 }

 p{
  padding-top: 5%;
 }
`


export const EventSource = styled.div`
width: 60vw;
margin-left: 5%;
/* padding-top: 5%; */



input{
   
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}

div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

@media only screen and (max-width:960px){
  display: block;
  

 input{
  /* padding-bottom: 4%; */
  /* height: 7vh; */
  padding-top: 1%;
  /* width: 95vw; */

 } 

 div{
  display:flex;
  width: 95vw;
  height:8vh;


 }
 }

 

`

export const EventCounts = styled.div`
 width: 60vw;
 margin-left: 5%;
 /* display: flex; */

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
 
}

div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

@media only screen and (max-width:960px){
  display: block;

  input{
   padding-top: 1%;
  /* width: 95vw;
  height: 7vh; */
 
 }

 div{
  display:flex;
  width: 95vw;
  height: 8vh;
 }

}
`
export const EventDescription = styled.div`
    width: 60vw;
    margin-left: 3%;

    textarea{
    /* padding-left: 5%; */
    width: 81vw;
    height: 25vh;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    resize: none;
 
} 

@media only screen and (max-width:960px){
  display: block;

 textarea{
  width: 95vw;
 } 
 }

 
`
export const Word = styled.div`
  color: blue;
  margin-left: 3%;


  @media only screen and (max-width:960px){
  /* display: none; */
 }
`

export const NextBtn= styled.div`
  width: 5vw;
  height: 5vh;
  background: #FF2957;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 3%;
  padding-top: 1%;
  margin-left: 3%;
  margin-top: 4%;

  @media only screen and (max-width:960px){
  display: block;
  width: 20vw;
  padding-left: 10%;
 }
`
