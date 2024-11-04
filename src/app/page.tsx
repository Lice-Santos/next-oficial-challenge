"use client"

import Cabecalho from "./Cabecalho";
import AreaSelecao4 from "./AreaSelecao4";
import AreaSelecao1 from "./AreaSelecao1";
import AreaSelecao2 from "./AreaSelecao2";
import AreaSelecao3 from "./AreaSelecao3";
import OpcoesHome1 from "./OpcoesHome1";
import AreaSelecao5 from "./AreaSelecao5";
import { MainPags } from "./styles";
import imgDiagnostico from "../../public/image/diagnostico.png";
import imgRevisao from "../../public/image/revisao.png";
import imgHistorico from "../../public/image/historico.png";
import mecanico from "../../public/image/mecanicoInicial.png";
import pranchetaAzul from "../../public/image/pranchetaAzul.png";
import revisaoIniciar from "../../public/image/revisaoInicial.png"
import oficina from "../../public/image/acharOficina.png";
import historicoInicial from "../../public/image/historicoInicial.png"

export default function Home() {
    
    return (
        <>
            <Cabecalho titulo="DIAGNÓSTICO" paragrafo="Descubra o problema do seu veículo" textoBotao="INICIAR DIAGNOSTICO"/>
            <MainPags>
            <OpcoesHome1 logo1={imgDiagnostico} logo2={imgRevisao} logo3={imgHistorico}></OpcoesHome1>
            <AreaSelecao1 imagem={mecanico} inicioConteudo="Aqui na " conteudoMarcado="TRIA" finalConteudo="Te ajudar é a nossa maior satisfação."  textoBotao="SAIBA MAIS SOBRE NÓS"/>      
            <AreaSelecao2 imagem={pranchetaAzul} inicioConteudo="NO " conteudoMarcado="DIAGNÓSTICO " finalConteudo="você descobre os problemas do seu veículo respondendo a algumas perguntas!" textoBotao= ""/>
            <AreaSelecao3 imagem={revisaoIniciar} texto="Descubra potenciais problemas fazendo a REVISÃO do seu automóvel"></AreaSelecao3>
            <AreaSelecao4 imagem={oficina} texto="Encontre as oficinas mais próximas de você!" textoBotao = "BUSCAR OFICINAS"></AreaSelecao4>
            <AreaSelecao5 imagem={historicoInicial} texto="Veja as revisões e diagnósticos feitos anteriormente!" textoBotao="VER HISTÓRICO" titulo="HISTÓRICO"></AreaSelecao5>            
            </MainPags>
        </>
    )
}