"use client";

import { useState, type FormEvent } from "react";

export interface NewsletterFormValues {
  name: string;
  email: string;
}

export interface NewsletterFormProps {
  /**
   * Chamado quando o formulário é válido e enviado. Pode ser assíncrono
   * (ex: chamada de API) — o formulário aguarda a Promise para liberar o
   * botão e limpar os campos.
   */
  onSubmit: (values: NewsletterFormValues) => Promise<void> | void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  name?: string;
  email?: string;
  terms?: string;
}

const THEME = {
  accent: "#F7CA11",
  accentHover: "#E5B90E",
  panelText: "rgba(255,255,255,0.7)",
};

export function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Informe seu nome.";
    if (!email.trim()) next.email = "Informe seu e-mail.";
    else if (!EMAIL_REGEX.test(email)) next.email = "E-mail inválido.";
    if (!accepted) next.terms = "Aceite os termos para continuar.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      await onSubmit({ name: name.trim(), email: email.trim() });
      setName("");
      setEmail("");
      setAccepted(false);
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-2 w-full md:w-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="newsletter-name" className="sr-only">
            Seu nome
          </label>
          <input
            id="newsletter-name"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "newsletter-name-error" : undefined}
            className="h-11 rounded-md px-4 text-sm text-gray-800 placeholder-gray-400
              bg-white outline-none ring-2 ring-transparent focus:ring-[#F7CA11]
              transition-shadow w-full sm:w-56"
          />
          {errors.name && (
            <span id="newsletter-name-error" className="text-xs text-red-300">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "newsletter-email-error" : undefined}
            className="h-11 rounded-md px-4 text-sm text-gray-800 placeholder-gray-400
              bg-white outline-none ring-2 ring-transparent focus:ring-[#F7CA11]
              transition-shadow w-full sm:w-56"
          />
          {errors.email && (
            <span id="newsletter-email-error" className="text-xs text-red-300">
              {errors.email}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-6 rounded-md font-bold text-xs uppercase tracking-wide
            text-[#241A40] transition-colors shrink-0 disabled:opacity-60
            disabled:cursor-not-allowed"
          style={{ backgroundColor: isSubmitting ? THEME.accentHover : THEME.accent }}
          onMouseEnter={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = THEME.accentHover;
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = THEME.accent;
          }}
        >
          {isSubmitting ? "Inscrevendo..." : "Inscrever"}
        </button>
      </div>

      <label className="flex items-center gap-2 text-xs cursor-pointer select-none mt-1">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          aria-describedby={errors.terms ? "newsletter-terms-error" : undefined}
          className="w-3.5 h-3.5 rounded-sm accent-[#F7CA11] cursor-pointer"
        />
        <span style={{ color: THEME.panelText }}>Aceito os termos e condições</span>
      </label>
      {errors.terms && (
        <span id="newsletter-terms-error" className="text-xs text-red-300">
          {errors.terms}
        </span>
      )}
    </form>
  );
}
