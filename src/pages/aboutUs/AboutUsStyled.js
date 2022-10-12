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
        background-size: contain;
        object-fit: contain;

        p{
            font-size: 18px;
            padding-top:40%;
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
        display: inline-block;
        padding: 0;
    }

   
`

export const ASContent = styled.div`
    width: 50vw;
    height: 60vh;
    padding: 3%;

    @media screen and (max-width: 960px){
        width: 100vw;
        display: inline-block;
    }
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
    gap: 3%;
    display: flex;
}
`