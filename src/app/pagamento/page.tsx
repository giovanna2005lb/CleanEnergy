'use client'

import { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Pagamento = () => {
  const router = useRouter();
   
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const showForm = (method: string) => {
    setPaymentMethod(method);
  };

  const submitPayment = () => {
    toast.success('Pagamento processado com sucesso!');
    router.push("/perfil");
  };

  return (
    <div className="container-payment">
      <h2>Formas de Pagamento</h2>
      <div className="paymentOptions">
        <label>
          <input
            type="radio"
            name="payment-method"
            value="cartao"
            onChange={() => showForm("cartao")}
          />
          <img src="/static/images/credit.png" alt="Cartão de Crédito" />
          Cartão de Crédito
        </label>
        <label>
          <input
            type="radio"
            name="payment-method"
            value="pix"
            onChange={() => showForm("pix")}
          />
          <img src="/static/images/pix.png" alt="Pix" />
          Pix
        </label>
        <label>
          <input
            type="radio"
            name="payment-method"
            value="boleto"
            onChange={() => showForm("boleto")}
          />
          <img src="/static/images/boleto.png" alt="Boleto" />
          Boleto Bancário
        </label>
      </div>

      {paymentMethod === "cartao" && (
        <div className="cardForm">
          <h3>Pagamento com Cartão</h3>
          <form>
            <label htmlFor="card-number">Número do Cartão:</label>
            <input
              type="text"
              id="card-number"
              placeholder="Digite o número do cartão"
              required
            />

            <label htmlFor="card-holder">Nome do Titular:</label>
            <input
              type="text"
              id="card-holder"
              placeholder="Digite o nome como no cartão"
              required
            />

            <label htmlFor="expiry-date">Data de Validade:</label>
            <input type="month" id="expiry-date" required />

            <label htmlFor="security-code">Código de Segurança:</label>
            <input
              type="password"
              id="security-code"
              placeholder="CVV"
              required
            />
          </form>

          <div className="installments">
            <p>Selecione as parcelas:</p>
            <select>
              <option value="1">1x sem juros</option>
              <option value="2">2x sem juros</option>
              <option value="3">3x sem juros</option>
              <option value="4">4x sem juros</option>
            </select>
          </div>
        </div>
      )}

      {paymentMethod === "pix" && (
        <div className="pixMessage">
          <h3>Pagamento via Pix</h3>
          <p>
            Escaneie o QR Code abaixo ou copie o código Pix para completar o
            pagamento.
          </p>
          <img src="/static/images/chave-pix.png" alt="Leia este QR Code"/>
        </div>
      )}

      {paymentMethod === "boleto" && (
        <div className="pixMessage">
          <h3>Pagamento via Boleto</h3>
          <p>O boleto será gerado e enviado para o seu e-mail.</p>
        </div>
      )}

      <div className="buttonContainer">
        <button onClick={submitPayment}>Continuar</button>
      </div>
    </div>
  );
};

export default Pagamento;