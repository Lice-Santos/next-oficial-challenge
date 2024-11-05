"use client"
import { MainFormCrud } from "@/app/styles";
import { DiagnosticoProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroDiagnósticos() {

    const navigate = useRouter()

    const [diagnostico, setDiagnostico] = useState<DiagnosticoProps>({
        id: 0,
        problema: "",
        orcamento: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setDiagnostico({ ...diagnostico, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(diagnostico)
        }

        try {
            const response = await fetch("http://localhost:8080/diagnostico", cabecalho)

            if (response.ok) {
                alert(`${diagnostico.orcamento} cadastrado com sucesso`)
                setDiagnostico({
                    id: 0,
                    problema: "",
                    orcamento: 0
                })
                navigate.push("/diagnosticos")
            } else {
                alert("Erro ao cadastrar")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o diagnóstico:", error)
        }

    }

    return (
        <MainFormCrud className="grow p-5">
            <h1 className="text-3xl text-center font-bold mb-2 text-indigo-600">Cadastro de Diagnósticos</h1>
            <form className="w-1/3 m-auto border border-indigo-950 p-2 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idproblema">Problema</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="problema" id="idproblema"
                        onChange={handleChange} value={diagnostico.problema} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idorcamento">Orçamento</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="number" step={'0.01'} name="orcamento" id="idorcamento"
                        onChange={handleChange} value={diagnostico.orcamento} />
                </div>
                <button className="bg-green-700 text-white text-xl p-2 block ms-auto me-2 rounded-md" type="submit">Cadastrar Dianóstico</button>
            </form>
        </MainFormCrud>
    )

}