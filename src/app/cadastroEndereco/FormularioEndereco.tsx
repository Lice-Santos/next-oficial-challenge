import { useState } from "react";
import { Endereco } from "../types";
import { SecFormCadastro } from "../styles";
import { redirect } from "next/navigation";


export default function FormularioEndereco() {

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<Endereco | null>(null);
    const [error, setError] = useState('');
    

    const finalizar = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault(); // Evita o reload da página
        redirect('/cadastroCarro')
    }

    // Função para buscar o endereço a partir do CEP
    const fetchAddress = async (cep: string) => {
        try {
            // Remove formatação do CEP
            const formattedCep = cep.replace(/\D/g, '');
            if (formattedCep.length !== 8) {
                setError('CEP inválido');
                setAddress(null);
                return;
            }

            // Chamando a API do ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`);
            const data = await response.json();

            // Verifica se o CEP é válido
            if (data.erro) {
                setError('CEP não encontrado');
                setAddress(null);
                return;
            }

            setError('');
            setAddress(data);
            console.log(data);
            
        } catch (error) {
            setError('Erro ao consultar o CEP');
            setAddress(null);
        }
    };

    // Função para lidar com a mudança no input do CEP
    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCep = event.target.value;
        setCep(newCep);

        // Chamando a função de busca com um pequeno atraso para evitar muitas chamadas
        if (newCep.length === 8) {
            fetchAddress(newCep);
        }
    };


    return (
        <>
            <SecFormCadastro>
                <h2>Cadastro Endereço</h2>
                <form>
                    <div>
                        <label>CEP</label>
                        <input
                            type="text"
                            value={cep}
                            onChange={handleCepChange}
                            maxLength={9}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <label>Logradouro</label>
                        <input
                            type="text"
                            value={address?.logradouro || ''}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Bairro</label>
                        <input
                            type="text"
                            value={address?.bairro || ''}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Cidade</label>
                        <input
                            type="text"
                            value={address?.localidade || ''}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Estado</label>
                        <input
                            type="text"
                            value={address?.uf || ''}
                            readOnly
                        />
                    </div>
                    <button type="submit" onClick={finalizar}>
                        Enviar
                    </button>
                    <div className="status">
                        <i id="agora" className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-minus"></i>
                        <i className="fa-solid fa-minus"></i>
                        <i id="agora" className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-minus"></i>
                        <i className="fa-solid fa-minus"></i>
                        <i id="falta" className="fa-solid fa-circle"></i>
                    </div>
                </form>
            </SecFormCadastro>
        </>
    )
}