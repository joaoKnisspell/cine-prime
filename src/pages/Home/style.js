import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: var(--preto);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:1em;
    hr{
        width: 100%;
        margin-top: 5px;
        height: 5px;
        background-color: var(--laranja);
        border: none;
    }
    color: var(--branco);
    @media screen and (min-width:1024px){
        padding: 1em 5%;
        p{
            font-size: 18px;
        }
    }
    @media screen and (min-width:1400px){
        padding: 1em 13%;
    }
`