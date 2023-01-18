import styled from "styled-components";

export const MovieContainer = styled.div`
    min-height: calc(100vh - 120px);
    background-color: var(--preto);
    display: flex;
    justify-content:center;
    align-items: flex-start;
    main{
        padding: 2em 1em;
        width: 800px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        .header{
            display: flex;
            justify-content: space-around;
        }
        img{
            width: 100%;
            max-height: 380px;
            object-fit: cover;
        }
        p{
            color: var(--branco);
            text-align: justify;
        }
        .rate{
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-weight: bold;
        }
    }
    .botoes{
        .trailerBtn{
            margin-right:10px;
            background-color: var(--laranja);
            color: var(--branco);
            
        }
        button{
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            font-weight:500;
            font-family: 'Popins', sans-serif;
            opacity: .9;
            background-color: transparent;
            border: 1px solid var(--laranja);
            color: var(--laranja);
            cursor: pointer;
        }
        button:hover{
            opacity: 1;
        }
    }
}
`