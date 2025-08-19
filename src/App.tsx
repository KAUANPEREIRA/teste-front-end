import React from 'react';
import logo from './logo.svg';
import './App.css';

import menuData from './utils/menuData.json';
import { CategoriesList } from './componentes/categoriesList/CategoriesList';
import { Providers } from './utils/provider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Header } from './componentes//header/Header';
import Banner from './componentes/banner/Banner';
import { ProductsList } from './componentes/productsList/ProductsList';
import PartnerSection from './componentes/partnerSection/PartnerSection';
import { CarouselProduct } from './componentes/carouselProduct/CarouselProduct';
import { NavigatioMarcas } from './componentes/navigationMarcas/NavigatioMarcas';
import {Newsletter} from './componentes/newsletter/Newslettter';
import { Footer } from './componentes/footer/Footer';

function App() {
   

  return (
    <Providers>
      <div className="App">
        <Header />
        <Banner />
        <CategoriesList />
        <ProductsList/>
        <PartnerSection/>
        <CarouselProduct/>
        <PartnerSection/>
        <NavigatioMarcas/>
        <CarouselProduct/>
        <Newsletter/>
        <Footer/>
       
      </div>
    </Providers>
  );
}

export default App;
