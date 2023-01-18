import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 120px);
    color: var(--branco);
    gap: 0.5em;
    h1{
        margin: 0;
        padding: 0;
    }
    a{
        background-color: var(--laranja);
        color: var(--branco);
        text-decoration: none;
        padding: 0.5em 1em;
        margin-top: 0.5em;
        border-radius: 4px;
        opacity: 0.9;
    }
    a:hover{
        opacity: 1;
    }
    @media screen and (min-width: 1024px){
        h1{
            font-size: 64px;
        }
        h2{
            font-size: 45px;
        }
        a{
            font-size: 20px;
        }
    }
`

const NotFound = () => {
  return (
    <Container>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <NavLink to="/">Página Inicial</NavLink>
    </Container>
  )
}

export default NotFound