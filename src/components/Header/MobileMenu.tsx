import { useEffect, useRef } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { TicketIcon } from "../icons/TicketIcon";
import { CartIcon } from "../icons/CartIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { UserIcon } from "../icons/UserIcon";

const categories = [
  { id: "all", label: "Todas categorias" },
  { id: "market", label: "Supermercado" },
  { id: "books", label: "Livros" },
  { id: "fashion", label: "Moda" },
  { id: "new", label: "Lançamentos" },
  { id: "deals", label: "Ofertas do dia", highlight: true },
  { id: "sub", label: "Assinatura", icon: <TicketIcon className="h-4 w-4" /> },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl flex flex-col
          transition-transform duration-300 ease-in-out md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header do drawer */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-100">
          <a href="/" onClick={onClose}>
            <img src="/logo.webp" alt="Econverse" className="h-7 w-auto" />
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-1.5 text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Busca */}
        <div className="px-4 py-3 border-b border-neutral-100">
          <div className="relative">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="w-full rounded-md border border-neutral-300 py-2.5 pl-4 pr-10
                text-sm outline-none focus:border-[#3019B2] bg-[#F6F5F2]"
            />
            <button
              type="button"
              aria-label="Buscar"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
            >
              <SearchIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Categorias */}
        <nav aria-label="Categorias" className="flex-1 overflow-y-auto px-4 py-2">
          <ul className="flex flex-col">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  href="#"
                  onClick={onClose}
                  className={`flex items-center gap-2 py-3 text-sm font-medium border-b
                    border-neutral-100 transition-colors
                    ${cat.highlight
                      ? "text-[#3019B2]"
                      : "text-neutral-600 hover:text-[#3019B2]"
                    }`}
                >
                  {cat.icon ?? null}
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações do usuário */}
        <div className="px-4 py-4 border-t border-neutral-100">
          <div className="flex items-center justify-around text-neutral-500">
            <button type="button" aria-label="Cupons"
              className="flex flex-col items-center gap-1 text-xs hover:text-[#3019B2] transition-colors">
              <TicketIcon className="h-5 w-5" />
              <span>Cupons</span>
            </button>
            <button type="button" aria-label="Favoritos"
              className="flex flex-col items-center gap-1 text-xs hover:text-[#3019B2] transition-colors">
              <HeartIcon className="h-5 w-5" />
              <span>Favoritos</span>
            </button>
            <button type="button" aria-label="Minha conta"
              className="flex flex-col items-center gap-1 text-xs hover:text-[#3019B2] transition-colors">
              <UserIcon className="h-5 w-5" />
              <span>Conta</span>
            </button>
            <button type="button" aria-label="Carrinho"
              className="flex flex-col items-center gap-1 text-xs hover:text-[#3019B2] transition-colors">
              <CartIcon className="h-5 w-5" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
