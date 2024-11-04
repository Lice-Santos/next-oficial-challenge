"use client";
import { useEffect, useState } from "react";
import { CarroProps } from "../types";
import Link from "next/link";

export default function Carros() {
    const [lista, setLista] = useState<CarroProps[]>([]);

    const chamadaApi = async () => {
        const response = await fetch("http://localhost:8080/carro");
        const data = await response.json();
        setLista(data);
        console.log(data);
    };

    useEffect(() => {
        chamadaApi();
    }, []);

    return (
        <main className="grow p-5">
            <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">Carros</h1>
            <table className="w-2/3 m-auto">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th>Id</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Quilometragem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((carro) => (
                        <tr key={carro.id}>
                            <td>{carro.id}</td>
                            <td>{carro.placa}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.modelo}</td>
                            <td>{carro.ano}</td>
                            <td>{carro.quilometragem}</td>
                            <td>
                                <Link href={`/carros/${carro.id}`} className="text-blue-500 underline">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/carros/cad-carros" className="text-blue-500 underline block text-center mt-4">
                Cadastrar Novo Carro
            </Link>
        </main>
    );
}
