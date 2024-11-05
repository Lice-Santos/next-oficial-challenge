"use client";

import { MainFormCrud } from "@/app/styles";
import { DiagnosticoProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Diagnostico({ params }: { params: { id: number } }) {
    const navigate = useRouter();

    const [diagnostico, setDiagnostico] = useState<DiagnosticoProps>({
        id: 0,
        problema: "",
        orcamento: 0,
    });

    useEffect(() => {
        const fetchDiagnostico = async () => {
            try {
                const { id } = await params; 
                const response = await fetch(`http://localhost:8080/diagnostico/${id}`);
                const data = await response.json();
                setDiagnostico(data);
            } catch (error) {
                console.log("Erro ao buscar diagnóstico", error);
            }
        };
        fetchDiagnostico();
    }, [params]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDiagnostico((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(diagnostico),
            };
            const response = await fetch(`http://localhost:8080/diagnostico/${diagnostico.id}`, cabecalho);
            if (response.ok) {
                alert('Diagnóstico atualizado com sucesso');
                setDiagnostico({
                    id: 0,
                    problema: "",
                    orcamento: 0,
                });
                navigate.push('/diagnosticos');
            } else {
                alert("Erro ao atualizar o diagnóstico");
            }
        } catch (error) {
            console.log("Erro ao atualizar o diagnóstico", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/diagnostico/${diagnostico.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Diagnóstico deletado com sucesso');
                navigate.push('/diagnosticos');
            } else {
                alert("Erro ao deletar o diagnóstico");
            }
        } catch (error) {
            console.log("Erro ao deletar o diagnóstico", error);
        }
    };

    return (
        <MainFormCrud className="grow p-5">
            <h1 className="text-3xl text-center text-indigo-600 mb-4 font-bold">Diagnóstico</h1>
            <form className="w-1/3 m-auto p-2 border border-indigo-950 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idproblema">Problema</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="problema"
                        id="idproblema"
                        onChange={handleChange}
                        value={diagnostico.problema}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idorcamento">Orçamento</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="number"
                        step="0.01"
                        name="orcamento"
                        id="idorcamento"
                        onChange={handleChange}
                        value={diagnostico.orcamento}
                    />
                </div>
                <div className="btns">
                    <button className="bg-green-700">
                        Atualizar Diagnóstico
                    </button>
                    <button className="bg-red-700" type="button" onClick={handleDelete}>
                        Deletar Diagnóstico
                    </button>
                </div>
            </form>
        </MainFormCrud>
    );
}
