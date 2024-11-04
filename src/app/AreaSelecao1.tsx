import Image from "next/image"
import { DivAreaSelecao } from "./styles"
import { AreaSelecaoProps } from "./types"
import Link from "next/link"

export default function AreaSelecao1({inicioConteudo, finalConteudo, conteudoMarcado, imagem, textoBotao} : AreaSelecaoProps){

    return(
        <DivAreaSelecao>
            <div className="lado1">
                <div className="linha">
                    <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong></h3>
                    <p>{finalConteudo}</p>
                </div>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/equipe'}>
                <button>{textoBotao}</button>
                </Link>
            </div>
            <Image src={imagem} height={300} alt="texto de funcionalidade" />
        </DivAreaSelecao>
    )
}