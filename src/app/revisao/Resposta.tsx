import { useEffect } from "react";
import LaudoRevisao from "./LaudoRevisao";
import { DialogResp } from "../styles";
import { RespostaProps } from "../types";
import Image from "next/image";

export default function Resposta({ dialogRef, problemaProps, onClose }: RespostaProps) {
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, [dialogRef]);

    return (
        <DialogResp ref={dialogRef}>
            <div className="container">
                <Image width={100} height={200} src="/image/faseFimRevisao.png" alt="" />
                <h2>Revisão finalizada com sucesso!</h2>
                <p>Veja os problemas identificados:</p>
                <ul>
                    {problemaProps.map(prob => <li key={prob}>{prob}</li>)}
                </ul>
                <div className="divBotao">
                    <button className="btn" id="fechar" onClick={onClose}>Fechar</button> 
                </div>

            </div>
        </DialogResp>
    );
}
