"use client"

import Link from "next/link";
import {DivConsultar, MainPags } from "../styles";

export default function Consultar(){
    return(
        <MainPags>
            <DivConsultar>
                <h2>Consultar dados registrados no banco de dados!</h2>
                <p>O que vamos ver hoje?</p>
                <div className="opcoes">
                    <Link href={'/usuarios'}>
                      <button>Ver usuários</button>
                    </Link>
                    <Link href={'/carros'}>
                       <button>Ver carros</button>
                    </Link>
                    <Link href={'/diagnosticos'}>
                       <button>Ver diagnósticos</button>
                    </Link>
                </div>
            </DivConsultar>
        </MainPags>
    )
}