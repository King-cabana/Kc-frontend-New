import styled from "styled-components";

export const ContactBody = styled.div`
display: flex;
margin: 5% auto;
border: 1px solid rgba(0, 0, 0, 0.2);
height: 120vh;
width: 82vw;

@media only screen and (max-width: 960px){
    border: none;
}


`


export const LeftSide = styled.div`
width: 30vw;
height: 120vh;
color: white;
background-color: #FF2957;
padding-top: 8%;
padding-left: 4%;
padding-right: 13%;
font-size: 105%;

h1{
    font-size: 90%;
    width: 50vw;
    padding-bottom: 5%;
}

@media only screen and (max-width: 960px){
    display: none;

}



`

export const ContactLog = styled.div`


`

export const Mail = styled.div`
margin-top: 15%;
display: flex;
width: 14vw;
justify-content: space-between;
`


export const EmailUsTextHolder = styled.div`
    height: 8vh;
    width: 11vw;

`

export const Location = styled.div`
   margin-top: 15%;
   display: flex;
   width: 14vw;
   justify-content: space-between;

`

export const LocationTextHolder = styled.div`
    height: 8vh;
    width: 11vw;

    p{
        width: 50vw;
    }

`

export const Phone = styled.div`
   margin-top: 15%;
   display: flex;
   width: 14vw;
   justify-content: space-between;

`

export const PhoneHolder = styled.div`
    height: 8vh;
    width: 11vw;
`

export const RightSide = styled.div`
width: 52vw;
padding: 5%;

h1{
  text-align: center; 
  width: 35vw;
}
   
 @media only screen and (max-width: 960px){
    h1{
        margin: auto;
        width: 65vw;
        padding: 5%;
    }
 }

`

export const ContactForm = styled.div`
width: 35vw;
margin-top: 5%;
justify-content: space-between;

@media only screen and (max-width: 960px){
    margin-top: 5%;
}


`

export const Name = styled.div`
width: 35vw;
display: flex;
justify-content: space-between;


@media only screen and (max-width: 960px){
    display: block;
    width: 75vw;
    /* margin-top: 15%; */
    /* height: 8vh; */
}
`

export const NameHolder = styled.div`
  input{
    padding: 2%;
    width: 17vw;
    height: 5vh;
    justify-content: space-around;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
    @media only screen and (max-width: 960px){
       margin-top: 10%;
       /* padding-top: 10%; */
        input{
            width: 75vw;
            height: 8vh;
            
        }
    }
  


`

export const LastNameHolder = styled.div`
  
  input{
    padding: 2%;
    width: 17vw;
    height: 5vh;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
 
@media only screen and (max-width:960px ){
   margin-top: 10%;
    input{
        width: 75vw;
        height: 8vh;
    }
}
    
`
   

export const EmailHolder = styled.div`
margin-top: 5%;

input{
    padding: 2%;
    width: 35vw;
    height: 8vh;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 960px){
  margin-top: 20%;
  input{ 
    width: 75vw;
    height: 8vh;
} 
}

`

export const NumberHolder = styled.div`
margin-top: 5%;

input{
    padding: 2%;
    width: 35vw;
    height: 8vh;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
    @media only screen and (max-width: 960px){
    margin-top: 20%;
        input{
            width: 75vw;
            height: 8vh;
        }
    }

`

export const Message = styled.div`
margin-top: 5%;

textarea{
    width: 35vw;
    height: 25vh;
    padding: 3%;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    resize: none;
}

  @media only screen and (max-width:960px){
    margin-top: 20%;
   
    textarea{
        width: 75vw;
    }
  }
`
  export const LongButton =styled.button`
    width: 35vw;
    margin-top: 8%;
    height: 7vh;
    background-color: #FF2957;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media only screen and (max-width: 960px){
        width: 75vw;
        margin-top: 25%;
    }
`  