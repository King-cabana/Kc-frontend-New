import styled from "styled-components";
import lady from "../../../images/helena-lopes-wg_bj8WQiko-unsplash.jpg"



export const ForgetPasswordBody = styled.div`
    height: 80vh;
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

        height: 55vh;
        width: 85vw;
        border-radius: 3px;

    }

`

export const ForgetPasswordContent = styled.div` 
    height: inherit;
    width: 30vw;
    padding: 5%;
    
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    h3{
        margin-top: 5%;
        font-size: 18px;
        font-weight: 600;

    }
    p{  
        margin-top: 5%;
        font-size: 12px;
        width: 20vw;
        
    }

    @media screen and (max-width: 960px){
        width: inherit;

    h3{
        font-size: 14px;
    }    
    
    p{  
        width: 55vw;
    }

}
`

export const ForgetPasswordImage = styled.div`
    height: inherit;
    width: 30vw;
    border-radius: 0 10px 10px 0;
    background: url(${lady}) ;
    background-repeat: no-repeat;
    background-size: 769.5px 513px ;
    background-position: center;
    object-fit: center;

    /* img{
        max-width: 100%;
    } */

    @media screen and (max-width: 960px){
        display: none;
    }
    
    `

  