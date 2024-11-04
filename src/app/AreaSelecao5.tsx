import Image from "next/image";
import { DivAreaSelecao5 } from "./styles";
import { AreaSelecao5Props } from "./types";
import Link from "next/link";

export default function AreaSelecao5({titulo, texto, textoBotao, imagem} : AreaSelecao5Props){
    return(
        <DivAreaSelecao5>
            <div className="lado1">
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/historico'}>
                    <button>{textoBotao}</button>
                </Link>
            </div>
            <Image height={300} width={500} src={imagem} alt="" />
        </DivAreaSelecao5>
    )
}