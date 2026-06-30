import { useCallback, useState } from "react";
import { useRelatedProductsQuery } from "../../hooks/useRelatedProductsQuery";
import { useCarousel } from "../../hooks/useCarousel";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { CategoryTabs } from "./CategoryTabs";
import { ProductModal } from "./ProductModal";
import type { Product } from "../../types/product";

const SKELETON_COUNT = 4;

export function RelatedProducts() {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { data, isLoading, isError, error, refetch, isFetching } =
    useRelatedProductsQuery();

  const handleBuyClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const { containerRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useCarousel<HTMLUListElement>(data?.length);

  return (
    <section
      aria-label="Produtos relacionados"
      className="mx-auto w-full max-w-6xl px-4 py-8"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="h-px flex-1 border-t border-dashed border-neutral-300" />

        <h2 className="font-semibold !text-[#3442B5] !text-[30px]">
          Produtos relacionados
        </h2>
        <span className="h-px flex-1 border-t border-dashed border-neutral-300" />
      </div>

      <div className="border border-neutral-200 bg-white">
        <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="relative px-2 py-6 md:px-4">
          {isLoading && (
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <li key={index}>
                  <ProductCardSkeleton />
                </li>
              ))}
            </ul>
          )}

          {isError && (
            <div
              role="alert"
              className="flex flex-col items-center gap-3 py-10 text-center"
            >
              <p className="text-sm text-neutral-600">
                Não foi possível carregar os produtos relacionados.
                {error instanceof Error ? ` (${error.message})` : ""}
              </p>
              <button
                type="button"
                onClick={() => refetch()}
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {!isLoading && !isError && data && data.length === 0 && (
            <p className="py-10 text-center text-sm text-neutral-500">
              Nenhum produto encontrado.
            </p>
          )}

          {!isLoading && !isError && data && data.length > 0 && (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Produtos anteriores"
                className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-md disabled:cursor-not-allowed disabled:opacity-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-600"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <ul
                ref={containerRef}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {data.map((product) => (
                  <li
                    key={product.id}
                    className="w-[45%] flex-shrink-0 sm:w-[30%] md:w-[calc(25%-12px)]"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <ProductCard
                      product={product}
                      onBuyClick={handleBuyClick}
                    />
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Próximos produtos"
                className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-md disabled:cursor-not-allowed disabled:opacity-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-600"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {isFetching && !isLoading && (
            <p className="mt-2 text-center text-xs text-neutral-400">
              Atualizando...
            </p>
          )}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </section>
  );
}
