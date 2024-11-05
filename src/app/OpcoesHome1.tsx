import Link from "next/link"
import { OpcoesPrincipalProps } from "./types"
import Image from "next/image"
import { DivOpcoes1 } from "./styles"

export default function OpcoesHome1({logo1, logo2, logo3}: OpcoesPrincipalProps){

    return(
        <DivOpcoes1 > 
            <h2>Trilhando um caminho mais <span>seguro</span></h2>
            <div className="container">    
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/diagnostico'}>
                <div id="diagnostico" className="itemOpcao">
                    <Image width={100} height={100} src={logo1} alt="diagnóstico automotivo"/>
                    <h3>DIAGNÓSTICO</h3>
                    <p>Descubra o problema do seu veículo</p>
                </div>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/revisao'}>
                <div id="revisao" className="itemOpcao">
                    <Image width={100} height={100} src={logo2} alt="revisão assistida"/>

                    <h3>REVISÃO</h3>
                    <p>Revise seu veículo para identificar problemas</p>
                </div>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/historico'}>
                <div id="historico" className="itemOpcao" >
                    <Image width={100} height={100} src={logo3} alt="historico" />
                    <h3>HISTÓRICO</h3>
                    <p>Veja suas revisões e diagnósticos anteriores</p>

                </div>
                </Link>
            </div>
            
        </DivOpcoes1>
    )
}