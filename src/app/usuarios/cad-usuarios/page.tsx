"use client"
import { MainFormCrud } from "@/app/styles";
import { UsuarioProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroUsuários() {

    const navigate = useRouter()

    const [usuario, setUsuario] = useState<UsuarioProps>({
        id: 0,
        cpf: "",
        nome: "",
        sexo: "",
        dataNascimento: "",
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario)
        }

        try {
            const response = await fetch("http://localhost:8080/usuario", cabecalho)

            if (response.ok) {
                alert(`${usuario.nome} cadastrado com sucesso`)
                setUsuario({
                    id: 0,
                    cpf: "",
                    nome: "",
                    sexo: "",
                    dataNascimento: "",
                })
                navigate.push("/usuarios")
            } else {
                alert("Erro ao cadastrar")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o usuário:", error)
        }

    }

    return (
        <MainFormCrud className="grow p-5">
            <h1 className="text-3xl text-center font-bold mb-2 text-indigo-600">Cadastro de Usuários</h1>
            <form className="w-1/3 m-auto border border-indigo-950 p-2 rounded-md" onSubmit={handleSubmit}>
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
                <button className="bg-green-700 text-white text-xl p-2 block ms-auto me-2 rounded-md" type="submit">Cadastrar Usuário</button>
            </form>
        </MainFormCrud>
    )

}