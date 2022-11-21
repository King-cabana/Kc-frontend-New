import styled from "styled-components";

export const ContactBody = styled.div`
display: flex;
margin: 1% auto;
border: 1px solid rgba(0, 0, 0, 0.2);
height: 120vh;
width: 72vw;
border-radius: 7px;


@media only screen and (max-width: 960px){
    border: none;
    width: 95vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 120vh;
}
`

export const LeftSide = styled.div`
width: 30vw;
height: inherit;
color: white;
background-color: #FF2957;
padding: 10% 5%;
border-radius: 7px 0 0 7px  ;

@media only screen and (max-width: 960px){
    display: none;

}
`

export const ContactLog = styled.div`
height: 40vh;
width: 20vw;
margin-top: 20%;
`


export const Mail = styled.div`
margin-top: 5%;
display: flex;
width: 18vw;
justify-content: space-between;

p{
    font-size: 12px;
}
`

export const EmailUsTextHolder = styled.div`
    height: 8vh;
    width: 15vw;

`

export const RightSide = styled.div`
width: 42vw;
padding: 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    h1{
    text-align: center; 
    font-size: 26px;
    font-weight:500;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }

 @media only screen and (max-width: 960px){
    width: inherit;

    p{
        font-size: 12px;
        font-weight: 600;
    }

    h1{
    text-align: center; 
    font-size: 20px;
    }
    
}

`

export const ContactForm = styled.div`
width: inherit;
padding: 5%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
height: inherit;

`

export const Name = styled.div`
width: 35vw;
display: flex;
justify-content: space-between;


@media only screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
    padding: 2%;
}
`

export const NameHolder = styled.div`

  input{
    padding: 2%;
    width: 17vw;
    height: 7vh;
    outline: transparent;
    justify-content: space-around;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
    @media only screen and (max-width: 960px){
      
        input{
            width: 90vw;
            height: 7vh;
            
        }
    }
`

export const LastNameHolder = styled.div`
  
  input{
    padding: 2%;
    width: 17vw;
    height: 7vh;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: transparent;
}
 
@media only screen and (max-width:960px ){
   margin-top: 10%;
        input{
            width: 90vw;
            height: 7vh;
        }
}

`


export const NumberHolder = styled.div`
margin-top: 5%;

input{
    padding: 2%;
    width: 35vw;
    height: 7vh;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: transparent;
}
    @media only screen and (max-width: 960px){
    margin-top: 8%;
        input{
            width: 90vw;
            height: 7vh;
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
    outline: transparent;
}

  @media only screen and (max-width:960px){
    margin-top: 10%;
   
    textarea{
        width: 90vw;
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
        width: 90vw;
        margin-top: 10%;
    }
`  