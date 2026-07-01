import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../lib/currency";
import { useToast } from "../NewsLetter/useToast";
import { Toast } from "../NewsLetter/Toast";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(false);

  const { toast, show: showToast, dismiss } = useToast(3500);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable =
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [product, onClose]);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setPurchased(false);
    }
  }, [product]);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  function handleBuy() {
    if (!product) return;
    setPurchased(true);
    showToast(
      `Pedido confirmado! ${quantity}× ${product.productName} — ${formatCurrency(product.price * quantity)}`,
      "success",
    );
    setTimeout(onClose, 1800);
  }

  if (!product) return null;

  const totalPrice = product.price * quantity;

  return (
    <>
      <div
        role="presentation"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      >
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl rounded-lg bg-white shadow-2xl"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A59]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col sm:flex-row">
            <div className="flex items-center justify-center p-6 sm:w-2/5">
              <img
                src={product.photo}
                alt={product.productName}
                className="h-52 w-auto object-contain"
              />
            </div>

            <div className="hidden sm:block w-px bg-gray-100 my-6" />

            <div className="flex-1 p-6 flex flex-col gap-3">
              <h3
                id="product-modal-title"
                className="text-sm font-extrabold uppercase tracking-wide"
                style={{ color: "#003A59" }}
              >
                {product.productName}
              </h3>

              <div>
                <p className="text-2xl font-bold" style={{ color: "#003A59" }}>
                  {formatCurrency(totalPrice)}
                </p>
                {quantity > 1 && (
                  <p className="text-xs mt-0.5" style={{ color: "#889BA6" }}>
                    {formatCurrency(product.price)} × {quantity}
                  </p>
                )}
              </div>

              <p
                className="text-xs leading-relaxed"
                style={{ color: "#889BA6" }}
              >
                {product.descriptionShort}
              </p>

              <a
                href={`/produto/${product.id}`}
                className="text-xs underline-offset-2 hover:underline"
                style={{ color: "#368699" }}
              >
                Veja mais detalhes do produto &gt;
              </a>

              <div className="flex items-center gap-3 mt-2">
                <div
                  className="flex items-center rounded-md border"
                  style={{ borderColor: "#D7D7D7" }}
                >
                  <button
                    type="button"
                    onClick={decrement}
                    disabled={purchased}
                    aria-label="Diminuir quantidade"
                    className="w-9 h-10 flex items-center justify-center text-gray-500
                      hover:text-gray-800 transition-colors focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#003A59]
                      disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="text-base leading-none select-none">
                      −
                    </span>
                  </button>

                  <span
                    className="w-9 text-center text-sm font-semibold select-none tabular-nums"
                    style={{ color: "#003A59" }}
                    aria-live="polite"
                    aria-label={`Quantidade: ${quantity}`}
                  >
                    {String(quantity).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={increment}
                    disabled={purchased}
                    aria-label="Aumentar quantidade"
                    className="w-9 h-10 flex items-center justify-center text-gray-500
                      hover:text-gray-800 transition-colors focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#003A59]
                      disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="text-base leading-none select-none">
                      +
                    </span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuy}
                  disabled={purchased}
                  className="flex-1 h-10 rounded-md text-xs font-extrabold uppercase
                    tracking-widest transition-all hover:opacity-90
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#003A59] focus-visible:ring-offset-2
                    disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#F8CE26", color: "#003A59" }}
                >
                  {purchased ? "Confirmado ✓" : "Comprar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast toast={toast} onDismiss={dismiss} />
    </>
  );
}
