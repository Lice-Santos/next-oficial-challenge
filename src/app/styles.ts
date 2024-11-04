"use client"

import styled from "styled-components";
export const HeaderCabecalho = styled.header`
    display: flex;
    flex-direction: column;
    
`

export const DivBanner = styled.div`
    /* @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap'); */
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    gap:5px;
    padding: 5vw;


    h1 {
        font-size: 60px;
        color: #fff;
        text-transform:uppercase;
    }

    p {
        font-size: 25px;
        color: #fff;
        opacity: 50%;

    }

    button{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 270px;
        padding: 20px;
        background-color: #52aee0;
        border-radius: 15px;

        color: #ffffff;
        margin-top: 10vh;
    }
    button:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 50px;
        }

        p {
            font-size: 20px;
        }

        button{
            width: 210px;
            padding: 18px;
        }
    }
`

export const DivBannerEquipe = styled.div`
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding: 5vw;


    h1 {
        font-size: 60px;
        color: #fff;
        text-transform:uppercase;
    }

    p {
        font-size: 25px;
        color: #fff;
        opacity: 50%;

    }


    @media screen and (max-width: 768px) {
        h1 {
            font-size: 50px;
        }

        p {
            font-size: 20px;
        }
    }
`

export const NavMenu = styled.nav`
    width: 100%;
    background-color: #00345A;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2;

    img {
        margin-left: 20px;
        width: 100px;
    }

    ul {
        width: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;


        div {
            display: flex;
            align-items: center;
        }

        li {
            padding: 20px 0;
        }

        a {
            padding: 15px 20px;
            background-color: #00345A;
            text-decoration: none;
            font-size: 22px;
            color: white;
        }

        a:hover {
            background-color: #00456a;
        }

    }

    @media screen and (max-width: 790px) {
        ul {
            a {
                padding: 7px;
                font-size: 16px;
            }
        }

        img{
            margin-left: 10px;
            width: 70px;
        }
    }
`

export const MainPags = styled.main`
    background-color: #f6f6f8;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const MainForm = styled.main`
    flex-grow: 1;
    background-color: #00395A;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DivTituloEquipe = styled.div`
    margin-top: 50px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    gap: 30px;

    i {
        font-size: 35px;
    }

    h2 {
        color: #00345a;
        font-size: 35px;
    }

    @media screen and (max-width: 970px) {
        i {
        font-size: 28px;
    }

    h2 {
        font-size: 30px;
    }
    }
`

export const DivFundoAzulClaro = styled.div`
    background-color: #8DD1F1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
    margin: 50px 0;

    @media screen and (max-width: 970px) {
        flex-direction: column;

        gap: 30px;
    }
`

export const DivCardMembro = styled.div`
    height: 550px;
    width: 350px;
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;

    img {
        width: 80px;
    }

    h3 {
        font-size: 25px;
        color: #00345A;
    }

    .container {
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;


        .social {
            display: flex;
            align-items: center;
            gap: 5px;

            i {
                font-size: 23px;
            }

            .fa-linkedin {
                color: #0e76a8;
            }
        }

        a {
            text-decoration: none;
            color: #00345A;
            font-size: 18px;
            font-weight: 600;
        }

        p {
            color: #00345A;
        }
    }

    @media screen and (max-width: 1200px) {
        height: 500px;
        width: 300px;

    }

    @media screen and (max-width: 970px) {
        height: 450px;
        width: 300px;
        img {
            width: 160px;
        }

        h3 {
            font-size: 20px;
        }

        .container {
            width: 200px;

            i {
                font-size: 18px;
            }
        }

        a {
            font-size: 14px;
        }

        p {
            font-size: 14px;
        }
    }

`

export const SecFormLogin = styled.section`
    background-color: #074C7E;
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: center;
    align-self: center;
    gap: 50px;
    border-radius: 15px;
    padding: 50px 0;

    h2 {
        text-transform: uppercase;
        color: #fff;
        font-size: 40px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        background-color: #074C7E;

        .linha-form {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .bloco{
            background-color: #074C7E;
            border-bottom: 2px solid white;
        }

        .campo-texto {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .cadastrar {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
                color: white;
            }

            a {
                color: #8DD1F1;
                text-decoration: none;
            }
        }

        .campo-check {
            align-self: flex-start;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
        }        

        label {
            color: white;
            display: block;
            font-size: 18px;
        }

        input {
            background-color: white;
            border: none;
            font-size: 16px;
        }

        #lembrarLogin {
            width: 17px;
            height: 17px;
        }

        button {
            margin: auto;
            text-align: center;
            background-color: #0066FF;
            font-weight: 700;
            font-size: 18px;
            padding: 10px 30px;
            border: none;
            cursor: pointer;
            color: white;
        }

        button:hover {
            background-color: #2211cc;
        }
    }
`

export const SecFormCadastro = styled.section`
    background-color: #074C7E;
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    align-self: center;
    gap: 50px;
    border-radius: 15px;
    padding: 50px 0;

    input{
        background-color: #074C7E !important;
        border-bottom: white 2px solid !important;
        color: #8DD1F1;
    }

    h2 {
        text-transform: uppercase;
        color: #fff;
        font-size: 40px;
        text-align: center;
        width: 50%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        background-color: #074C7E;

        .linha-form {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .campo-texto {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }



        .cadastrar {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
                color: white;
            }

            a {
                color: #8DD1F1;
                text-decoration: none;
            }
        }      

        label {
            color: white;
            display: block;
            font-size: 18px;
        }

        input {
            background-color: white;
            border: none;
            font-size: 16px;
        }

        .status {
            align-self: center;
            display: flex;
            align-items: center;

            i {
                font-size: 30px;
            }

            .fa-minus {
                color: white;
            }

            #agora {
                color: #0094FF;
            }

            #falta {
                color: white;
            }
        }

        button {
            margin: auto;
            text-align: center;
            background-color: #0066FF;
            font-weight: 700;
            font-size: 18px;
            padding: 10px 30px;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 50px;
        }

        button:hover {
            background-color: #0076FF;
        }
    }
`

export const DivRegistro = styled.div`
    width: 800px;

    header {
        padding: 20px;
        border-radius: 20px 20px 0 0;
        background-color: #B4B4B4;
        display: flex;
        align-items: center;
        justify-content: space-around;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
        }

        h3 {
            font-size: 20px;
            color: #585757;
            font-weight: 670;
            text-decoration: underline;
            text-transform: uppercase;
        }

        p {
            font-size: 16px;
            color: #585757;
            font-weight: 500;
        }
    }

    main {
        min-height: 250px;
        padding: 20px;
        border-radius: 0 0 20px 20px;
        background-color: #D9D9D9;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .infos {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;

            div {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                gap: 20px;
            }
        }

        h4 {
            color: #585757;
            font-weight: 670;
            font-size: 20px;
            text-transform: uppercase;
        }

        p {
            color: #7E7D7D;
            font-weight: 500;
            font-size: 18px;
        }
    }
`

export const SecHistorico = styled.section`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    h2 {
        color: #333333;
        text-transform: uppercase;
        font-size: 30px;
    }
`

export const DivHistoricoCabec = styled.div`
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50vh;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap:5px;
    padding: 5vw;


    h1 {
        font-size: 60px;
        color: #fff;
        text-transform:uppercase;
    }

    p {
        font-size: 25px;
        color: #fff;
        opacity: 50%;

    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }

`

export const DivCardHistorico = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: left;
    img{
        background-color: #051e67;
        border-radius: 10px;
        width: 200px;
        height: 170px;
    }

    img:hover{
        cursor: pointer;
        background-color: #053e67;
    }

    p{
        color: #051e67;
        width: 200px;
        margin: 5px;
        font-size: 15px;
        strong{
            color: #52aee0;
        }
     }
`
export const DivDiagnosticoHistorico = styled.div`
    display: flex;
    background-color: #ffffff;
    padding: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const DivAdicionarDiagnostico = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    border-radius: 10px;
    border: 3px solid #051e67;
    width: 200px;
    color: #051e67;
    height: 170px;
    cursor: pointer;


`

export const DivHistorico = styled.div`
    h2{
        color: #051e67;
        margin: 100px;
    }
    h3{
        background-color: #ffffff;
        width: 100%;
        padding: 50px;
        font-size: 25px;
        color: #051e67;
    }
`

export const FooterRodape = styled.footer`
    padding: 20px;
    background-color: #00345A;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;


    .parcerias {
        img {
            width: 200px;
        }
    }

    p {
        color: white;
        font-size: 22px;
        text-decoration: underline;
    }

    .ajuda {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 30px;
        }

        p {
            text-decoration: none;
            font-size: 16px;
        }

    }

    @media screen and (max-width: 900px) {
    height: 30vh;
    .parcerias {
        img {
            height: 50px;
            width: auto;
        }
    }

    p {
        font-size: 18px;
    }

    .ajuda {

        img {
            width: 20px;
            height: auto;
        }

        p {
            font-size: 14px;
        }

    }
    }
`

export const DivSobreNos = styled.div`
    background-color: #8DD1F1;
    border-radius: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

// HOME

export const DivOpcoes1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    background-color: #f6f6f8;
    flex-wrap: wrap;

    
    .container{
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-bottom: 10vh;

    }
    .itemOpcao{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        margin: 70px;
        padding: 30px;
        height: 370px;
        width: 280px;
        justify-content: center;
        border-radius: 15px;
        box-shadow: 2px 2px  gray;
    }

    .itemOpcao:hover{
        cursor: pointer;
    }
    

    .itemOpcao:active{
        background-color: #ececec;
    }

    h2{
        color: #051e67; 
        font-size: 45px;
        margin: 10vh;
        span{
            color: #52aee0;
        }
    }

    h3{
        color:#52aee0;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 22px;
    }

    p{
        font-size: 20px;
    }

    img{
        height: 100px;
        width: 100px;
        padding: 5px;
        margin-left: 80px;
        margin-right: 80px;
    }
    img:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 1080px) {
        h2{
        font-size: 40px;
        margin: 8vh;
        }
        .itemOpcao{
            margin: 50px;
            padding: 30px;
            height: 370px;
            width: 250px;
        }
    }
    @media screen and (max-width: 850px) {
        .container{
            flex-direction: column;
        }
        h2{
        font-size: 30px;
        margin: 8vh;
        }
        .itemOpcao{
            margin: 20px;
            padding: 30px;
            height: 190px;
            width: 270px;
        }
        img{
            height: 60px;
            width: 60px;
        }
        p{
            font-size: 15px;
        }
        h3{
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 20px;
        }
    }

`

export const DivAreaSelecao = styled.div`
    height: 80vh;
    display: flex;
    background-color: #ffffff;
    padding: 1em;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 20vw;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 15px;
        color: #051e67;
        margin-top: 10vh;
    }
    button:hover{
        cursor: pointer;
        background-color: #fcfcfc;
        
    }

    .linha{
        border-left: 5px solid gray;
        padding: 40px;
    }
    
    img{
        height: 300px;
        padding: 5px;
        margin: 5px;
        margin-left: 80px;
        margin-right: 80px;
    }
    .lado1{
        flex-direction: column;
        display: flex;
        align-items: right;
        padding-left: 20%;

    }

    h3{
        color: #051e67;
        text-decoration: none;
        font-size: 35px;

    }
    p{
        color: #051e67;
        font-size: 25px;
        margin-top: 18px;
        
    }

    strong{
        color: #051e67;

    }

    @media screen and (max-width: 1080px) {
        height: 50vh;
        .lado1{
            padding-left: 10%;
        }
        h3 {
            font-size: 25px;
        }

        img{
            height: 250px;
            width: 250px;
            margin-left: 25px;
            margin-right: 25px;
            
        }
        
    }

    @media screen and (max-width: 850px) {
        
        .linha{
            padding: 20px;
        }
        .lado1{
            padding-left: 5%;
        }
        h3 {
            font-size: 23px;
        }

        p {
            font-size: 18px;
        }

        img{
            height: 150px;
            width: 150px;
            margin-left: 20px;
            margin-right: 20px;
        }
        button{

        height: 40px;
        width: 100%;
        padding: 12px;
        margin-top: 5vh;
    }

    }
`

export const DivAreaSelecao2 = styled.div`
    display: flex;
    padding-top: 5%;
    padding-bottom: 5%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #f6f6f8;
    height: 80vh;

    button{
        display: flex;
        justify-content: center;
        align-items: center; 
        height: 20px;
        width: 20vw;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 15px;
        margin-top: 10vh;
        color: white;
    }
    button:hover{
        cursor: pointer;
        background-color: #0064FF;
    }

    
    img{
        height: 300px;
        width: 300px;
        padding: 30px;
        margin: 5px;
        margin-left: 80px;
        margin-right: 80px;

    }

    img:hover{
        cursor: pointer;
    }
    .lado2{
        flex-direction: column;
        display: flex;
        color: #00345A;
        text-align: left;
        width: 40vw;
    }

    h3{
        color: #051e67;
        text-decoration: none;
        font-size: 35px;

    }
    p{
        color: #051e67;
        font-size: 25px;
        margin-top: 18px;
        
    }

    .topico{
        font-size: 20px;
        margin-top: 30px;
    }
    span{
        background-color: #051e67;
        color: white;
        padding: 10px;
        margin-right: 10px;
    }

    strong{
        color: #8DD1F1;
    }

    @media screen and (max-width: 1080px) {
        .lado2{
            padding-right: 2%;
        }
        h3 {
            font-size: 25px;
        }
        p{
            font-size: 20px;
            margin-top: 15px;
        }
        .topico{
            font-size: 18px;
            margin-top: 30px;
        }
    }

    @media screen and (max-width: 850px) {
        .lado2{
            width: 80vw;
        }
        h3 {
            font-size: 23px;
        }
        p{
            font-size: 18px;
            margin-top: 10px;
            width: 80%;

        }
        .topico{
            font-size: 14px;
            margin-top: 25px;
        }
        img{
            height: 200px;
            width: 200px;
            padding: 30px;
            margin: 5px;
            margin-left: 20px;

        }
    }
`

export const DivAreaSelecao3 = styled.div`

    display: flex;
    height: 80vh;

    position: relative;
    img{
        height: auto;
        width: 100%;
        overflow: hidden;

    }

    p{
        top: 40%;
        position: absolute;
        font-size: 35px;
        padding-right: 50%;
        justify-content: center;
        padding-left: 7%;
        color: #051e67;
    }

    @media screen and (max-width: 1080px) {
        height: 80vh;
        p{
        display: flex;
        top: 50%;
        font-size: 25px;
        padding-right: 50%;
        padding-left: 5%;
    }
    }

    @media screen and (max-width: 850px) {
        height: 50vh;
        p{
        top: 30%;
        font-size: 25px;
        padding-right: 45%;
        padding-left: 7%;
    }

    }
`

export const DivAreaSelecao4 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding-top: 6%;
    padding-bottom: 6%;
    height: 80vh;
    .lado2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
    img{
        width: 25%;
        height: auto;
    }

    p{
        top: 40%;
        padding: 5%;
        padding-left: 20%;
        font-size: 35px;
        color: #051e67;
    }

    
    button{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 20vw;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 15px;
        border: 2px solid #52aee0;
        color: #051e67;
        margin-top: 10vh;
    }
    button:hover{
        cursor: pointer;
        background-color: #fcfcfc;
    }

    @media screen and (max-width: 1080px) {
        img{
            width: 30%;
        }
        p{
            padding: 4%;
            padding-left: 20%;
            font-size: 30px;
        }

    }

    @media screen and (max-width: 850px) {
        height: 50vh;
        img{
            height: 200px;
        }
        p{
        padding: 3%;
        padding-left: 15%;
        font-size: 23px;
    }
    .lado2{
        width: 40%;
    }

    }
`

export const DivAreaSelecao5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f8;
    padding: 5%;
    height: 80vh;

    img{
        width: 300px;
    }

    h3{
        font-size: 35px;
        margin-bottom: 20px;
    }

    p{
        font-size: 30px;   
        width: 70%;
    }

    button{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 20vw;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 15px;
        border: 2px solid #52aee0;
        color: #051e67;
        margin-top: 10vh;
    }
    button:hover{
        cursor: pointer;
        background-color: #fcfcfc;
    }
    @media screen and (max-width: 1080px) {
        img{
          width: 250px;
          height: 250px;
          }
        p{
            font-size: 25px;   
            width: 70%;
        }

    }

    @media screen and (max-width: 850px) {
        height: 50vh;
        img{
          width: 200px;
          height: 200px;
          }
        p{
            font-size: 20px;   
            width: 88%;
        }

    }
`

// REVISÃO

export const DivBannerRevisao = styled.div`
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50vh;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap:5px;
    padding: 5vw;


    h1 {
        font-size: 60px;
        color: #fff;
        text-transform:uppercase;
    }

    p {
        font-size: 25px;
        color: #fff;
        opacity: 50%;

    }

    #iniciar{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 200px;
        padding: 20px;
        background-color: #52aee0;
        border-radius: 15px;
        color: #ffffff;
        margin-top: 5vh;
    }
    button:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }

        #iniciar{
            width: 180px;
        }
    }
`

export const DivInicioRevisao = styled.div`
    display: flex;
    text-align: center;
    align-items: right;
    background-color: #f6f6f8;
    margin-top: 10%;
    margin-bottom: 10%;

    .lado2{
        display: flex;
        flex-direction: column;
        align-items: right;
        width: 100%;
        justify-content: center;
        padding: 50px;
        align-items: center;

        h2{
        color: #051e67;
        font-size: 35px;
        width: 70%;
        text-align: right;

        strong{
            color: #8DD1F1;
        }
    }

    p{
        color: #051e67;
        font-size: 30px;
        width: 70%;
        margin-top: 10vh;
        text-align: right;
        strong{
            
            text-decoration: dashed;
        }
    }

    }
    button{
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 250px;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 10vh;
        color: white;
    }
    button:hover{
            background-color: #0074FF;
            cursor: pointer;
        }

    a{
        margin: 10px;
        color: #00345A;
        font-size: 15px;
    }
    img{
        width: 600px;
        height: auto;
    }

    @media screen and (max-width: 1080px) {
        img{
            height: 300px;
            width: auto;
        }

        .lado2{
            padding: 30px;
            align-items: center;
        h2{
            font-size: 30px;
            width: 70%;
            text-align: right;

            strong{
                color: #8DD1F1;
            }
        }

        p{
            font-size: 25px;
            width: 70%;
            margin-top: 8vh;
        }

        }
    }
    @media screen and (max-width: 880px) {
        img{
            height: 150px;
            width: auto;
        }

        .lado2{
            padding: 10px;
            align-items: center;
        h2{
            font-size: 20px;
            width: 50%;
            text-align: right;

        }

        p{
            font-size: 15px;
            width: 70%;
            margin-top: 3vh;
        }

        }
    }

`

export const DivDicaRevisao = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color: #051e67;
    background-color: #ffffff;

    h3{
        margin-top: 10vh;
        font-size: 30px;
        text-decoration: dashed;
    }

    .container2{
        display: flex;
        align-items: end;
        height: 100%;
        background-color: red;
        img{
            width: auto;
            height: 500px;
        }
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: right;

        .topicos{
            width: 100%;
            padding-left: 10vw;
            .topico{
                margin: 50px;
                font-size: 25px;
                width: 70%;
            }
            span{
                background-color: #051e67;
                color: white;
                padding: 5px;
                margin-right: 10px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
    @media screen and (max-width: 1080px) {
        h3{
        margin-top: 5vh;
        font-size: 25px;
        }

        .container2{
            img{
                width: auto;
                height: 300px;
            }
        }
        .topicos{
            padding-left: 7vw;
            .topico{
                margin-top: 40px;
                font-size: 15px;
                width: 80%;
            }
        }
    }
    @media screen and (max-width: 880px) {
        h3{
            margin-top: 5vh;
            font-size: 20px;
        }

        .container2{
            img{
                width: auto;
                height: 300px;
            }
        }
        .topicos{
            padding-left: 2vw;
            .topico{
                margin-top: 40px;
                font-size: 10px;
                width: 90%;
            }
        }
    }

`

export const DivVideoRevisao = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #051e67;
    align-items: center;
    padding: 5%;
    height: 100%;
    
    .videos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
    }
    p{
        font-size: 30px;
        color: white;
    }

`



export const DivCardVideo = styled.dialog`
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    height: 290px;
    width: 270px;
    border: none;
    border-radius: 20px;
    overflow: hidden;
    align-items: center;
    margin-top: 5vh;
    p{
        padding:20px;
        font-size: 20px;
        color: #051e67;
    }

    img{
        width: 270px;
    }

    button{
        border: 2px solid #52aee0;
        padding: 5px;
        width: 50%;
        border-radius: 10px;
        background-color: white;
    }

    button:hover{
        background-color: #e9e7e7;
        cursor: pointer;
    }

    @media screen and (max-width: 1080px) {
        height: 230px;
        width: 210px;
        img{
            width: 220px;
        }
        p{
            padding:15px;
            font-size: 18px;
         }
    }
    @media screen and (max-width: 880px) {
        height: 210px;
        width: 200px;
        img{
            width: 200px;
        }
        p{
            padding:10px;
            font-size: 15px;
         }
    }

`
export const DialogPerguntas = styled.dialog`
    background-color: #ffffff;
    width: 60vw;
    border: none;
    border-radius: 10px;
    margin-top: 5vh;
    margin-left: 20vw;
    margin-right: 20vw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    &::backdrop{
        background-color: black;
        opacity: 60%;
    }

    h2{
        color: #051e67;
        font-size: 22px;
    }
    
    p{
        color: #0094FF;
        opacity: 100%;
        font-size: 30px;
        text-align: center;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: 100%;
        padding: 10%;
    }

    #sim{
        background-color: #0094FF;
        margin-top: 5vh;

    }

    #nao{
        background-color: #ff5757;
        margin-top: 2vh;

    }

    #divSair{
        display: flex;
        width: 100%;
        justify-content: end;

        img{
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-right: 30px;
        }
        #sair{
            border: none;
            background-color: #ffffff;
        }
    }


    .btn{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 20vw;
        padding: 20px;
        background-color: #52aee0;
        border-radius: 15px;
        color: #ffffff;
    }


    img{
        height: 150px;
        margin-bottom: 8%;
    }
    
    @media screen and (max-width: 1080px) {

    padding: 30px;

    h2{
        color: #051e67;
        font-size: 20px;
    }
    
    p{
        color: #0094FF;
        opacity: 100%;
        font-size: 30px;
        text-align: center;
    }

    .btn{

        height: 20px;
        width: 20vw;
        padding: 20px;
    }

    
}

@media screen and (max-width: 780px) {

    padding: 30px;

    h2{
        color: #051e67;
        font-size: 15px;
    }
    
    p{
        color: #0094FF;
        opacity: 100%;
        font-size: 25px;
        text-align: center;
    }

    .btn{
        height: 15px;
        width: 15vw;
        padding: 20px;
    }
}
`

export const DialogResp = styled.dialog`
    display: flex;
    background-color: #ffffff;
    width: 60vw;
    height: 90vh;
    border: none;
    border-radius: 10px;
    margin-top: 10vh;
    margin-left: 20vw;
    margin-right: 20vw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;

    &::backdrop{
        background-color: black;
        opacity: 60%;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            height: 100px;
            margin-bottom: 8%;
        }
    }
    .btn:hover{
        cursor: pointer;
    }

    h2{
        color: #00345A;
        text-align: center;
        font-size: 20px;
        opacity: 100%;
    }

    p{
        margin-top: 5vh;
        color: #8DD1F1;
        font-size: 30px;
        text-align: center;
        opacity: 100%;
    }

    #fechar{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 30px;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
        gap: 1;
    }


    .divBotao{
        display: flex;
        justify-content: center;
    }

    ul{
        color: #00345A;
        font-size: 20px;
        margin-top: 60px;
        margin-left: 10%;
        
    }

    @media screen and (max-width: 1080px) {
        padding: 40px;
        h2{
        font-size: 15px;
        }

        p{
            margin-top: 4vh;
            font-size: 25px;
        }

        .btn{
            width: 150px;
            height: 60px;
            padding: 6px;
            margin-top: 45px;
            font-size: 12px;
            align-items: center;

        }

        ul{
            font-size: 18px;
            margin-top: 55px;
        }
}
    @media screen and (max-width: 780px) {

        h2{
        font-size: 12px;
        }

        p{
            margin-top: 3vh;
            font-size: 22px;
        }

        .btn{
            width: 120px;
            height: 50px;
            padding: 5px;
            margin-top: 40px;
            font-size: 10px;
            align-items: center;

        }

        ul{
            font-size: 16px;
            margin-top: 50px;
        }
}
`

export const DialogConfirmacao = styled.dialog`

    display: flex;
    flex-direction: column;
    background-color: white;
    border: #00345A 2px solid;
    border-radius: 10px;
    margin-top: 42vh;
    width: 500px;
    height: 220px;
    margin-left: 30vw;

    &::backdrop{
        background-color: black;
        opacity: 60%;
    }


    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    .p1{
        text-align: left;
        color: white;
        background-color: #00345A;
        font-size: 20px;
        padding: 17px;
    }
    p{
        padding: 20px;
        font-size: 15px;
        color: #00345A;
        text-align: left;
    }

    .btn{
            width: 60px;
            height: 25px;
            font-size: 8px;
            margin: 5px;
            border: 1px solid;
            border-radius: 5px;
        }

    .btn:hover{
        cursor: pointer;
    }

    #bSim{
            background-color: #8DD1F1;;
        }
    
    #bNao{
            background-color: #b5b5b5;
        }

    .resp{
        display: flex;
        border-top: #00345A solid 1px;
        justify-content: right;
        padding: 10px;
    }

    @media screen and (max-width: 1080px) {
        width: 450px;
        height: 160px;
        margin-left: 25vw;
    .p1{
        font-size: 16px;
        padding: 15px;
    }
    p{
        padding: 16px;
        font-size: 13px;
    }

    .btn{
            width: 50px;
            height: 20px;
            font-size: 7px;
            margin: 4px;
    

        }

        .resp{
        padding: 8px;
    }

    }

    @media screen and (max-width: 780px) {
        width: 380px;
        height: 120px;
        margin-left: 15vw;
    .p1{
        font-size: 12px;
        padding: 13px;
    }
    p{
        padding: 14px;
        font-size: 11px;
    }

    .btn{
            width: 40px;
            height: 15px;
            font-size: 6px;
            margin: 3px;
    

        }

        .resp{
        padding: 6px;
    }
        
    }

`

export const ErroStyle = styled.div`
    height: 100vh;
    display: flex;
    background-color: #00345A;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 15px;
        color: rgb(141, 209, 241, 0.5);
    }

    .lado2{
    display: flex;
    flex-direction: column;
    width: 40vw;

        p{
            font-size: 50px;
            color: white;
        }
        .desc{
            color: #8DD1F1;
            font-size: 40px;
        }
    }

    img{
        height: 45vh;
    }

    button{
            width: 20em;
            height: 10%;
            padding: 5px;
            border: none;
            font-size: 15px;
            margin: 5px;
            border-radius: 5px;
            background-color: #0094FF;
            color: white;
            margin-top: 3vh;
        }

    button:hover{
        cursor: pointer;
        background-color: #0064FF;
    }

    @media screen and (max-width: 1080px) {
        h1{
            font-size: 12px;
        }
        p{
            font-size: 30px;
        }
        .desc{
            font-size: 20px;
        }
        
        button{
            width: 15em;
        }
    }
    
    @media screen and (max-width: 780px) {
        h1{
            font-size: 10px;
        }
        p{
            font-size: 35px;
        }
        .desc{
            font-size: 20px;
        }
        button{
            width: 10em;
        }
    }
`

export const DivWatson = styled.div`
    background-color: blue;
`

export const MainDiagnostico = styled.main`
    background-color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 80vh;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 50px;
        color: #00345A;
    }
    p{
        margin: 3vh;
        color: #0094FF;
        font-size: 25px;
    }
    @media screen and (max-width: 1080px) {
        height: 70vh;
        h1{
            font-size: 40px;
        }
    p{
        margin: 3vh;
        font-size: 22px;
    }
    }
    
    @media screen and (max-width: 780px) {
        height: 50vh;
        h1{
            font-size: 30px;
        }
        p{
            margin: 3vh;
            font-size: 15px;
        }
    }
    
`

export const PerfilStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20vh;
    align-items: center;
    justify-content: center;
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        border: 3px solid #051e67;
        border-radius: 100%;
    }
    img{
        height: 20vh;
    }
    p{
        margin: 10px;
        text-decoration: underline;
        font-size: 14px;
    }
    p:hover{
        cursor: pointer;
        color: grey;
    }

    h3{
        font-size: 20px;
        padding: 5px;
    }
`

// GERAR PDF

export const DivPDF = styled.div`

.margemSuperior{
    width: 100%;
    height: 100%;
    border: 1px solid;
    background-color: #051838;
}
`

export const SecAjuda = styled.section`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    margin-top: 4%;
    background-color: #8DD1F1;
    align-items: center;
    justify-content: center;
    gap: 40px;

    h1{
        font-size: 40px;
        text-align: center;
        color: white;
        margin: 50px;
    }

    h2{
        color: #00345A
    }

    a {
        padding: 15px 25px;
        text-decoration: none;
        color: #00345A;
        font-weight: 600;
        background-color: #0094FF;
        margin: 50px;
    }

`