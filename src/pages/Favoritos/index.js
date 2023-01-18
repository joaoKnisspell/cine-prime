import { FavoritoContainer } from "./style";
import { Title } from '../../components/Title';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Favoritos = () => {

    const filmesSalvos = localStorage.getItem("@filmes")
    const [favoritos, setFavoritos] = useState(JSON.parse(filmesSalvos) || []);

    const handleDeleteMovie = (id) => {
        let novaLista = favoritos.filter((favorito) => favorito.id !== id);
        setFavoritos(novaLista)
        localStorage.setItem("@filmes", JSON.stringify(novaLista))
        toast.success("Filme removido com sucesso!")
    }

  return (
    <FavoritoContainer>
        <main>
            <Title>Meus Favoritos</Title>
            <ul>
                {favoritos.map((favorito) => {
                    return(
                        <li key={favorito.id}>
                            <div className="detalhes" >
                                <p>{favorito.title}</p>
                                <div className="botoes">
                                <button><Link to={`/filme/${favorito.id}`}>Detalhes</Link></button>
                                <button onClick={() => handleDeleteMovie(favorito.id)} className="remove">Excluir</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    </FavoritoContainer>
  )
}

export default Favoritos