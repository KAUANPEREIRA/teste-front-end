import { useQuery } from "@tanstack/react-query";
import { fetchRelatedProducts } from "../api/products";

export const relatedProductsQueryKey = ["related-products"] as const;

/**
 * Encapsula o useQuery em um hook próprio: o componente de UI nunca
 * conhece a query key, a função de fetch ou os detalhes de cache —
 * apenas consome { data, isLoading, isError, ... }. Isso permite
 * trocar a estratégia de fetch (ex.: paginação, filtro por categoria
 * no backend) sem tocar nos componentes visuais.
 */
export function useRelatedProductsQuery() {
  return useQuery({
    queryKey: relatedProductsQueryKey,
    queryFn: ({ signal }) => fetchRelatedProducts(signal),
    staleTime: 5 * 60 * 1000, // 5min: lista de produtos não muda a cada render
    retry: 1,
  });
}
