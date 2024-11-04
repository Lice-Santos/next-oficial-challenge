import { useEffect } from "react";
import { DialogPerguntas } from "../styles";
import { formRevisao } from "../types";
import Image from "next/image";

export default function PaginaPergunta({ orientacao, pergunta, onSim, onNao, btnSair, dialogRef } : formRevisao) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            btnSair(); 
          }
        };
    
        // Adiciona o ouvinte do evento keydown ao documento
        document.addEventListener('keydown', handleKeyDown);
    
        // Remove o ouvinte do evento quando o componente for desmontado
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, []);
    return (
        <DialogPerguntas ref={dialogRef} className="forms" >
            <div id="divSair">
                <button id="sair" onClick={btnSair} className="btnSair"><Image width={50} height={50} src="/image/fechar.png" alt="" /></button> 
            </div>
            <div className="container">
                <Image width={120} height={200} src="/image/fase1Revisao.png" alt="" />
                <h2>{orientacao}</h2>
                <p>{pergunta}</p>
                    <button id="sim" onClick={onSim} className="btn">SIM</button>
                    <button id="nao" onClick={onNao} className="btn">NÃO</button> 
            </div>
        </DialogPerguntas>
    );
}
