"use client";

import { MainFormCrud } from "@/app/styles";
import { CarroProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Carro({ params }: { params: { id: number } }) {
interface PageProps {
    params: {
        id: string;
    };
}

export default function Carro({ params }: PageProps) {
    const navigate = useRouter();
    const id = params.id;

    const [carro, setCarro] = useState<CarroProps>({
        id: 0,
        placa: "",
        marca: "",
        modelo: "",
        ano: 0,
        quilometragem: 0,
    });

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:8080/carro/${id}`);
            const data = await response.json()
            setCarro(data)
            console.log(data)
        }
        chamadaApi()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarro((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro),
            };
            const response = await fetch(`http://localhost:8080/carro/${carro.id}`, cabecalho);
            if (response.ok) {
                alert('Carro atualizado com sucesso');
                setCarro({
                    id: 0,
                    placa: "",
                    marca: "",
                    modelo: "",
                    ano: 0,
                    quilometragem: 0,
                });
                navigate.push('/carros');
            } else {
                alert("Erro ao atualizar o carro");
            }
        } catch (error) {
            console.log("Erro ao atualizar o carro", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/carro/${carro.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Carro deletado com sucesso');
                navigate.push('/carros');
            } else {
                alert("Erro ao deletar o carro");
            }
        } catch (error) {
            console.log("Erro ao deletar o carro", error);
        }
    };

    return (
        <MainFormCrud className="grow p-5">
            <h1>Carro</h1>
            <form className="w-1/3 m-auto p-2 border border-indigo-950 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idplaca">Placa</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="placa"
                        id="idplaca"
                        onChange={handleChange}
                        value={carro.placa}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmarca">Marca</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="marca"
                        id="idmarca"
                        onChange={handleChange}
                        value={carro.marca}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmodelo">Modelo</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="modelo"
                        id="idmodelo"
                        onChange={handleChange}
                        value={carro.modelo}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idano">Ano</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="number"
                        name="ano"
                        id="idano"
                        onChange={handleChange}
                        value={carro.ano}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idquilometragem">Quilometragem</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="number"
                        name="quilometragem"
                        id="idquilometragem"
                        onChange={handleChange}
                        value={carro.quilometragem}
                    />
                </div>
                <div className="btns">

                <button className="bg-green-700" type="submit">
                    Atualizar Carro
                </button>
                <button className="bg-red-700" type="button" onClick={handleDelete}>
                    Deletar Carro
                </button>
                </div>
            </form>
        </MainFormCrud>
    );
}
