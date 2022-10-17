import styled from "styled-components";

export const ResetSignInBody = styled.div`
    width: 30vw;
    height: 60vh;
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

    @media screen and (max-width: 960px) {
        height: 70vh;
        width: 85vw;
        border-radius: 3px;
        padding: 5%;
}
`