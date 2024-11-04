import Image from "next/image"
import { DivAreaSelecao3 } from "./styles"
import { AreaSelecao3Props } from "./types"

export default function AreaSelecao3({imagem, texto} : AreaSelecao3Props){
    return(
        <DivAreaSelecao3>
        <p>{texto}</p>
        <Image src={imagem} height={900} width={700} alt="" />
        </DivAreaSelecao3>
    )
}