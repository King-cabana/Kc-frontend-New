import styled from "styled-components"


export const App = styled.div`
height: max-content;
display: flex;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
font-family: 'Poppins', sans-serif;

@media only screen and (max-width:960px){
    box-shadow: none;
}
`
export const RightSide = styled.div`
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
width: 15vw;
height: 250vh;

h1{
    font-size: 70%;
    margin-top: 15%;
    margin-left: 5%;
}
@media only screen and (max-width:960px){
    display: none;
}
`
export const LogoHolder = styled.div`
h2{
  font-size: 18px;
  margin-left: 2%;
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
`
export const EventManagementHolder = styled.div`
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
`

export const CreateEvent = styled.div`
   display: flex;
   margin-right: 8%;
`
export const EventProposalHolder = styled.div`
  display: flex;
  margin-right: 8%;
`
export const Reportmgt = styled.div`
  display: flex;
  margin-left: 7%;
`
export const HorizontalTags = styled.div`
  width: 141px;
  height: 0px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  background-color: #000000;
  margin: auto;

`

export const HelpTag = styled.div`
  display: flex;
  p{
  padding-left: 5%;
}
`

export const SettingTag = styled.div`
   display: flex;

p{
padding-left: 5%;
}
`
export const LeftSide = styled.div`
 width: 150vw;
 /* h1{
    margin: 3%;
    font-size: 20px;
 } */
`
export const CreateEventHolder = styled.div`
width: 88vw;
height: 8vh;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;

p{
    /* margin: auto; */
    padding-top: 1%;
    padding-left: 4%;
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
    width: 60vw;
    size: 10px;
}

@media only screen and (max-width: 960px){

}
`
export const PictureHolder = styled.div`

`

export const PhotoHolder = styled.div`
 margin: 3%;

h1{
  font-size: 20px;
}

`
export const Photo = styled.div`
   border: 1px solid #D9D9D9;
   height: 50vh;
   width: 84vw;
   border-style: dashed;
   background: rgba(72, 72, 72, 0.02);
   border-radius: 6px;

   img{
    padding-left: 600px;
    padding-top: 130px;
    size: 100px;
   }
   @media only screen and (max-width:960px){
    display: none;
   }
`
export const EventDescription = styled.div`
 margin: 3%;

 textarea{
    width: 84vw;
    height: 25vh;
    resize: none;
    background: rgba(72, 72, 72, 0.02);
    border-radius: 6px;
    outline: transparent;
 }
 h1{
    font-size: 20px;
 }

 p{
    font-size: 10px;
 }

 @media only screen and (max-width: 960px){
  textarea{
    width: 87vw;
    margin-top: 3%;
  }
  h1{
    font-size: 15px;
  }
 }
`
export const PhoneContactHolder = styled.div`
 margin: 3%;
 display: flex;
 justify-content: space-between;
 width: 84vw;
 @media only screen and (max-width: 960px){
  display: block;
}
`
export const PhoneContact1 = styled.div`
p{
    font-size: 14px;
}
input{
 width: 40vw;
 height: 6vh;
 border-radius: 5px;
 outline: transparent;
 border: 0.5px solid rgba(72, 72, 72, 0.7);
 background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width:960px){
  
}
`
export const PhoneContact2 = styled.div`
p{
    font-size: 14px;
}
input{
 width: 40vw;
 height: 6vh;
 border-radius: 5px;
 border: 0.5px solid rgba(72, 72, 72, 0.7);
 outline: transparent;
 background: rgba(72, 72, 72, 0.02);
}
`
export const BudgetLinkHolder = styled.div`
 margin: 3%;
 display: block;
 justify-content: space-between;
 width: 84vw;

 h1{
    font-size: 20px;
 }
 
`
export const BudgetHolder = styled.div`
 display: flex;
 justify-content: space-between;
 width: 84vw;
 margin-top: 3%;
 @media only screen and (max-width: 960px){
  display: block;
 }
`
export const PresentBudgetHolder = styled.div`

p{
    font-size: 14px;
}
input{
 width: 40vw;
 height: 6vh;
 border-radius: 5px;
 border: 0.5px solid rgba(72, 72, 72, 0.7);
 outline: transparent;
 background: rgba(72, 72, 72, 0.02);
}

`

export const PreviousBudgetHolder = styled.div`
p{
    font-size: 14px;
}
input{
 width: 40vw;
 height: 6vh;
 border-radius: 5px;
 border: 0.5px solid rgba(72, 72, 72, 0.7);
 outline: transparent;
 background: rgba(72, 72, 72, 0.02);
}
`