import { useEffect, useRef, useState } from "react";
import PaginaPergunta from "./PaginaPergunta";
import Resposta from "./Resposta";
import Confirmacao from "./Confirmacao";

export default function BotaoIniciar(){
    const [indicePergunta, setIndicePergunta] = useState(0); 
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
    const [problemas, setProblemas] = useState<string[]>([]); 
    const dialogRef = useRef<HTMLDialogElement>(null); // Referência para o diálogo

    // Array com as perguntas
    const perguntas = [
        { orientacao: "1. Segure o acelerador do veículo.", pergunta: "Ele apresentou algum ruído?", tipoProblema: "Ruído ao acelerar" },
        { orientacao: "2. Ligue as palhetas do limpador de para-brisa.", pergunta: "Apresentou algum trepidação ou ruído estranho?", tipoProblema: "Ruído nas palhetas" },
        { orientacao: "3. Vá para um lugar amplo.", pergunta: "Dirija devagar com o automóvel. Ao soltar o volante, o carro desvia para a direita ou esquerda?", tipoProblema: "Alinhamento do automóvel" },
        { orientacao: "4. Peça ajuda a alguem e vá para um local amplo.", pergunta: "Ao engatar a marcha ré, ambas as luzes (ou apenas uma) de ré permanecem apagadas?", tipoProblema: "Lanterna traseira ré" },
        { orientacao: "5. Vamos verificar o óleo do carro.", pergunta: "Após esfriar o motor, retire a vareta de óleo, limpe e a insira. O óleo está fora da marcação mínima e máxima?", tipoProblema: "Alinhamento do automóvel" },
    ];

    useEffect(() => {
        if (mostrarPergunta && dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, [mostrarPergunta, indicePergunta]); 

    useEffect(() => {
        if (mostrarResultado && dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, [mostrarResultado]);

    useEffect(() => {
        if (mostrarConfirmacao && dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, [mostrarConfirmacao]);

    const iniciarRevisao = () => {
        setMostrarPergunta(true); 
    };

    const btnSim = () => {
        setProblemas([...problemas, perguntas[indicePergunta].tipoProblema]); 
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); 
        } else {
            finalizarRevisao(); 
        }
    };

    const btnNao = () => {
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); 
        } else {
            finalizarRevisao(); 
        }
    };

    const btnSair = () => {
        setMostrarPergunta(false)
        setMostrarConfirmacao(true)
    };

    const finalizarRevisao = () => {
        setMostrarPergunta(false);
        setMostrarResultado(true); 
    };

    const fecharResultado = () => {
        setProblemas([]);
        setIndicePergunta(0);
        setMostrarResultado(false); 
    };

    const confirmarSair = (confirmou: boolean) => {
        setMostrarConfirmacao(false); // Fecha o modal de confirmação
        if (confirmou) {
            setMostrarPergunta(false);
            fecharResultado();
        } else {
            setMostrarPergunta(true);
        }
    };

    return(<>
        <button id="iniciar" onClick={iniciarRevisao}>
            INICIAR REVISÃO
        </button>
        {mostrarPergunta && (
                <PaginaPergunta
                    dialogRef={dialogRef}
                    orientacao={perguntas[indicePergunta].orientacao}
                    pergunta={perguntas[indicePergunta].pergunta}
                    onSim={btnSim}  
                    onNao={btnNao}
                    btnSair={btnSair}
                />
            )}
            {mostrarResultado && (
                <Resposta 
                    dialogRef={dialogRef} 
                    problemaProps={problemas}
                    onClose={fecharResultado}
                />
            )}
            {mostrarConfirmacao && (
                <Confirmacao 
                dialogRef={dialogRef}
                onConfirm={confirmarSair}
                />
                
            )}

        </>
    )
}