import Image from "next/image";
import { DivInicioRevisao } from "../styles";

export default function InicioRevisao() {
    return (
        <>
            <DivInicioRevisao>
                <Image width={200} height={400} src="/image/carroRevisao.png" alt=""  />
                <div className="lado2">
                    <h2>O QUE É A <strong>REVISÃO ASSISTIDA?</strong></h2>
                    <p>A <strong>Revisão Assistida</strong> consiste em uma série de etapas que permitem que você mesmo realize um check-up completo no seu automóvel!</p>
                </div>
            </DivInicioRevisao>
        </>
    );
}
