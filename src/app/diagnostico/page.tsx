"use client"
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";
import { MainDiagnostico } from "../styles";
import WatsonChat from "./WatsonChat";

export default function Diagnostico(){
    return(
        <MainDiagnostico className="grow flex">
            <h1>Olá! vamos iniciar seu diagnóstico?</h1>
            <p>Para fazer o seu diagnóstico, clique no ícone localizado no canto inferior</p>
            <WatsonChat/>
        </MainDiagnostico>
    )
}