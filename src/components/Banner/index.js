import { Destaque } from "./style"
import {MovieTitle} from "../FilmeTitle/"
import api from "../../sevices/api"
import { useEffect, useState } from "react"
import {Subtitulo} from '../../components/Subtitulo';

const Banner = () => {

  const [filmeFavorito, setFilmeFavorito] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie(){
      const response = await api.get("/movie/453395", {
        params:{
          api_key:"5d5a276bab6970c04262855a3a6bb946",
          language:"pt-BR",
          movie_id:"453395"
        }
      })
     setFilmeFavorito(response.data);
     setLoading(false)
    }
    loadMovie()
  }, [])

  return (
    <>
        {loading ? <Subtitulo>Carregando destaque...</Subtitulo> : 
        <Destaque>
            <div className="fade"></div>
            <div className="destaque-text">
            <MovieTitle peso="600">{filmeFavorito.title}</MovieTitle>
            <p>{filmeFavorito.overview}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${filmeFavorito.backdrop_path}`} alt="teste" /> 
        </Destaque>
        }
  </>
  )
}

export default Banner