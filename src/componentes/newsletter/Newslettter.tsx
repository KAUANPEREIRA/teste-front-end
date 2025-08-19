import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../componentes/newsletter/newsletter.scss"

export const Newsletter=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!terms) {
      toast.error("Você precisa aceitar os termos e condições.");
      return;
    }

    if (!name || !email) {
      toast.warn("Preencha todos os campos antes de enviar.");
      return;
    }

    // Simulação de envio
    console.log("Dados enviados:", { name, email });

    toast.success("Cadastro realizado com sucesso 🎉");

    // Resetar campos
    setName("");
    setEmail("");
    setTerms(false);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container container">
        <div className="newsletter__texts">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">INSCREVER</button>

          <label className="newsletter__checkbox">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            Aceito os termos e condições
          </label>
        </form>
      </div>

      {/* Container do Toastify */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

