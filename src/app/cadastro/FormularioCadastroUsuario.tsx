import { useCallback, useState } from "react";
import { useRouter } from "next/router"; // Altere a importação
import { FormularioUsuarioProps } from "../types";
import { SecFormCadastro } from "../styles";
import { redirect } from "next/navigation";

export default function FormularioCadastroUsuario() {
    const [formState, setFormState] = useState<FormularioUsuarioProps>({
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        dtNascimento: "",
        telefone: "",
    });


    const handleSubmit = useCallback(
        (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault();

            const { email, senha } = formState;

            if (!email || !senha) {
                window.alert("Preencha todos os campos");
                return;
            }

            redirect('cadastroEndereco')
        },
        [formState] // Adicione router às dependências
    );

    const handleChangeInput = useCallback(
        (evento: React.FormEvent<HTMLInputElement>) => {
            const targetInput = evento.currentTarget;
            const { value, name, type, checked } = targetInput;

            const finalValue = type === "checkbox" ? checked : value;

            setFormState((prevState) => ({
                ...prevState,
                [name]: finalValue,
            }));
        },
        []
    );

    return (
        <SecFormCadastro>
            <h2></h2>
            <form onSubmit={handleSubmit}>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Nome</label>
                        <input
                            type="text" // Corrigido de "nome" para "text"
                            id="nome"
                            name="nome"
                            required
                            value={formState.nome}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            required
                            value={formState.cpf}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                            value={formState.senha}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Data de Nascimento</label>
                        <input
                            type="text"
                            id="dtNascimento"
                            name="dtNascimento"
                            required
                            value={formState.dtNascimento}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            required
                            value={formState.telefone}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <button type="submit">
                    Enviar
                </button>
                <div className="status">
                    <i id="agora" className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-minus"></i>   
                    <i id="falta" className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-minus"></i>   
                    <i id="falta" className="fa-solid fa-circle"></i>
                </div>
            </form>
        </SecFormCadastro>
    );
}
