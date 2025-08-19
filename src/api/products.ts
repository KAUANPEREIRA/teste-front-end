import axios from 'axios';

export type Produto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice: number;
};

export const getProducts = async (): Promise<Produto[]> => {
  const response = await axios.get(
    '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  );
  return response.data.products;
};