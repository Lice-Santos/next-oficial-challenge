import { ExplicacaoProps } from "../types";

export default function RevisaoAssistida({ imagem }: ExplicacaoProps) {
    return (
        <dialog>
            <div className="container">
                <h2>VAMOS INICIAR A REVISÃO?</h2>

                <div className="dicasIniciais">
                    <img src={imagem} alt="Dica 1" />
                    <p>Esteja perto do seu veículo</p>
                </div>

                <div className="dicasIniciais">    
                    <img src={imagem} alt="Dica 2" />
                    <p>Siga o passo a passo da revisão</p>
                </div>

                <div className="dicasIniciais">
                    <img src={imagem} alt="Dica 3" />
                    <p>Veja o laudo final da sua revisão</p>
                </div>

                <button className="iniciar">INICIAR</button>
                <button className="cancelar">Cancelar</button>
            </div>
        </dialog>
    );
}
