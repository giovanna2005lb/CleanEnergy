'use client'

import { toast } from 'react-toastify';
import '../login/style.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [retypeEmail, setRetypeEmail] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [preferenciasEnergeticas, setPreferenciasEnergeticas] = useState<string>('');
    const [tipoResidencial, setTipoResidencial] = useState('');
    const [idade, setIdade] = useState('');
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                nome,
                idade,
                preferenciasEnergeticas,
                tipoResidencial

            })


        }
        );
        if (response.ok) {
            toast.success('Registro realizado com sucesso!')
            router.push('/login')
        }
    }

    return (
        <main>
            <section className='flex flex-row-reverse'>
                <div className="metade-img">
                    <p>Energia limpa é o caminho para um futuro mais sustentável</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-y-2'>
                    <div className='w-48'>
                        <a href="/">
                            <img src="/static/images/logo.png" alt="Logo Clean Energy" />
                        </a>
                    </div>
                    <div className='w-4/5'>
                        <form onSubmit={handleSubmit} className='flex flex-col form-cadastro'>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                            <label htmlFor="Idade">Idade
                                <input type="number" id="idade" name="idade" required value={idade} onChange={(e) => setIdade(e.target.value)} />
                            </label>

                            <div className='flex justify-between gap-x-2'>
                                <div>
                                    <label htmlFor="email" className='text-nowrap inline-flex'>E-mail</label>
                                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="retypeEmail" className='text-nowrap'>Confirme seu e-mail</label>
                                    <input type="email" id="retypeEmail" name="retypeEmail" required value={retypeEmail} onChange={(e) => setRetypeEmail(e.target.value)} />
                                </div>
                            </div>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="retypeSenha">Confirme sua senha</label>
                            <input type="password" id="retypeSenha" name="retypeSenha" required value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                            <label htmlFor="preferenciaEnergetica">Preferência Energética</label>
                            <select className='outline' name="preferenciaEnergetica" value={preferenciasEnergeticas} onChange={(e) => setPreferenciasEnergeticas(e.target.value)}>
                                <option value="DIA">DIA</option>
                                <option value="NOITE">NOITE</option>
                            </select>
                            <label htmlFor="tipoResidencial">Tipo Residencial</label>
                            <input type="text" id="tipoResidencial" name="tipoResidencial" required value={tipoResidencial} onChange={(e) => setTipoResidencial(e.target.value)} />
                            <button type="submit" className='bg-[#006BB8] text-white rounded w-32 m-auto h-10 mt-4 mb-3'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}