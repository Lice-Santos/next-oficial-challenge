import { useCallback, useState } from "react"
import { FormularioProps } from "../types";
import { SecFormLogin } from "../styles";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function Formulario() {

    const [formState, setFormState] = useState<FormularioProps>({
        email: "",
        senha: "",
        lembrarLogin: false
    });

    const handleSubmit = useCallback(
        (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault();

            const {email, senha} = formState;

            if (!email || !senha){
                window.alert("Preencha todos so campos")
                return;
            }

            redirect('/')
        },
        [formState]
    );

    const handleChangeInput = useCallback(
        (evento: React.FormEvent<HTMLInputElement>) => {

            const targetInput = evento.currentTarget;
            const {value, name, type, checked} = targetInput;

            const finalValue = type === "checkbox" ? checked: value

            setFormState({
                ...formState,
                [name]: finalValue,
            });

        },
        [formState]
    )

    return (
        <SecFormLogin>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="campo-texto">
                    <label>Email</label>
                    <input
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChangeInput}

                        className="bloco"
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
                        onChange={handleChangeInput} className="bloco"
                    /> 
                </div>
                <div className="cadastrar">
                    <p>Não tem uma conta?</p>
                    <Link href='/cadastro'>Crie uma!</Link>
                </div>
                <div className="campo-check">
                    <input
                        type="checkbox" 
                        id="lembrarLogin"
                        name="lembrarLogin"
                        checked={formState.lembrarLogin}
                        onChange={handleChangeInput}
                        /> 
                    <label>Mantenha-me logado</label>
                </div>
                <button type="submit">
                    Enviar
                </button>
            </form>
        </SecFormLogin>
    )
}