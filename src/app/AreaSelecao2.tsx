import Image from "next/image"
import { DivAreaSelecao2} from "./styles"
import { AreaSelecaoProps } from "./types"


export default function AreaSelecao2({inicioConteudo, finalConteudo, conteudoMarcado, imagem} : AreaSelecaoProps){

    return(
        <DivAreaSelecao2>
            <Image height={300} width={500} src={imagem} alt="texto de funcionalidade"/>
            <div className="lado2">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong></h3>
                <p>{finalConteudo}</p>
                <p className="topico"><span>1</span>FÁCIL de usar</p>
                <p className="topico"><span>2</span>RÁPIDO de fazer</p>
                <p className="topico"><span>3</span>ASSERTIVO no resultado</p>
            </div>

        </DivAreaSelecao2>
    )
}