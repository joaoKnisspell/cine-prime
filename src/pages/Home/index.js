import { Container } from "./style"
import { Title } from "../../components/Title";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import api from '../../sevices/api';
import Card from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import {Subtitulo} from '../../components/Subtitulo';

const Home = () => {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadApi(){
      const response = await api.get("/movie/now_playing", {
        params:{
          api_key:"5d5a276bab6970c04262855a3a6bb946",
          language:"pt-BR",
          page:1,
        }
      })
      setFilmes(response.data.results.slice(0,15))
      setLoading(false)
    }
    loadApi()
  }, [])

  return (
    <Container>
      {loading ? <Subtitulo>Carregando filmes...</Subtitulo> : 
        <>
          <Title>Descubra</Title>
          <p>O que você quer assitir hoje?</p>
          <Banner />
          <Subtitulo>Últimos Lançamentos</Subtitulo>
          <hr/>
          <CardsContainer>
            {filmes.map((filme) => {
              return(
                <Card key={filme.id} id={filme.id} title={filme.title} imagem={filme.backdrop_path} alt={filme.title} />
            )
            })}
        </CardsContainer>
      </>
      }

    </Container>
  )
}

export default Home
