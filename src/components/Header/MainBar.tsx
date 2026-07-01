import { useState } from "react";
import { CartIcon } from "../icons/CartIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { TicketIcon } from "../icons/TicketIcon";
import { UserIcon } from "../icons/UserIcon";
import { MobileMenu } from "./MobileMenu";

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function MainBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-6 px-4 py-4 max-w-[1280px] mx-auto">
        {/* Hambúrguer — só mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center text-neutral-600 md:hidden"
        >
          <HamburgerIcon />
        </button>

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/logo.webp"
            alt="Econverse"
            className="h-8 w-auto"
            fetchPriority="high"
            rel="preload"
          />
        </a>

        {/* Busca — só desktop */}
        <div className="relative hidden md:block w-[630px]">
          <input
            type="text"
            placeholder="O que você está buscando?"
            className="w-full rounded-md border border-neutral-300 py-2.5 pl-4 pr-10
              text-sm outline-none focus:border-[#3019B2] bg-[#F6F5F2]"
          />
          <button
            type="button"
            aria-label="Buscar"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center
              justify-center text-neutral-500"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Ícones de ação */}
        <nav className="flex shrink-0 items-center gap-5 text-neutral-500">
          {/* Cupons e favoritos — só desktop */}
          <button type="button" aria-label="Cupons" className="hidden md:flex">
            <TicketIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Favoritos"
            className="hidden md:flex"
          >
            <HeartIcon className="h-5 w-5" />
          </button>

          {/* Conta e carrinho — sempre visíveis */}
          <button type="button" aria-label="Minha conta">
            <UserIcon className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Carrinho">
            <CartIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
