import React, { useState } from 'react';
import './Login.css';

import Api from '../services/api';

import logo from '../assets/logo.png';

export default function Login() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await Api.get(`usuario/${user}/${senha}`);

        console.log(response)
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
            </form>
        </div>
    );
}