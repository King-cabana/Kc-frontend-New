import styled from "styled-components";


export const SearchBar = styled.div`
    width: 60vw;
    height: 10vh;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #D9D9D9;
    padding: 0 0 0 3%  ;
    /* position: fixed; */
    z-index: 1;

    @media screen and (max-width: 960px){
        width: 80vw;
        height: 8vh;
    }
   
    input{
        height: inherit;
        width: 45vw;
        border: none;
        outline: transparent;
        padding: 1%;
        background-color: transparent;
        color: #D9D9D9;  

        &::placeholder{
        color: #D9D9D9;
    }

    @media screen and (max-width: 960px){
        /* width: ; */
        height: 8vh;
    }
    }

   
`