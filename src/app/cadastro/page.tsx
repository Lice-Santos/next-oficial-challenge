"use client"

import { MainForm } from "../styles";
import { useRouter } from "next/router";
import FormularioCadastroUsuario from "./FormularioCadastroUsuario";


export default function CadastroUsuario() {

    return (
        <>
            <MainForm>
                <FormularioCadastroUsuario />
            </MainForm>
        </>
    )
}