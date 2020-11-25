import React, { useState } from 'react';
import './CadastroUsuario.css';
import Swal from 'sweetalert2'
import Api from '../services/api';

export default function CadastroUsuario({ history }) {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            Swal.fire({
                icon: 'warning',
                title: 'Senhas não são as mesmas.',
                showConfirmButton: false,
                timer: 2500
            })
            return;
        }

        let response = await Api.post('usuario', {
            Nome: nome,
            Senha: senha
        });

        console.log(response);

        if (response.status === 200) {
            Swal.fire({
                icon: 'sucess',
                title: 'Usuário cadastro com sucesso.',
                showConfirmButton: false,
                timer: 2500
            }).then(
                history.push("/")
            );
        }

    }

    return (
        <div className="cadastro-container">
            <form onSubmit={handleSubmit}>
                <h3>Cadastro de Usuário</h3>
                <label>
                    Nome:
                <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        onChange={e => setNome(e.target.value)} />
                </label>
                <label>
                    Senha:
                <input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={e => setSenha(e.target.value)} />
                </label>
                <label>
                    confirme:
                <input
                        type="password"
                        name="confirmar"
                        placeholder="Confirme sua senha"
                        onChange={e => setConfirmarSenha(e.target.value)} />
                </label>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}