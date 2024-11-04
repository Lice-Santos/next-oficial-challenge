import { useCallback, useState } from "react";
import { FormularioCarroProps } from "../types";
import { SecFormCadastro } from "../styles";
import { redirect } from "next/navigation";

export default function FormularioCadastroCarro() {

    const [formState, setFormState] = useState<FormularioCarroProps>({
        placa: "",
        marca: "",
        modelo: "",
        ano: 0,
        quilometragem: 0
    });

    const handleSubmit = useCallback(
        (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault();

            const {placa, marca, modelo, ano, quilometragem} = formState;

            if (!placa || !marca || !modelo || !ano || !quilometragem){
                window.alert("Preencha todos os campos");
                return;
            }

            redirect('/');
        },
        [formState]
    );

    const handleChangeInput = useCallback(
        (evento: React.FormEvent<HTMLInputElement>) => {
            const targetInput = evento.currentTarget;
            const { value, name, type, checked } = targetInput;

            const finalValue = type === "checkbox" ? checked : value;

            setFormState({
                ...formState,
                [name]: finalValue,
            });
        },
        [formState]
    );

    return (
        <SecFormCadastro>
            <h2>Cadastro Carro</h2>
            <form onSubmit={handleSubmit}>
                <div className="campo-texto">
                    <label>Placa</label>
                    <input
                        type="text" 
                        id="placa"
                        name="placa"
                        required
                        value={formState.placa}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Marca</label>
                    <input
                        type="text" 
                        id="marca"
                        name="marca"
                        required
                        value={formState.marca}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Modelo</label>
                    <input
                        type="text" 
                        id="modelo"
                        name="modelo"
                        required
                        value={formState.modelo}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Ano</label>
                    <input
                        type="number" 
                        id="ano"
                        name="ano"
                        required
                        value={formState.ano || ""}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Quilometragem</label>
                    <input
                        type="number" 
                        id="quilometragem"
                        name="quilometragem"
                        required
                        value={formState.quilometragem || ""}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <button type="submit">
                    Enviar
                </button>
                <div className="status">
                    <i id="agora" className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-minus"></i>   
                    <i id="agora" className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-minus"></i>   
                    <i id="agora" className="fa-solid fa-circle"></i>
                </div>
            </form>
        </SecFormCadastro>
    )
}
