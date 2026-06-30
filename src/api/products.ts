import type { ApiProductsResponse, Product } from "../types/product";

const PRODUCTS_ENDPOINT = "/api/produtos";

export class FetchProductsError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "FetchProductsError";
  }
}

/**
 * Busca a lista de produtos relacionados.
 *
 * Normaliza a resposta da API para o shape `Product`, adicionando um
 * `id` estável (a API não retorna identificador único), e valida o
 * campo `success` antes de confiar nos dados.
 */
export async function fetchRelatedProducts(
  signal?: AbortSignal,
): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT, { signal });

  if (!response.ok) {
    throw new FetchProductsError(
      `Falha ao buscar produtos (status ${response.status})`,
      response.status,
    );
  }

  const data: ApiProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new FetchProductsError("Resposta da API em formato inesperado");
  }

  return data.products.map((product, index) => ({
    ...product,
    id: `${product.productName}-${index}`,
  }));
}
