import Image from "next/image";
import { DivAreaSelecao4 } from "./styles";
import { AreaSelecao4Props } from "./types";

export default function AreaSelecao4({texto, imagem, textoBotao} : AreaSelecao4Props){
    return(
        <DivAreaSelecao4>
            <Image src={imagem} width={500} height={300} alt="" />
            <div className="lado2">
            <p>{texto}</p>
            <button>{textoBotao}</button>
            </div>
        </DivAreaSelecao4>
    )
}