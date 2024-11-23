'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './style.css'

export default function Header() {
    const [email, setEmail] = useState<string | null>('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = localStorage.getItem('email');
            setEmail(storedEmail);
        }
    }, []);
    const router = useRouter();
    function handleLogout(){
        const escolha = confirm('Deseja realmente sair?');
        if (!escolha) return;
        localStorage.clear();
        router.push('/login');
    }

    return (
        <header className='p-5 text-white'>
        <h1 className='w-full text-3xl'>Clean Energy</h1>
            <nav>

                {
                    email ? (
                        <div className='flex gap-x-5'>
                            <a href="/integrantes">Integrantes</a>
                            <a href="/">
                                <i className='bi bi-house text-3xl'></i>
                            </a>
                            <a href="/perfil">
                                <i className='bi bi-person-circle text-3xl'></i>
                            </a>
                            <i className="bi bi-box-arrow-right text-3xl cursor-pointer" onClick={handleLogout}></i>
                            
                        </div>
                        
                        
                        )
                        : (
                            <div className='flex items-center w-48 justify-between'>
                                <a href="/integrantes" className=''>Integrantes</a>
                                <a href="/login">
                                <i className='bi bi-person-circle text-3xl'></i>
                            </a>
                            </div>
                            
                )
                }

            </nav>
        </header>
    )
}