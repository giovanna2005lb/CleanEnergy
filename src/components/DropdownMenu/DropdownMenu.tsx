'use client'

import './style.css'
import { useState } from "react";

interface DropdownItem {
  title: string;
  content: string;
}

const dropdownItems: DropdownItem[] = [
  {
    title: "Problema com Login",
    content:
      "Se você está tendo dificuldades para fazer login em sua conta, por favor, verifique se o seu e-mail e senha estão corretos. Caso tenha esquecido sua senha, utilize a opção 'Esqueci minha senha' para redefini-la. Se o problema persistir, entre em contato com nossa equipe de suporte para receber ajuda imediata.",
  },
  {
    title: "Problema com Pagamento",
    content: "Se você está enfrentando dificuldades com o pagamento, primeiro verifique se os dados do seu cartão ou método de pagamento estão atualizados. Se o pagamento foi recusado ou não processado corretamente, tente outra forma de pagamento ou entre em contato com seu banco. Caso o problema continue, nossa equipe de suporte está à disposição para investigar e ajudar a resolver o problema.",
  },
  {
    title: "Problema de Serviço",
    content: "Caso esteja tendo problemas com o serviço contratado, como falhas no acesso ou qualidade abaixo do esperado, verifique sua conexão à internet e tente reiniciar o serviço. Se o problema persistir, informe os detalhes do ocorrido, como horário e tipo de falha, para que nossa equipe de suporte possa analisar e resolver o mais rápido possível.",
  },
  {
    title: "Privacidade e Segurança",
    content: "A privacidade e segurança dos nossos usuários são prioridades para nós. Se você tem dúvidas sobre o uso de seus dados pessoais, preocupações com a segurança de sua conta ou deseja atualizar suas configurações de privacidade, consulte nossa política de privacidade. Se você acredita que sua conta foi comprometida, entre em contato imediatamente com nossa equipe para investigar a situação.",
  },
];

const DropdownMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      {dropdownItems.map((item, index) => (
        <div key={index} className='content-dropdown'>
          <div
            onClick={() => toggleItem(index)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderBottom: "1px solid #ccc",
              background: openIndex === index ? "#e0e0e0" : "#f0f0f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span>{item.title}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <div style={{ padding: "10px", background: "#fafafa" }}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
