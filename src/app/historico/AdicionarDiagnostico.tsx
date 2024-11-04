import Link from "next/link";
import { DivAdicionarDiagnostico } from "../styles";


export default function AdicionarDiagnostico(){
    return(
        <>
        <Link href={"/diagnostico"}>
            <DivAdicionarDiagnostico>
                +
            </DivAdicionarDiagnostico>
        </Link>
        </>
    )
}