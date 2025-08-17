import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Produto = {
  productName: string;
  imageUrl: string;
  price: number;
};

export const ProductsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
        {
          headers: {
            "Content-Type": "application/json", 
             "Access-Control-Allow-Origin": "*"
          },
        }
      );
      return response.data.products as Produto[];
    },
  });

  if (isLoading) return <p>Carregando produtos...</p>;
  if (error instanceof Error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>{isLoading && "carregando..."}</h1>
      <h2>Lista de Produtos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data?.map((produto, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              gap: "1rem",
            }}
          >
            <img src={produto.imageUrl} alt={produto.productName} width={100} />
            <div>
              <p>{produto.productName}</p>
              <strong>R$ {produto.price}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
