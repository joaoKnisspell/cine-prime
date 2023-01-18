import styled from "styled-components";

export const FavoritoContainer = styled.div`
    min-height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding:1em 1.5em;
    main, .detalhes{
        display: flex;
        align-items: center;
    }
    main{
        padding: 1em;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        min-height: 300px;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ul{
            list-style-type: none;
            width: 100%;
            .detalhes{
                justify-content: space-between;
                margin-top:10px;
                color: var(--branco);
                .botoes{
                    display: flex;
                    a{
                        text-decoration: none;
                        margin: 0;
                        padding: 0; 
                        color: var(--laranja);

                        }
                    button{
                        cursor: pointer;
                        border: none;
                        color: gray;
                        text-decoration:underline ;
                        color: var(--laranja);
                        background-color: transparent;
                    }
                    .remove{
                        margin-left: 5px;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`