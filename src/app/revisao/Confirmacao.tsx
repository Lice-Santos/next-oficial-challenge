import { useEffect } from "react";
import { ConfirmacaoProps } from "../types";
import { DialogConfirmacao } from "../styles";

export default function Confirmacao({ dialogRef, onConfirm }: ConfirmacaoProps) {
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, [dialogRef]);

    return (
        <DialogConfirmacao ref={dialogRef}>
            <p className="p1">Confirmar finalização de revisão</p>
            <p>Tem certeza que deseja parar a revisão?</p>
            <div className="resp">
                <button className="btn" id="bSim" onClick={() => onConfirm(true)}>SIM</button>
                <button className="btn" id="bNao" onClick={() => onConfirm(false)}>NÃO</button>
            </div>
        </DialogConfirmacao>
    );
}
