import Image from "next/image";
import { DivCardHistorico } from "../styles";
import { HistoricoProps } from "../types";

export default function CardRegistro(props : HistoricoProps){
    return(
        <DivCardHistorico>
            <Image width={300} src="../../public/diagnosticoHistorico.png" alt="" />
            <p><strong>Data:</strong> {props.data}</p>
            <p><strong>Diagnóstico:</strong> {props.diagnostico}</p>
            <p><strong>Placa:</strong> {props.placa}</p>
            <p><strong>Orçamento: </strong> R${props.orcamento}</p>
        </DivCardHistorico>
    )
}