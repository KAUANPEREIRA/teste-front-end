import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../carouselProduct/ProductCard";
import '../../componentes/productsList/produtos.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useProducts } from "../../hooks/useProducts"; 

export const ProductsList = () => {
 
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>Carregando produtos...</p>;
  if (error instanceof Error) return <p>Erro: {error.message}</p>;

  const tabNames = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"];

  return (
    <div className="container">
      <h2 className="produtos-relacionados">Produtos em Destaque</h2>
      <Tabs className="related-tabs">
        <TabList className="TabList">
          {tabNames.map((name, index) => (
            <Tab key={index}>{name}</Tab>
          ))}
        </TabList>

        {tabNames.map((_, index) => (
          <TabPanel key={index}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
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
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};