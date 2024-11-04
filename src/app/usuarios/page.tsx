"use client";
import { useEffect, useState } from "react";
import { UsuarioProps } from "../types";
import Link from "next/link";

export default function Usuarios() {
    const [lista, setLista] = useState<UsuarioProps[]>([]);

    const chamadaApi = async () => {
        const response = await fetch("http://localhost:8080/usuario");
        const data = await response.json();
        setLista(data);
        console.log(data);
    };

    useEffect(() => {
        chamadaApi();
    }, []);

    return (
        <main className="grow p-5">
            <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">Usuários</h1>
            <table className="w-2/3 m-auto">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th>Id</th>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Data Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.cpf}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.sexo}</td>
                            <td>{usuario.dataNascimento}</td>
                            <td>
                                <Link href={`/usuarios/${usuario.id}`} className="text-blue-500 underline">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/usuarios/cad-usuarios" className="text-blue-500 underline block text-center mt-4">
                Cadastrar Novo Usuário
            </Link>
        </main>
    );
}
