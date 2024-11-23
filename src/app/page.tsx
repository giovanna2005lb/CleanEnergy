

export default function Home() {
  return (
    <>
      <main>
        <div className="w-4/5 m-auto my-7 flex flex-col gap-y-10">
          <section className="flex flex-row items-center justify-between container-sect">
            <div className="w-4/5 xl:w-11/12 text-justify">
              <p>Com o aumento dos custos de energia e a pressão por práticas sustentáveis, a eficiência energética tornou-se uma prioridade global. O avanço da digitalização, impulsionado pela Internet das Coisas (IoT) e pela Inteligência Artificial (IA), oferece novas possibilidades para melhorar o uso de energia, desde pequenas residências até grandes complexos industriais. Essas tecnologias permitem a coleta e análise de dados em tempo real, ajudando a identificar padrões de consumo e oportunidades de otimização que anteriormente seriam difíceis de alcançar. A gestão energética digitalizada é, portanto, uma resposta moderna aos desafios econômicos e ambientais, visando tanto a economia quanto a redução do desperdício.</p>
            </div>
            <div className="w-full flex justify-end container-img">
              <img src="/static/images/painel_solar.jpg" alt="Imagem do painel solar" className="w-4/5" />
            </div>
          </section>
          <section className="flex flex-row items-center justify-between container-sect">
            <div className="w-full flex justify-start container-img">
              <img src="/static/images/lampada.jpg" alt="Imagem do lampada" className="w-4/5" />
            </div>
            <div className="w-4/5 xl:w-11/12 text-justify">
              <p>A digitalização na gestão energética permite que dispositivos conectados, como sensores IoT, monitorem o consumo em tempo real e forneçam dados precisos sobre a utilização de energia em cada etapa do processo. Em indústrias, por exemplo, os sensores podem registrar o consumo de máquinas específicas, permitindo ajustes automáticos que reduzam o uso em horários de menor demanda ou que interrompam a operação de equipamentos em stand-by. Em residências, dispositivos inteligentes podem ajustar a iluminação, o aquecimento e o resfriamento conforme a presença de pessoas, eliminando o desperdício e garantindo o conforto.</p>
            </div>
          </section>
          <section className="flex flex-row items-center justify-between container-sect">
            <div className="w-4/5 xl:w-11/12 text-justify">
              <p>A implementação de tecnologias digitais para a gestão energética tem um impacto direto na sustentabilidade, pois possibilita uma redução significativa no desperdício de energia. A eficiência energética gerada por dispositivos IoT e IA contribui para a redução da pegada de carbono e o uso consciente dos recursos naturais. Empresas e consumidores que adotam essas práticas não só economizam, mas também participam ativamente da transição para um modelo energético mais sustentável.
                Essa nova abordagem, ao integrar dados em tempo real com tecnologias avançadas, se destaca como uma solução para o futuro, onde a energia é utilizada de forma mais inteligente, responsável e econômica.</p>
            </div>
            <div className="w-full flex justify-end container-img">
              <img src="/static/images/plantinha.jpg" alt="Imagem da plantinha" className="w-4/5" />
            </div>
          </section>
        </div>

        <hr />
        <h1 className="text-3xl my-10 text-center">Planos</h1>
        <div className="flex flex-row gap-x-3 w-11/12 m-auto xl:w-9/12 xl:gap-x-6 container-bandeiras">
          <section className="flex flex-col justify-between bg-slate-300 rounded-3xl bandeiras">
            <div>
              <img src="/static/images/bandeira_vermelha.png" alt="Bandeira básica" />
            </div>
            <div>
              <ul className="flex flex-col gap-y-3 px-5 mt-3 lista">
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Acesso ao histórico</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Notificação de disperdício</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/excluir.png" alt="Excluir Image" className="w-8" />
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/excluir.png" alt="Excluir Image" className="w-8" />
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/excluir.png" alt="Excluir Image" className="w-8" />
                  <span>Monitoramento em tempo real</span>
                </li>
              </ul>
            </div>
            <div className="py-10">
              <a href="/pagamento">
                <img src="/static/images/acessar_vermelho.png" alt="botão de acesso" />
              </a>
            </div>

          </section>
          <section className="flex flex-col justify-between bg-slate-300 rounded-3xl bandeiras">
            <div>
              <img src="/static/images/bandeira_amarela.png" alt="Bandeira MÉDIO" />
            </div>
            <div>
              <ul className="flex flex-col gap-y-3 px-5 mt-3 lista">
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Acesso ao histórico</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Notificação de disperdício</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/excluir.png" alt="Excluir Image" className="w-8" />
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/excluir.png" alt="Excluir Image" className="w-8" />
                  <span>Monitoramento em tempo real</span>
                </li>
              </ul>
            </div>
            <div className="py-10">
              <a href="/pagamento">
                <img src="/static/images/acessar_amarelo.png" alt="botão de acesso" />
              </a>
            </div>

          </section>
          <section className="flex flex-col justify-between bg-slate-300 rounded-3xl bandeiras">
            <div>
              <img src="/static/images/bandeira_azul.png" alt="Bandeira premium" />
            </div>
            <div>
              <ul className="flex flex-col gap-y-3 px-5">
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Acesso ao histórico</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Notificação de disperdício</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex lista">
                  <img src="/static/images/check.png" alt="Check Image" className="w-7" />
                  <span>Monitoramento em tempo real</span>
                </li>
              </ul>
            </div>
            <div className="py-10">
              <a href="/pagamento">
                <img src="/static/images/acessar_azul.png" alt="botão de acesso" />
              </a>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}
