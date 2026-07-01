export type ApiProduct = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type ApiProductsResponse = {
  success: boolean;
  products: ApiProduct[];
};

export type Product = ApiProduct & {
  id: string;
};
