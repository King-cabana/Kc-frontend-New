import styled from "styled-components";
import HappyMan from '../../images/HappyMan.png'

export const HeroSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background: url(${HappyMan}) ;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;

    p{
        font-size:36px;
        color:#484848;
        padding-top:4%;
        text-align:center;
    }


    @media screen and (max-width: 960px){
        background-size: cover;
        background-position: center;
        object-fit: contain;
        height: 65vh;

        p{
            font-size: 18px;
            padding-top:25%;
        }
        
    }   
`

export const ASContentSection = styled.div`
    width: 100vw;
    height: 70vh;
    padding: 2.5% 8%;
    display: flex;
    
    @media screen and (max-width: 960px){
        /* width: 100vw; */
        display: block;
        padding: 0;
        height: fit-content;
    }

   
`

export const ASContent = styled.div`
    width: 50vw;
    height: 60vh;
    padding: 3%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        width: 100vw;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const ASInner = styled.div`
    height:20vh;
    display:flex;
    justify-content:space-between;


    @media screen and (max-width: 960px){
        height:25vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

    }

`
export const ASInnerImg = styled.div`
    width: 5vw;
`

export const ASImage = styled.div`
    width: 50vw;
    height: 60vh;
    padding: 8%;
    background: ${props => `url(${props.img})`} ;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    background-repeat: no-repeat;


    @media screen and (max-width: 960px){
        width: 96%;
        display: inline-block;
        margin: 2%;
    }
`

export const TCContainer = styled.div`
    justify-content:center;
    width:100vw;
    padding:2% 8%;
    height:85vh;
    display:inline-flex;
    flex-wrap:wrap;
    gap:3% 1%;
   
    
    @media screen and (max-width: 960px){
    overflow: scroll;
    scroll-snap-type: x mandatory;
    /* scroll-behavior: smooth; */
    gap: 3%;
    display: flex;
    flex-direction:column;
    height: 45vh;
    
  
}
`