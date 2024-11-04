
import { DivVideoRevisao } from "../styles"
import CardVideo from "./CardVideo"
import acelerador from "../../../public/image/vAcelerador.png"
import pneu from "../../../public/image/vPneu.png"
import parabrisa from "../../../public/image/vParabrisa.png"

export default function IdeiasVideos(){
    return(
        <DivVideoRevisao>
                <p>Veja alguns vídeos para revisar seu automóvel</p>

                <div className="videos">
                    <CardVideo descricao="Teste o acelerador do seu veículo agora!" imagemVideo={acelerador}></CardVideo>
                    <CardVideo descricao="Saiba se os pneus esatão desgastados" imagemVideo={pneu}></CardVideo>
                    <CardVideo descricao="Quando trocar o limpador de parabrisa?" imagemVideo={parabrisa}></CardVideo>
                </div>
        </DivVideoRevisao>
    )
}