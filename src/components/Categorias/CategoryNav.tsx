import { useState } from "react";

type Category = {
  id: string;
  label: string;
  icon: string;
};

const categories: Category[] = [
  {
    id: "tecnologia",
    label: "Tecnologia",
    icon: "/assets/categorias/tecnologia.webp",
  },
  {
    id: "supermercado",
    label: "Supermercado",
    icon: "/assets/categorias/supermercado.webp",
  },
  { id: "bebidas", label: "Bebidas", icon: "/assets/categorias/bebidas.webp" },
  {
    id: "ferramentas",
    label: "Ferramentas",
    icon: "/assets/categorias/ferramentas.webp",
  },
  { id: "saude", label: "Saúde", icon: "/assets/categorias/saude.webp" },
  {
    id: "esportes-fitness",
    label: "Esportes e Fitness",
    icon: "/assets/categorias/esportes-fitness.webp",
  },
  { id: "moda", label: "Moda", icon: "/assets/categorias/moda.webp" },
];

type CategoryNavProps = {
  defaultActiveId?: string;
  onCategoryChange?: (id: string) => void;
};

export function CategoryNav({
  defaultActiveId = "tecnologia",
  onCategoryChange,
}: CategoryNavProps) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  function handleSelect(id: string) {
    setActiveId(id);
    onCategoryChange?.(id);
  }

  return (
    <nav
      aria-label="Categorias"
      className="w-full bg-white mx-auto py-8 md:px-16"
    >
      <ul className="flex items-start justify-center gap-3 overflow-x-auto md:gap-6">
        {categories.map(({ id, label, icon }) => {
          const isActive = id === activeId;

          return (
            <li key={id} className="flex-shrink-0">
              <button
                type="button"
                onClick={() => handleSelect(id)}
                aria-pressed={isActive}
                className="group flex w-20 flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:w-24"
              >
                <span
                  className={`flex h-32 w-32 items-center justify-center rounded-xl border transition-colors md:h-[100px] md:w-[100px] ${
                    isActive
                      ? "border-blue-600 bg-blue-50"
                      : "border-transparent bg-neutral-100 group-hover:bg-neutral-200"
                  }`}
                >
                  <img
                    src={icon}
                    alt={label}
                    className="h-9 w-9 object-contain md:h-10 md:w-10"
                    loading="lazy"
                  />
                </span>

                <span
                  className={`text-center text-xs font-medium leading-tight transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-neutral-600 group-hover:text-neutral-900"
                  }`}
                >
                  {label}
                </span>

                <span
                  className={`h-0.5 w-8 rounded-full transition-colors ${
                    isActive ? "bg-blue-600" : "bg-transparent"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
