import styled from "styled-components";

export const Destaque = styled.div`
        width: 100%;
        height: 100%;
        margin-top: 1em;
        position: relative;
        max-height:400px;
        border-radius: 12px;
        .destaque-text{
            position:absolute;
            left: 16px;
            bottom: 15px;
            text-align: justify;
            p{
                font-size: 12px;
            }
        }
        .fade{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(0,0,0,0.6);
            border-radius:12px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-height:400px;
            border-radius: 12px;
            object-position:center;
        }
        @media screen and (min-width: 1024px){
            .destaque-text{
                
                width: 700px;
            p{
                font-size: 16px;
                padding-top: 5px;
            }
        }
        }
    
`