"use client";
import { useEffect, useState } from "react";
import { DiagnosticoProps } from "../types";
import Link from "next/link";

export default function Diagnosticos() {
    const [lista, setLista] = useState<DiagnosticoProps[]>([]);

    const chamadaApi = async () => {
        const response = await fetch("http://localhost:8080/diagnostico");
        const data = await response.json();
        setLista(data);
        console.log(data);
    };

    useEffect(() => {
        chamadaApi();
    }, []);

    return (
        <main className="grow p-5">
            <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">Diagnósticos</h1>
            <table className="w-2/3 m-auto">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th>Id</th>
                        <th>Problema</th>
                        <th>Orçamento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((diagnostico) => (
                        <tr key={diagnostico.id}>
                            <td>{diagnostico.id}</td>
                            <td>{diagnostico.problema}</td>
                            <td>{diagnostico.orcamento}</td>
                            <td>
                                <Link href={`/diagnosticos/${diagnostico.id}`} className="text-blue-500 underline">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/diagnosticos/cad-diagnosticos" className="text-blue-500 underline block text-center mt-4">
                Cadastrar Novo Diagnóstico
            </Link>
        </main>
    );
}
