'use client'

import { toast } from 'react-toastify';
import './style.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/usuario/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (response.ok) {
            const data = await response.json();
            toast.success('Login realizado com sucesso!')
            localStorage.setItem('email', data.email);
            router.push('/perfil');
        } else {
            const data = await response.json();
            if (data.error == "Usuário não encontrado") {
                toast.warn('Email e/ou senha incorretos.')
                return
            }
        }
    }

    return (
        <main>
            <section className='flex'>
                <div className="metade-img">
                    <p>Energia limpa é o caminho para um futuro mais sustentável</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-48'>
                        <a href="/">
                            <img src="/static/images/logo.png" alt="Logo Clean Energy" />
                        </a>
                    </div>
                    <div className='w-4/5'>
                        <form onSubmit={handleSubmit} className='flex flex-col form-cadastro'>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="submit" className='bg-[#006BB8] text-white py-2 px-4 rounded w-32 m-auto mt-3'>Entrar</button>
                        </form>
                    </div>
                    <div className='bg-gray-300 flex flex-col items-center mt-3 rounded px-1 py-3 mb-3'>
                        <span className='text-[#006BB8]'>Ainda não tem conta?</span>
                        <div className='bg-[#006BB8] text-white rounded w-4/5 text-center py-2'>
                            <a href="/register">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}