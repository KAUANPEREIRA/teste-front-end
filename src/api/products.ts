import type { ApiProductsResponse, Product } from "../types/product";

const PRODUCTS_ENDPOINT = "/api/produtos";

export interface FetchProductsError {
  message: string;
  status?: number;
}

export function createFetchError(
  message: string,
  status?: number,
): FetchProductsError {
  return { message, status };
}

export async function fetchRelatedProducts(
  signal?: AbortSignal,
): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT, { signal });

  if (!response.ok) {
    throw createFetchError(
      `Falha ao buscar produtos (status ${response.status})`,
      response.status,
    );
  }

  const data: ApiProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw createFetchError("Resposta da API em formato inesperado");
  }

  return data.products.map((product, index) => ({
    ...product,
    id: `${product.productName}-${index}`,
  }));
}
