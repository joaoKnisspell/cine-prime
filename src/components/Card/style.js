import styled from "styled-components";

export const CardContainer = styled.article`
    width: 180px;
    //height: 286px;
    display:flex;
    gap: .5em;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    img{
        height: 250px;
        width: 100%;
        object-fit: cover;
    }   
    a{
        text-decoration: none;
        color: #00ced1;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
    }
`