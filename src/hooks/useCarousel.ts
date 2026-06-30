import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Controla um carrossel baseado em scroll nativo (sem libs externas).
 * Usa scroll-snap via CSS no container e apenas calcula a largura de
 * um "passo" para os botões de seta, além de manter o estado de
 * disabled das setas sincronizado com a posição real do scroll.
 */
export function useCarousel<T extends HTMLElement>(
  /**
   * Qualquer valor que mude quando o conteúdo do carrossel mudar
   * (ex.: o array de produtos). Necessário porque a <ul> só existe
   * no DOM depois que os dados chegam — sem essa dependência, o
   * efeito de cálculo de scroll roda antes da ref existir e nunca
   * recalcula depois.
   */
  contentKey?: unknown
) {
  const containerRef = useRef<T | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Roda depois do paint, garantindo que scrollWidth já reflete o
    // layout final (imagens podem alterar a largura após o load).
    const raf = requestAnimationFrame(updateScrollState);

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, contentKey]);

  const scrollByStep = useCallback((direction: "prev" | "next") => {
    const el = containerRef.current;
    if (!el) return;

    const firstChild = el.firstElementChild as HTMLElement | null;
    const step = firstChild
      ? firstChild.getBoundingClientRect().width + 16 // + gap
      : el.clientWidth;

    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  }, []);

  return {
    containerRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev: () => scrollByStep("prev"),
    scrollNext: () => scrollByStep("next"),
    recalculate: updateScrollState,
  };
}
