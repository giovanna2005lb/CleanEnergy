'use client';

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface User {
    nome: string;
    email: string;
    idade: number;
    tipoResidencial: string;
    preferenciasEnergeticas: string;
}

export default function Edit() {
    const router = useRouter();
    const [user, setUser] = useState<User>({
        nome: '',
        email: '',
        idade: 0,
        tipoResidencial: '',
        preferenciasEnergeticas: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const email = localStorage.getItem('email');
            if (email) {
                fetchUserData(email);
            } else {
                toast.error("Email não encontrado no localStorage.");
                setIsLoading(false);
            }
        }
    }, []);

    async function fetchUserData(email: string) {
        try {
            const response = await fetch(`http://localhost:5000/usuarios/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                // Mescla os dados recebidos com os valores padrão para garantir que nenhuma propriedade seja undefined
                setUser({
                    nome: data.nome || '',
                    email: data.email || '',
                    idade: data.idade || 0,
                    tipoResidencial: data.tipoResidencial || '',
                    preferenciasEnergeticas: data.preferenciasEnergeticas || '',
                });
            } else {
                toast.error('Falha ao buscar dados do usuário.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            toast.error('Erro ao buscar dados do usuário.');
        } finally {
            setIsLoading(false);
        }
    }

    async function handleUpdate(event: React.FormEvent) {
        event.preventDefault();
        const escolha = confirm('Deseja realmente atualizar o usuário?');
        if (!escolha) {
            return
        }
        try {
            const response = await fetch(`http://localhost:5000/usuarios/${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                toast.success('Usuário atualizado com sucesso!');
            } else {
                toast.error('Falha ao atualizar usuário.');
            }
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            toast.error('Erro ao atualizar usuário.');
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: name === 'idade' ? Number(value) : value
        }));
    }

    async function handleDelete() {
        const escolha = confirm('Deseja realmente excluir o usuário? Essa ação não poderá ser desfeita.');
        if (!escolha) {
            return
        }
        const response = await fetch(`http://localhost:5000/usuarios/${user.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            localStorage.clear()
            toast.success('Usuário excluído com sucesso!');
            router.push('/');
        } else {
            toast.error('Falha ao excluir usuário.');
        }
        
        
    }

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Editar Perfil</h1>
            <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={user.nome}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label htmlFor="idade" className="block text-sm font-medium text-gray-700">Idade:</label>
                    <input
                        type="number"
                        id="idade"
                        name="idade"
                        value={user.idade}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="tipoResidencial" className="block text-sm font-medium text-gray-700">Tipo Residencial:</label>
                    <input
                        type="text"
                        id="tipoResidencial"
                        name="tipoResidencial"
                        value={user.tipoResidencial}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="preferenciasEnergeticas" className="block text-sm font-medium text-gray-700">Preferências Energéticas:</label>
                    <select
                        id="preferenciasEnergeticas"
                        name="preferenciasEnergeticas"
                        value={user.preferenciasEnergeticas}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option value="">Selecione</option>
                        <option value="DIA">DIA</option>
                        <option value="NOITE">NOITE</option>
                    </select>
                </div>
                <div className="flex gap-x-3">
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Atualizar</button>
                    <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700" onClick={handleDelete}>Excluir</button>
                </div>
            </form>
        </div>
    );
}