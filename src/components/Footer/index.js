import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--cor-fundo);
    color: var(--laranja);
    width: 100vw;
    height: 60px;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0  1.2em;
        list-style: none;
        margin-top: 10px;
        a{
            color: var(--laranja);
            font-size: 25px;
        }
}
`

const Footer = () => {
  return (
    <FooterContainer>
        <ul>
            <li><a target='blank' href="https://www.linkedin.com/in/joaoknisspell/"><AiFillLinkedin/></a></li>
            <li><a target='blank' href="https://github.com/joaoKnisspell"><BsGithub/></a></li>
        </ul>
        <p>Desenvolvido por João Knisspell.</p>
    </FooterContainer>
  )
}

export default Footer