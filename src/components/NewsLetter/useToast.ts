"use client";

import { useCallback, useRef, useState } from "react";

export type ToastVariant = "success" | "error";

export interface ToastData {
  id: number;
  message: string;
  variant: ToastVariant;
}

const DEFAULT_DURATION_MS = 3500;

/**
 * Hook genérico de toast — um único toast ativo por vez (suficiente para
 * formulários simples como o de newsletter). Pode ser reaproveitado em
 * qualquer outro componente que precise de feedback temporário.
 */
export function useToast(durationMs: number = DEFAULT_DURATION_MS) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast(null);
  }, []);

  const show = useCallback(
    (message: string, variant: ToastVariant = "success") => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setToast({ id: Date.now(), message, variant });
      timeoutRef.current = setTimeout(() => setToast(null), durationMs);
    },
    [durationMs]
  );

  return { toast, show, dismiss };
}
