import styled from "styled-components";


export const ResetBody = styled.div`
    width: 30vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 3%;

    h3{
        text-align: center;
        font-weight: 500;
    }

    p{
        text-align: center;
        color: #C4C4C4;
        font-size: 12px;
        margin-top: 5%;
    }

    img{
        margin-top: 5%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    hr{
        margin-top: 8%;
        outline: 1px solid #C4C4C4;
        border: none;
    }

    @media screen and (max-width: 960px) {
        height: 70vh;
        width: 85vw;
        border-radius: 3px;
        padding: 5%;
}

`