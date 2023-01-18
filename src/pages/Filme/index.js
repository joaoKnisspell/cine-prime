import { useParams } from "react-router-dom";
import { MovieContainer } from "./style";
import api from '../../sevices/api';
import { useEffect, useState } from 'react';
import { Subtitulo } from "../../components/Subtitulo";
import { Title } from '../../components/Title';
import { toast } from 'react-toastify';

const Filme = () => {

const parametros = useParams();
const [filme, setFilme] = useState();
const [loading, setLoading] = useState(true);

useEffect(() => {
    async function loadMovie(){
       const response = await api.get(`/movie/${parametros.id}`, {
        params:{
            movie_id: parametros.id,
            api_key:'5d5a276bab6970c04262855a3a6bb946',
            language:'pt-BR'
        }
        })
        setFilme(response.data)
        setLoading(false)
    }
    loadMovie();
}, [parametros])

const handleSaveMovie = (filme) => {
    const minhaLista = localStorage.getItem("@filmes");
    const filmesSalvos = JSON.parse(minhaLista) || [];
    
    const ehFavorito = filmesSalvos.some((filmeFavorito) => filmeFavorito.id === filme.id);
    if(ehFavorito){
        toast.warn("Este filme já está na lista de favoritos!")
    }else{
        toast.success("Filme adicionado aos favoritos!")
        filmesSalvos.push(filme)
    }

    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos))
}


  return (
    <MovieContainer>
        {loading ? <Subtitulo>Carregando filme...</Subtitulo> : 
        <main>
            <Title>{filme.title}</Title>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} />
            <div className="texto">
                <div className="rate">
                    <Subtitulo style={{padding:'0'}}>Resenha:</Subtitulo>
                    <p>Avaliação: {filme.vote_average.toFixed(1)}/10</p>
                </div>
                <p>{filme.overview}</p>
            </div>
                <div className="botoes">
                    <a target="blank" href={`https://www.youtube.com/results?search_query=Trailer${filme.title}`}><button className="trailerBtn">Trailer</button></a>
                    <button onClick={() => handleSaveMovie(filme)}>Salvar</button>
                </div>
        </main>
        }
    </MovieContainer>
  )
}

export default Filme