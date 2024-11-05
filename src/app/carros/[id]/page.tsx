"use client";

import { MainFormCrud } from "@/app/styles";
import { CarroProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// A função agora é assíncrona para lidar com os parâmetros de rota
export default async function Carro({ params }: { params: { id: string } }) {
    const navigate = useRouter();
    const id = parseInt(params.id); // Convertendo para número

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
            const data = await response.json();
            setCarro(data);
            console.log(data);
        };
        chamadaApi();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarro((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro),
            };
            const response = await fetch(`http://localhost:8080/carro/${carro.id}`, cabecalho);
            if (response.ok) {
                alert("Carro atualizado com sucesso");
                setCarro({
                    id: 0,
                    placa: "",
                    marca: "",
                    modelo: "",
                    ano: 0,
                    quilometragem: 0,
                });
                navigate.push("/carros");
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
                method: "DELETE",
            });
            if (response.ok) {
                alert("Carro deletado com sucesso");
                navigate.push("/carros");
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
            </form>
        </MainFormCrud>
    );
}
