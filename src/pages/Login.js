import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Swal from 'sweetalert2';
import Api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ history }) {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (user === "" || senha === "") {
            Swal.fire({
                icon: 'warning',
                title: 'O usuário e senha devem ser preenchidos.',
                showConfirmButton: false,
                timer: 2500
            });

            return;
        }

        let response = await Api.get(`usuario/${user}/${senha}`);

        if (response.status === 200) {
            history.push('/agendamento');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuário ou senha incorreto.',
                showConfirmButton: false,
                timer: 2500
            });
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Estoque" />
                <input
                    placeholder="Usuario"
                    value={user}
                    onChange={e => setUser(e.target.value)} />
                <input
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="submit" >Enviar</button>
                <Link className="cadastro-link" to="CadastroUsuario">Cadastrar</Link>
            </form>
        </div>
    );
}