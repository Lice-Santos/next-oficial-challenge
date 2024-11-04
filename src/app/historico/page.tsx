"use client"
import { MainPags } from "../styles";
import AbaDiagnostico from "./AbaDiagnostico";
import CabecalhoHistorico from "./CabecalhoHistorico";


export default function Historico() {



    return (
        <>
            <CabecalhoHistorico />
            <MainPags>
                <AbaDiagnostico/>
            </MainPags>
        </>
    )
}