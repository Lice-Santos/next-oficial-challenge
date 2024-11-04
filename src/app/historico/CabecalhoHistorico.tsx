import { DivHistoricoCabec } from "../styles"

export default function CabecalhoHistorico(){
    return(
        <header>
            <DivHistoricoCabec style={{ backgroundImage: "url('/image/fundoHistorico.png')" }}>
            <h1>HISTÓRICO</h1>
            <p>VEJA OS LAUDOS ANTERIORES DO SEU AUTOMÓVEL</p>
            </DivHistoricoCabec>
        </header>
    )
}