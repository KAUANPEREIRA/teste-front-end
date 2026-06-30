"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import type { ToastData } from "./useToast";

export interface ToastProps {
  toast: ToastData | null;
  onDismiss: () => void;
}

const EXIT_ANIMATION_MS = 200;

/**
 * Toast flutuante com animação de entrada/saída via CSS transitions.
 *
 * Estratégia: mantemos uma cópia local (`rendered`) do toast para que,
 * quando o `toast` externo virar `null`, ainda tenhamos o conteúdo para
 * animar a saída antes de desmontar de fato.
 */
export function Toast({ toast, onDismiss }: ToastProps) {
  const [rendered, setRendered] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  // Toast novo chegou -> monta e, no próximo frame, dispara a transição de entrada.
  useEffect(() => {
    if (!toast) return;
    setRendered(toast);
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [toast]);

  // Toast foi descartado (timeout ou clique) -> anima saída, depois desmonta.
  useEffect(() => {
    if (toast) return;
    setVisible(false);
    const timeout = setTimeout(() => setRendered(null), EXIT_ANIMATION_MS);
    return () => clearTimeout(timeout);
  }, [toast]);

  if (!rendered) return null;

  const isSuccess = rendered.variant === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-50 flex items-start gap-3 rounded-xl px-4 py-3
        shadow-lg max-w-sm transition-all duration-200 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      style={{
        backgroundColor: isSuccess ? "#1F7A4D" : "#B3261E",
        color: "#FFFFFF",
      }}
    >
      <div className="mt-0.5 shrink-0">
        {isSuccess ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
      </div>

      <p className="text-sm leading-snug flex-1">{rendered.message}</p>

      <button
        type="button"
        aria-label="Fechar notificação"
        onClick={onDismiss}
        className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
}
