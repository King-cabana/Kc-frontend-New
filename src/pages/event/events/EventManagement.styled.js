import styled from "styled-components"

export const App = styled.div`
/* margin: auto; */
/* width: max-content; */
width: 100vw;
height: 200;
display: flex;
/* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1); */
font-family: 'Poppins', sans-serif;

@media only screen and (max-width: 960px){
 width: max-content;
 height: fit-content;

}
`



export const RightSide = styled.div`
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
width: 15vw;
height: inherit;

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
width: 70vw;

@media only screen and (max-width: 960px){
 width: 100vw;
  
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
  width: inherit;
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

export const ResearchCategoryHolder = styled.div`
margin-top: 2%;
width: 84vw;
display: flex;
justify-content: space-between;

h1{
    font-size: 20px;
    font-weight: 600;
    padding-left: 3%;
  
}

h2{
    font-size: 20px;
    padding-right: 3%;
}

@media only screen and (max-width: 960px){
  width: 94vw;
  display: flex;
  justify-content: space-between;
  h1{
    font-size: 10px;
    /* width: 158px; */
    
  }

  h2{
    font-size: 10px;
  }
}

`
export const VerticalLine = styled.div`
 width: 1226px;
 height: 0px;
 border: 1px solid rgba(72, 72, 72, 0.1);
 margin: 3%;

 @media only screen and (max-width: 960px){
  /* border: none; */
  width:330px;

 }
`
export const EventNameHolder = styled.div`
margin-left: 2%;
margin-top: 3%;

input{ 
    padding-top: 0.5%;
    padding-left: 1%;
    width: 75vw;
    outline: none;
    border: none;
    background: rgba(72, 72, 72, 0.02);
}

div{
  display: flex;
  width: 81vw;
  height: 9vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

h1{
  font-weight: 400;
  font-size: 10px;
}

h2{
  width: 5vw;
  height: 4vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 8px;
  font-style: normal;
  color: rgba(72, 72, 72, 0.52);
  padding-top: 0.7%;
  padding-left: 1.7%;
  margin-left: 1%;
  margin-top: 1.5%;
  font-weight: 400;
  background: rgba(72, 72, 72, 0.02);
}

p{
  font-size: 12px;
}

@media only screen and (max-width: 960px){
  div{
    width: 93vw;
  }

  input{
    width: 70vw;
    padding-left: 2%;
  }

  h2{
    width: 17vw;
    height: 5vh;
    font-size: 12px;
    padding-top: 2%;
    padding-left: 2%;
    margin-top: 3%;
  }

  p{
    font-weight: 400;
    font-size: 10px;
    color: rgba(72, 72, 72, 0.52);
  }

}
`

export const EventFormHolder = styled.div`
  margin-top: 3%;
  h1{
    margin-top: 2%;
    margin-left: 2%;
    font-size: 20px;
  }
  
  @media only screen and (max-width: 960px){
    margin-top: 3%;
  }
   
`
export const EventFolder = styled.div`
  margin-left: 2%;
  width: 73vw;
  display: flex;

  @media only screen and (max-width: 960px){
   display: block;
   
  }
`

export const AttendanceHolder = styled.div`
display: block;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
p{
  font-size: 10px;
}
@media only screen and (max-width: 960px){
  margin-top: 2%;
  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  }
`
export const SponsorHolder = styled.div`
display: block;
margin-left: 2%;

div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}

p{
  font-size: 10px;
}

 @media only screen and (max-width: 960px){
  margin-top: 3%;
  margin-left: 2%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }
`
export const EventSource = styled.div`
  width: 70vw;
  display: flex;

  @media only screen and (max-width: 960px){
    display: block;
  }

`
export const EventListHolder = styled.div`
display: block;
margin-top: 2%;
margin-left: 2%;

div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}

p{
  font-size: 10px;
}

@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }

`
export const EventSourceHolder = styled.div`
  display: block;
  margin-left: 2%;
  margin-top: 2%;

  div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}

p{
  font-size: 10px;
}

@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }
`


export const EventCounts = styled.div`
 display: flex;
 margin-top: 2%;

 @media only screen and (max-width: 960px){
  display: block;
 }
 
`
export const EventDateHolder = styled.div`
  display: block;
  margin-left: 2%;

  div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}

p{
  font-size: 10px;
}

@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }

`
export const EventTimeHolder = styled.div`
  display: block;
  margin-left: 2%;

  div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}


p{
  font-size: 10px;
}

@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }
`

export const EventDescription = styled.div`
    margin-top: 2%;
    margin-left: 2%;

    textarea{
    /* padding-left: 5%; */
    width: 81vw;
    height: 25vh;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    margin-top: 2%;
    background: rgba(72, 72, 72, 0.02);
    resize: none;
} 

   h1{
    font-size: 20px;
   }

   p{
    font-size: 10px;
    padding-top: 1%;
   }

   @media only screen and (max-width: 960px){
  margin-top: 3%;
  h1{
    font-size: 16px;
  }
  textarea{
    width: 93vw;
    padding-left: 2%;
  }
  
 }
`

export const EventSponsorHolder = styled.div`
   margin-left: 2%;
   margin-top: 2%;
textarea{
/* padding-left: 5%; */
width: 81vw;
height: 25vh;
border-radius: 6px;
border: 1px solid rgba(0, 0, 0, 0.2);
outline: none;
margin-top: 2%;
background: rgba(72, 72, 72, 0.02);
resize: none;
} 

h1{
font-size: 20px;
/* margin-top: 1%; */
}

p{
font-size: 10px;
margin-top: 1%;
}


@media only screen and (max-width: 960px){
  margin-top: 3%;
  h1{
    font-size: 16px;
  }
  textarea{
    width: 93vw;
    padding-left: 2%;
  }
}
`
export const ContactHolder = styled.div`
 margin-left: 2%;
 margin-top: 2%;

div{
display: flex;
width: 81vw;
height: 8vh;
border: 0.5px solid rgba(72, 72, 72, 0.7);
border-radius: 6px;
margin-top: 2%;
background: rgba(72, 72, 72, 0.02);
}

input{
width: 80vw;
border: none;
outline: none;
border-radius: 0 5px 5px 0;
background: rgba(72, 72, 72, 0.02);
}

h1{
font-size: 20px;
}

p{
font-size: 10px;
padding-top: 1%;
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }

`
export const SecondaryInfoHolder = styled.div`
margin-top: 3%;
 margin-left: 2%;
h1{
  font-size: 20px;
}
p{
  font-size: 10px;
}

`
export const InfoHolder = styled.div`
margin-top: 2%;
 display: flex;
 width: 80vw;

 @media only screen and (max-width: 960px){
  display: block;
 }

`

export const ListHolder = styled.div`
display: block;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
    padding-left: 2%;
  }
  
 }

`

export const OfficeHolder = styled.div`
   display: block;
   margin-left: 1%;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }
`
export const DepartmentOfficeHolder = styled.div`
margin-top: 2%;
 display: flex;
 width: 80vw;

 @media only screen and (max-width: 960px){
  display: block;
 }
`
export const DepartmentHolder = styled.div`
 display: block;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }
`
export const Office = styled.div`
   display: block;
   margin-left: 1%;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  border-radius: 0 5px 5px 0;
  width: 39vw;
  border: none;
  outline: none;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }
`
export const EmailPhoneHolder = styled.div`
margin-top: 2%;
 display: flex;
 width: 80vw;

 @media only screen and (max-width: 960px){
  display: block;
 }
 
 
`

export const EmailHolder = styled.div`
 display: block;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }

`

export const PhoneHolder = styled.div`
   display: block;
   margin-left: 1%;


div{
  display: flex;
  width: 40vw;
  height: 8vh;
  border: 0.5px solid rgba(72, 72, 72, 0.7);
  border-radius: 6px;
  margin-top: 2%;
  background: rgba(72, 72, 72, 0.02);
}

input{
  width: 39vw;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  background: rgba(72, 72, 72, 0.02);
}
@media only screen and (max-width: 960px){
  margin-top: 3%;

  div{
    width: 93vw;
  }

  input{
    width: 90vw;
  }
  
 }

`
export const ButtonHolder = styled.div`
  margin-top: 5%;
  display: flex;
  width: 84vw;
  justify-content: space-between;

  @media only screen and (max-width:960px){
    width: 97vw;
  }

`

export const PrevBtn = styled.div`
  width: 5vw;
  height: 5vh;
  background: #FF2957;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 1.5%;
  padding-top: 0.7%;
  margin-left: 1.5%;
  margin-top: 4%;

@media only screen and (max-width: 960px){
  width: 20vw;
  margin-left: 2.5%;
  padding-left: 4%;
  padding-top: 2%;
}
`


export const NextBtn= styled.div`
  width: 5vw;
  height: 5vh;
  background: #FF2957;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 1.8%;
  padding-top: 0.7%;
  margin-right: 2%;
  margin-top: 4%;

  @media only screen and (max-width:960px){
  margin-right: none;
  width: 20vw;
  padding-left: 5%;
 }
`