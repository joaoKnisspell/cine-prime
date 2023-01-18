import styled from "styled-components";
import { MdLocalMovies } from 'react-icons/md';
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    align-items: center;
    background-color: var(--cor-fundo);
    a{
      text-decoration: none;
        font-weight: 700;
        font-size: 22px;
        color: #ff8c00;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }
    button{
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid var(--laranja);
      color: var(--laranja);
      cursor: pointer;
      font-weight: 500;
      transition: .4s;
    }
    button:hover{
      background-color: var(--laranja);
      color: var(--branco);
    }
    @media screen and (min-width:1024px){
      padding: 0em 5%;
    }
    @media screen and (min-width: 1400px){
      padding:0 13% ;
    }
`

const Header = () => {
  return (
    <NavContainer>
      <div className="logo">
        <Link to="/"> <MdLocalMovies /> CinePrime</Link>
      </div>
        <Link to="/favoritos"><button>Meus favoritos</button></Link>
    </NavContainer>
  )
}

export default Header