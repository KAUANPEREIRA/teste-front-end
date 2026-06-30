type Tab = {
  id: string;
  label: string;
};

const TABS: Tab[] = [
  { id: "celular", label: "Celular" },
  { id: "acessorios", label: "Acessórios" },
  { id: "tablets", label: "Tablets" },
  { id: "notebooks", label: "Notebooks" },
  { id: "tvs", label: "TVs" },
  { id: "todos", label: "Ver todos" },
];

type CategoryTabsProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function CategoryTabs({ activeTab, onTabChange }: CategoryTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Categorias de produtos relacionados"
      className="flex border-b border-neutral-200 text-xs font-semibold uppercase tracking-wide text-neutral-500 md:text-sm"
    >
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 border-b-2 px-2 py-3 transition-colors ${
              isActive
                ? "border-blue-700 text-blue-700"
                : "border-transparent hover:text-neutral-700"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
