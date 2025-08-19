import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
 import '../../componentes/carouselProduct/productcard.scss'
 import { useProducts } from "../../hooks/useProducts"; 


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Produto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice: number;
};

export const CarouselProduct = () => {
  const { data, isLoading, error } = useProducts();
  
    if (isLoading) return <p>Carregando produtos...</p>;
    if (error instanceof Error) return <p>Erro: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="produtos-relacionados">Produtos em Destaque</h2>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.map((p, i) => (
          <SwiperSlide key={i}>
            <ProductCard
              image={p.photo}
              description={p.descriptionShort}
              oldPrice={`R$ 30,90`}
              price={`R$ ${p.price.toFixed(2)}`}
              installment={`ou 2x de R$ ${(p.price / 2).toFixed(2)} sem juros`}
              freeShipping="Frete grátis"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};