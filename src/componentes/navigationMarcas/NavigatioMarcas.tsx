import React from "react";

export const NavigatioMarcas = () => {
  const marcas = Array(5).fill({
    src: "/imagens/rounded-econverse.webp", 
    alt: "Rounded Econverse", 
  });

  return (
    <div className="marcas-wrapper">
      <h2 className="marcas-title">Navegue por marcas</h2>
      <div className="marcas-grid">
        {marcas.map((marca, index) => (
          <img
            key={index}
            src={marca.src}
            alt={`${marca.alt} ${index + 1}`}
            className="marca-logo"
            onError={(e) => {
              // Fallback caso a imagem não carregue
              (e.target as HTMLImageElement).style.display = "none";
              console.error(`Erro ao carregar: ${marca.src}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};