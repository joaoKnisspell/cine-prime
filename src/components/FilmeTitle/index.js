import styled from "styled-components";

export const MovieTitle = styled.h3`
    font-weight: ${props => props.peso};
    color: var(--branco);
    font-size: 14px;
    line-height: 20px;
    @media screen and (min-width: 1024px){
        font-size: 18px;
    }
`