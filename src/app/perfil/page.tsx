'use client'

import { useEffect } from 'react';
import './style.css'
import BarChart from "@/components/BarChart/BarChart";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Perfil(){
  const router = useRouter();
  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      toast.warn('Você precisa estar logado para acessar essa página.');
      router.push('/login');
    }
  })

  return (
    <main className="flex h-96">
      <section className="w-1/3 h-full flex justify-center flex-col">
        <div className="flex items-center flex-col">
          <i className="bi bi-person-circle text-5xl"></i>
          <a href="/perfil/editar" className='bg-[#006BB8] text-white px-3 rounded-3xl mb-2 hover:bg-white hover:text-black border transition-colors'>Editar Perfil</a>
        </div>
        <hr />
        <div className="flex flex-col items justify-between h-1/3 ml-3 mt-3">
          <div>
            <i className="bi bi-bell text-xl"></i>
            <span>Notificações</span>
          </div>
          <div>
            <i className="bi bi-file-earmark-text text-xl"></i>
            <span>Histórico</span>
          </div>
          <div>
            <i className="bi bi-cash-coin text-xl"></i>
            <span>Financeiro</span>
          </div>
          <div>
            <i className="bi bi-question-circle text-xl"></i>
            <a href="/ajuda">Ajuda</a>
          </div>
        </div>

      </section>
      <section className="w-full h-full justify-center">
        <BarChart />  
      </section>
    </main>
  )
}