"use client";
import { useEffect, useState } from "react";
import { CarroProps } from "../types";
import Link from "next/link";
import { MainTabela } from "../styles";

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
        <MainTabela className="grow p-5">
            <h1>Carros</h1>
            <table>
                <thead>
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
                                <Link href={`/carros/${carro.id}`} className="text-blue-700 hover:text-blue-950">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/carros/cad-carros" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                Cadastrar Novo Carro
            </Link>
        </MainTabela>
    );
}
