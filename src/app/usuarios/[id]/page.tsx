"use client";

import { MainFormCrud, MainTabela } from "@/app/styles";
import { UsuarioProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Usuario({ params }: { params: { id: number } }) {
    const navigate = useRouter();

    const [usuario, setUsuario] = useState<UsuarioProps>({
        id: 0,
        cpf: "",
        nome: "",
        sexo: "",
        dataNascimento: "",
    });

    // Desembrulha o `params.id` de forma assíncrona dentro do `useEffect`
    useEffect(() => {
        const fetchDiagnostico = async () => {
            try {
                const { id } = await params; // Desembrulhando `params.id`
                const response = await fetch(`http://localhost:8080/usuario/${id}`);
                const data = await response.json();
                setUsuario(data);
            } catch (error) {
                console.log("Erro ao buscar usuário", error);
            }
        };
        fetchDiagnostico();
    }, [params]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            };
            const response = await fetch(`http://localhost:8080/usuario/${usuario.id}`, cabecalho);
            if (response.ok) {
                alert('Usuário atualizado com sucesso');
                setUsuario({
                    id: 0,
                    cpf: "",
                    nome: "",
                    sexo: "",
                    dataNascimento: "",
                });
                navigate.push('/usuarios');
            } else {
                alert("Erro ao atualizar o usuário");
            }
        } catch (error) {
            console.log("Erro ao atualizar o usuário", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/usuario/${usuario.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Usuário deletado com sucesso');
                navigate.push('/usuarios');
            } else {
                alert("Erro ao deletar o usuário");
            }
        } catch (error) {
            console.log("Erro ao deletar o usuário", error);
        }
    };

    return (
        <MainFormCrud className="grow p-5">
            <h1>USUÁRIO</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idcpf">CPF</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="cpf" id="idcpf"
                        onChange={handleChange} value={usuario.cpf} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idnome">Nome</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="nome" id="idnome"
                        onChange={handleChange} value={usuario.nome} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idsexo">Sexo - M/F</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="sexo" id="idsexo"
                        onChange={handleChange} value={usuario.sexo} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="iddata">Data de Nascimento - yyyy-MM-dd</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="dataNascimento" id="iddata"
                        onChange={handleChange} value={usuario.dataNascimento} />
                </div>
                <div className="btns">
                <button className="bg-green-700" type="submit">
                    Atualizar Usuário
                </button>
                <button className="bg-red-700" type="button" onClick={handleDelete}>
                    Deletar Usuário
                </button>
                </div>
            </form>
        </MainFormCrud>
    );
}
