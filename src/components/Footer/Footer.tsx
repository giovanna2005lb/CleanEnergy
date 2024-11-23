

export default function Footer(){
    return (
        <footer className="bg-[#006BB8] p-5 text-white">
            <div className="grid grid-cols-3 gap-x-4">
                <div className="flex flex-col gap-y-3">
                    <a href="/ajuda">Precisa de ajuda?</a>
                    <a href="/ajuda">Central de Ajuda</a>
                    <a href="/ajuda">Problema de serviço</a>
                    <a href="/ajuda">Política de Uso e Termos de Serviço</a>
                </div>
                <div className="flex flex-col gap-y-3">
                    <a href="/">Fale com a gente</a>
                    <a href="/">Suporte via WhatsApp</a>
                    <a href="/ajuda">Atendimento ao Cliente</a>
                    <a href="/ajuda">Consultoria Personalizada</a>
                </div>
                <div>
                    <h2>Horário de atendimento</h2>
                    <p className="mt-2">Suporte Técnico:</p>
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p className="mt-2">Consultoria Energética:</p>
                    <p>Segunda a Sexta: 9h às 17h</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
                <p>Clean Energy - Soluções para Gestão Energética Inteligente</p>
                <p>CNPJ: XX.XXX.XXX/XXXX-XX | Praça da Sé, 123 | São Paulo - SP, CEP: 01001-000</p>
            </div>
        </footer>
    )
}