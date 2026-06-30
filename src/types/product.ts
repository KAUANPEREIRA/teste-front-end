/**
 * Formato exato retornado pela API.
 * A API não envia categoria, preço "de/por", parcelamento ou frete —
 * por isso o componente não inventa esses dados, apenas os deriva
 * (parcelamento) ou os omite (categoria, desconto) quando não existem.
 */
export type ApiProduct = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number; // valor em centavos (ex.: 2890 = R$ 28,90)
};

export type ApiProductsResponse = {
  success: boolean;
  products: ApiProduct[];
};

/**
 * Produto normalizado para uso na UI, com um id estável para keys
 * (a API não fornece um id único por produto).
 */
export type Product = ApiProduct & {
  id: string;
};
