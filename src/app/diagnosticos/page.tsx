"use client";
import { useEffect, useState } from "react";
import { DiagnosticoProps } from "../types";
import Link from "next/link";
import { MainTabela } from "../styles";

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
        <MainTabela className="grow p-5">
            <h1>Diagnósticos</h1>
            <table>
                <thead className="">
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
                                <Link href={`/diagnosticos/${diagnostico.id}`} className="text-blue-700 hover:text-blue-950">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/diagnosticos/cad-diagnosticos" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                Cadastrar Novo Diagnóstico
            </Link>
        </MainTabela>
    );
}
