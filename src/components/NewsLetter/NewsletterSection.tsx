"use client";

import { NewsletterForm, type NewsletterFormValues } from "./NewsletterForm";
import { Toast } from "./Toast";
import { useToast } from "./useToast";

export interface NewsletterSectionProps {
  title?: string;
  description?: string;
  /**
   * Integração real (ex: chamada de API/CRM). Se não for passada, o
   * componente simula um envio assíncrono — útil em protótipos e Storybook.
   */
  onSubscribe?: (values: NewsletterFormValues) => Promise<void> | void;
}

const BACKGROUND_COLOR = "#271C47";

async function defaultSubscribeHandler(values: NewsletterFormValues) {
  // Simula latência de rede. Substitua por uma chamada real de API.
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log("Nova inscrição na newsletter:", values);
}

export function NewsletterSection({
  title = "Inscreva-se na nossa newsletter",
  description = "Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.",
  onSubscribe = defaultSubscribeHandler,
}: NewsletterSectionProps) {
  const { toast, show, dismiss } = useToast();

  async function handleSubmit(values: NewsletterFormValues) {
    try {
      await onSubscribe(values);
      show(
        `Inscrição confirmada! Enviamos uma confirmação para ${values.email}.`,
        "success",
      );
    } catch {
      show(
        "Não foi possível concluir sua inscrição. Tente novamente.",
        "error",
      );
    }
  }

  return (
    <section
      className="w-full py-6 px-4 md:px-10"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-white max-w-md">
          <h2 className="font-extrabold text-lg md:text-xl leading-snug !text-[#fff] text-start">
            {title}
          </h2>
          <p className="text-sm mt-1 !text-[#fff] text-start">{description}</p>
        </div>

        <NewsletterForm onSubmit={handleSubmit} />
      </div>

      <Toast toast={toast} onDismiss={dismiss} />
    </section>
  );
}
