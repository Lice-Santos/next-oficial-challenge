"use client"
import { MainPags } from "../styles";
import CabecalhoRevisao from "./CabecalhoRevisao";
import Dica from "./Dica";
import IdeiasVideos from "./IdeiasVideos";
import InicioRevisao from "./InicioRevisao";

export default function Revisao(){
    return(
        <>
        <MainPags>
            <CabecalhoRevisao />
            <InicioRevisao/>
            <Dica/>
            <IdeiasVideos/>
        
        </MainPags>
        </>
    )
}