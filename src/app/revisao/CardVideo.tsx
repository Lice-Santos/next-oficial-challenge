import Image from "next/image";
import { DivCardVideo } from "../styles";
import { RevisaoVideoProps } from "../types";

export default function CardVideo({imagemVideo, descricao} : RevisaoVideoProps){
    return(
        <DivCardVideo>
            <Image width={270} src={imagemVideo} alt="" />
            <p>{descricao}</p>
            <button>ASSISTIR</button>
        </DivCardVideo>
    )
}