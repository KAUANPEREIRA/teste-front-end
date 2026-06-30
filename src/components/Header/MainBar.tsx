import { CartIcon } from "../icons/CartIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { SearchIcon } from "../icons/SearchIcon";

import { TicketIcon } from "../icons/TicketIcon";
import { UserIcon } from "../icons/UserIcon";

export function MainBar() {
  return (
    <div className="flex justify-between gap-6 px-4 py-4 max-w-[1280px] mx-auto">
      <a href="/" className="shrink-0">
        <img
          src="/logo.webp"
          alt="Econverse"
          className="h-8 w-auto"
          fetchPriority="high"
        />
      </a>

      <div className="relative w-[630px]">
        <input
          type="text"
          placeholder="O que você está buscando?"
          className="w-full rounded-md border-neutral-300 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-[#3019B2] bg-[#F6F5F2]"
        />
        <button
          type="button"
          aria-label="Buscar"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-neutral-500"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex shrink-0 items-center gap-5 text-neutral-500">
        <button type="button" aria-label="Cupons">
          <TicketIcon className="h-5 w-5" />
        </button>
        <button type="button" aria-label="Favoritos">
          <HeartIcon className="h-5 w-5" />
        </button>
        <button type="button" aria-label="Minha conta">
          <UserIcon className="h-5 w-5" />
        </button>
        <button type="button" aria-label="Carrinho">
          <CartIcon className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
}
