"use client";
import { useEffect, useState } from "react";
import { UsuarioProps } from "../types";
import Link from "next/link";
import { MainTabela } from "../styles";

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
        <MainTabela className="grow p-5">
            <h1 >Usuários</h1>
            <table>
                <thead >
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
                                <Link href={`/usuarios/${usuario.id}`} className="text-blue-700 hover:text-blue-950">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/usuarios/cad-usuarios" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                Cadastrar Novo Usuário
            </Link>
        </MainTabela>
    );
}
