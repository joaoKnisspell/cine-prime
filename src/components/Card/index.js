import { CardContainer } from "./style";
import { MovieTitle } from "../FilmeTitle";
import { Link } from "react-router-dom";

const Card = ({ title, imagem, alt, id }) => {
  return (
    <CardContainer>
    <img src={`https://image.tmdb.org/t/p/original${imagem}`} alt={alt} />
    <MovieTitle peso="400">{title}</MovieTitle>
    <Link to={`filme/${id}`}>Ver detalhes</Link>
    </CardContainer>
  )
}

export default Card