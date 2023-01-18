import styled from "styled-components";

export const CardsContainer = styled.section`
padding: 2em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    gap: 2em 2.5em;
    @media screen and (min-width: 1024px) {
        justify-content: space-between;
    }
    @media screen and (min-width: 1500px){
        justify-content: center;
        gap: 2em 4.0em;
    }
`