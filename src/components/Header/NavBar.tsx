import { TicketIcon } from "../icons/TicketIcon";

const categories = [
  { id: "all", label: "Todas categorias" },
  { id: "market", label: "Supermercado" },
  { id: "books", label: "Livros" },
  { id: "fashion", label: "Moda" },
  { id: "new", label: "Lançamentos" },
  { id: "deals", label: "Ofertas do dia", highlight: true },
];

export function NavBar() {
  return (
    <nav
      aria-label="Navegação principal"
      className="relative z-10 border-t border-b border-neutral-200 shadow-sm text-[#9F9F9F]
      max-w-[1280px] mx-auto
      "
    >
      <ul className="flex items-center justify-between px-4 py-3 text-xs font-medium uppercase tracking-wide text-[#9F9F9F]">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href="#"
              className={
                category.highlight
                  ? "text-[#3019B2]"
                  : "transition-colors hover:text-blue-600"
              }
            >
              {category.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center gap-1.5 transition-colors hover:text-blue-600 text-[#9F9F9F]"
          >
            <TicketIcon className="h-4 w-4" />
            Assinatura
          </a>
        </li>
      </ul>
    </nav>
  );
}
