"use client"
import { DivFundoAzulClaro, MainPags } from "../styles";
import CabecalhoEquipe from "./CabecalhoEquipe";
import CardMembro from "./CardMembro";
import TituloEquipe from "./TituloEquipe";


export default function Equipe() {

    return (
        <>  
            <CabecalhoEquipe/>
            <MainPags>
                <TituloEquipe />
                <DivFundoAzulClaro>
                    <CardMembro foto="/image/anne.png" nome="Anne Rezendes" linkGithub="#" github="annerezendes" linkLinkedin="#" linkedin="Anne Rezendes" rm={556779} turma="1TDSPI" />
                    <CardMembro foto="/image/alice.png" nome="Alice Nunes" linkGithub="#" github="lice-santos" linkLinkedin="#" linkedin="Alice Nunes" rm={559052} turma="1TDSPI"/>
                    <CardMembro foto="/image/akira.png" nome="Guilherme Nakamatsu" linkGithub="#" linkLinkedin="#" linkedin="Guilherme Nakamatsu" github="guiakiraa" rm={556128} turma="1TDSPI" />
                </DivFundoAzulClaro>
            </MainPags>
        </>
    )
}